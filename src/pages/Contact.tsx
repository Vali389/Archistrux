import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import emailjs from "@emailjs/browser";
import { Phone, Mail, MapPin, Clock, Send, MessageCircle, Loader2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import { Label } from "@/components/ui/label";
import heroContact from "@/assets/hero-contact.jpg";
import { useToast } from "@/hooks/use-toast";
import { COMPANY, whatsappHref } from "@/data/company";
import { EMAILJS_PUBLIC_KEY, EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID } from "@/config/emailjs";
import { cn } from "@/lib/utils";

const contactFormSchema = z.object({
  name: z.string().trim().min(2, "Name must be at least 2 characters").max(120),
  email: z.string().trim().email("Enter a valid email address"),
  phone: z
    .string()
    .trim()
    .superRefine((val, ctx) => {
      if (!val) return;
      const digits = val.replace(/\D/g, "");
      if (digits.length < 10) {
        ctx.addIssue({ code: z.ZodIssueCode.custom, message: "Phone must include at least 10 digits" });
      }
    }),
  subject: z.string().trim().min(3, "Subject must be at least 3 characters").max(200),
  message: z.string().trim().min(10, "Message must be at least 10 characters").max(5000),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

const contactInfo = [
  { icon: Phone, title: "Phone", details: [COMPANY.phoneDisplay], href: `tel:${COMPANY.phoneTel}` },
  { icon: Mail, title: "Email", details: [COMPANY.email], href: `mailto:${COMPANY.email}` },
  {
    icon: MapPin,
    title: "Office address",
    details: [COMPANY.legalName, COMPANY.address],
  },
  { icon: Clock, title: "Working hours", details: ["Mon - Sat: 9:00 AM - 7:00 PM", "Sunday: By appointment"] },
];

const mapEmbedUrl =
  "https://maps.google.com/maps?q=Manikonda,+Hyderabad,+Telangana&z=12&output=embed";

const inputClass =
  "w-full bg-input border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground font-body text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 transition-colors";

const Contact = () => {
  const { toast } = useToast();
  const [submitError, setSubmitError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormValues) => {
    setSubmitError(null);
    if (!EMAILJS_PUBLIC_KEY || !EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID) {
      toast({
        variant: "destructive",
        title: "Email not configured",
        description:
          "Create a .env file in the project root with VITE_EMAILJS_PUBLIC_KEY, VITE_EMAILJS_SERVICE_ID, and VITE_EMAILJS_TEMPLATE_ID from dashboard.emailjs.com (see .env.example). Restart the dev server after saving.",
      });
      return;
    }

    try {
      const phoneDisplay = data.phone.trim() || "Not provided";
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          // Sidebar / subject
          name: data.name,
          email: data.email,
          title: data.subject,
          // Body (same values — use these names in your EmailJS HTML template)
          from_name: data.name,
          from_email: data.email,
          reply_to: data.email,
          phone: phoneDisplay,
          subject: data.subject,
          message: data.message,
          // Aliases some EmailJS default templates expect
          user_name: data.name,
          user_email: data.email,
          user_phone: phoneDisplay,
          user_message: data.message,
          text: data.message,
        },
        { publicKey: EMAILJS_PUBLIC_KEY },
      );
      toast({
        title: "Message sent",
        description: "We'll get back to you as soon as we can.",
      });
      reset();
    } catch (err: unknown) {
      const raw =
        err && typeof err === "object" && "text" in err && typeof (err as { text?: string }).text === "string"
          ? (err as { text: string }).text
          : "";
      let msg = raw || "Something went wrong. Please try again or call us directly.";
      if (/service id not found/i.test(raw)) {
        msg =
          "Your EmailJS Service ID does not match this account. Open .env and set VITE_EMAILJS_SERVICE_ID to the ID shown under EmailJS → Email Services (it looks like service_abc123). Save the file, restart the dev server, and try again.";
      }
      if (/template id not found/i.test(raw)) {
        msg =
          "Your EmailJS Template ID does not match. In .env set VITE_EMAILJS_TEMPLATE_ID from EmailJS → Email Templates, then restart the dev server.";
      }
      if (/public key is invalid|invalid public key/i.test(raw)) {
        msg =
          "EmailJS public key is wrong. In .env set VITE_EMAILJS_PUBLIC_KEY from EmailJS → Account → API keys, then restart the dev server.";
      }
      setSubmitError(msg);
      toast({
        variant: "destructive",
        title: "Could not send message",
        description: msg,
      });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <HeroSection
        image={heroContact}
        title="Get in touch"
        subtitle="Share your project scope and questions—we’ll get back to you with clear next steps."
        highlight="Contact"
      />

      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((info, i) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                viewport={{ once: true }}
                className="bg-card border border-border rounded-xl p-6 text-center"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <info.icon className="text-primary" size={22} />
                </div>
                <h4 className="font-display text-foreground font-semibold mb-2">{info.title}</h4>
                {"href" in info && info.href ? (
                  <a href={info.href} className="text-muted-foreground text-sm hover:text-primary transition-colors break-all">
                    {info.details.join(" · ")}
                  </a>
                ) : (
                  info.details.map((d) => (
                    <p key={d} className="text-muted-foreground text-sm">
                      {d}
                    </p>
                  ))
                )}
              </motion.div>
            ))}
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-16">
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-gold-gradient px-6 py-3 text-sm font-semibold uppercase tracking-wider text-primary-foreground hover:opacity-90 transition-opacity"
            >
              <MessageCircle size={18} />
              WhatsApp
            </a>
            <a
              href={`tel:${COMPANY.phoneTel}`}
              className="inline-flex items-center gap-2 rounded-lg border border-primary/50 px-6 py-3 text-sm font-semibold uppercase tracking-wider text-primary hover:bg-primary/10 transition-colors"
            >
              <Phone size={18} />
              Call now
            </a>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <span className="text-primary font-body text-sm tracking-[0.22em] uppercase font-medium">Send a message</span>
              <h2 className="font-display text-2xl md:text-[1.75rem] font-bold mt-3 mb-6 tracking-tight">
                <span className="text-gold-gradient">Project enquiry</span>
              </h2>
              <p className="text-foreground/75 font-body leading-[1.6] text-base md:text-[17px] mb-8">
                Share your scope, timeline, and location—we’ll respond with clear next steps and, where helpful, a consultation
                slot.
              </p>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <Label htmlFor="contact-name">Name</Label>
                    <input
                      id="contact-name"
                      type="text"
                      autoComplete="name"
                      aria-invalid={errors.name ? "true" : "false"}
                      className={cn(inputClass, "border-border", errors.name && "border-destructive focus:ring-destructive/30")}
                      placeholder="Your name"
                      {...register("name")}
                    />
                    {errors.name && <p className="text-sm text-destructive">{errors.name.message}</p>}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="contact-email">Email</Label>
                    <input
                      id="contact-email"
                      type="email"
                      autoComplete="email"
                      aria-invalid={errors.email ? "true" : "false"}
                      className={cn(inputClass, "border-border", errors.email && "border-destructive focus:ring-destructive/30")}
                      placeholder="Your email"
                      {...register("email")}
                    />
                    {errors.email && <p className="text-sm text-destructive">{errors.email.message}</p>}
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <Label htmlFor="contact-phone">Phone (optional)</Label>
                    <input
                      id="contact-phone"
                      type="tel"
                      autoComplete="tel"
                      aria-invalid={errors.phone ? "true" : "false"}
                      className={cn(inputClass, "border-border", errors.phone && "border-destructive focus:ring-destructive/30")}
                      placeholder="Phone number"
                      {...register("phone")}
                    />
                    {errors.phone && <p className="text-sm text-destructive">{errors.phone.message}</p>}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="contact-subject">Subject</Label>
                    <input
                      id="contact-subject"
                      type="text"
                      autoComplete="off"
                      aria-invalid={errors.subject ? "true" : "false"}
                      className={cn(
                        inputClass,
                        "border-border",
                        errors.subject && "border-destructive focus:ring-destructive/30",
                      )}
                      placeholder="Subject"
                      {...register("subject")}
                    />
                    {errors.subject && <p className="text-sm text-destructive">{errors.subject.message}</p>}
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="contact-message">Message</Label>
                  <textarea
                    id="contact-message"
                    rows={5}
                    aria-invalid={errors.message ? "true" : "false"}
                    className={cn(
                      inputClass,
                      "border-border resize-none",
                      errors.message && "border-destructive focus:ring-destructive/30",
                    )}
                    placeholder="Tell us about your project..."
                    {...register("message")}
                  />
                  {errors.message && <p className="text-sm text-destructive">{errors.message.message}</p>}
                </div>

                {submitError && (
                  <p className="text-sm text-destructive" role="alert">
                    {submitError}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center justify-center gap-2 min-w-[200px] bg-gold-gradient text-primary-foreground font-body text-sm tracking-wider uppercase px-8 py-4 rounded-lg hover:opacity-90 transition-opacity disabled:opacity-60 disabled:pointer-events-none"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" aria-hidden />
                      Sending…
                    </>
                  ) : (
                    <>
                      Send message <Send size={16} />
                    </>
                  )}
                </button>
              </form>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="rounded-xl overflow-hidden h-full min-h-[400px] border border-border"
            >
              <iframe
                src={mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "420px", filter: "invert(90%) hue-rotate(180deg)" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="ArchiStrux office location"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;

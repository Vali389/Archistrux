import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Send, MessageCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import heroContact from "@/assets/hero-contact.jpg";
import { useToast } from "@/hooks/use-toast";
import { COMPANY, whatsappHref } from "@/data/company";

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

const Contact = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Message sent!", description: "We'll get back to you within 24 hours." });
    setForm({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <HeroSection
        image={heroContact}
        title="Get in touch"
        subtitle={`Call ${COMPANY.phoneDisplay}, email ${COMPANY.email}, or WhatsApp us. Office: ${COMPANY.address}.`}
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

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <input
                    type="text"
                    placeholder="Your name"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="bg-input border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground font-body text-sm focus:outline-none focus:border-primary transition-colors"
                  />
                  <input
                    type="email"
                    placeholder="Your email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="bg-input border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground font-body text-sm focus:outline-none focus:border-primary transition-colors"
                  />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <input
                    type="tel"
                    placeholder="Phone number"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="bg-input border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground font-body text-sm focus:outline-none focus:border-primary transition-colors"
                  />
                  <input
                    type="text"
                    placeholder="Subject"
                    value={form.subject}
                    onChange={(e) => setForm({ ...form, subject: e.target.value })}
                    className="bg-input border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground font-body text-sm focus:outline-none focus:border-primary transition-colors"
                  />
                </div>
                <textarea
                  placeholder="Tell us about your project..."
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full bg-input border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground font-body text-sm focus:outline-none focus:border-primary transition-colors resize-none"
                />
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 bg-gold-gradient text-primary-foreground font-body text-sm tracking-wider uppercase px-8 py-4 rounded-lg hover:opacity-90 transition-opacity"
                >
                  Send message <Send size={16} />
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

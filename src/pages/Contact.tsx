import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import heroContact from "@/assets/hero-contact.jpg";
import { useToast } from "@/hooks/use-toast";

const contactInfo = [
  { icon: Phone, title: "Phone", details: ["+91 98765 43210", "+91 91234 56789"] },
  { icon: Mail, title: "Email", details: ["info@archistrux.com", "projects@archistrux.com"] },
  { icon: MapPin, title: "Address", details: ["ArchiStrux Engineering & Interiors Pvt. Ltd.", "Hyderabad, Telangana, India"] },
  { icon: Clock, title: "Working Hours", details: ["Mon - Sat: 9:00 AM - 7:00 PM", "Sunday: By Appointment"] },
];

const Contact = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Message Sent!", description: "We'll get back to you within 24 hours." });
    setForm({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <HeroSection
        image={heroContact}
        title="Get In Touch"
        subtitle="Ready to start your project? Contact us today for a free consultation and let's bring your vision to life."
        highlight="Contact Us"
      />

      {/* Contact Info Cards */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {contactInfo.map((info, i) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-card border border-border rounded-lg p-6 text-center"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <info.icon className="text-primary" size={22} />
                </div>
                <h4 className="font-display text-foreground font-semibold mb-2">{info.title}</h4>
                {info.details.map((d) => (
                  <p key={d} className="text-muted-foreground text-sm">{d}</p>
                ))}
              </motion.div>
            ))}
          </div>

          {/* Contact Form */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <span className="text-primary font-body text-sm tracking-[0.3em] uppercase">Send A Message</span>
              <h2 className="font-display text-3xl md:text-4xl font-bold mt-3 mb-6">
                <span className="text-gold-gradient">Let's Discuss Your Project</span>
              </h2>
              <p className="text-foreground/70 font-body leading-relaxed mb-8">
                Fill out the form and our team will reach out to you within 24 hours. Whether you're planning a new construction, renovation, or interior design project, we're here to help.
              </p>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <input
                    type="text"
                    placeholder="Your Name"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="bg-input border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground font-body text-sm focus:outline-none focus:border-primary transition-colors"
                  />
                  <input
                    type="email"
                    placeholder="Your Email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="bg-input border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground font-body text-sm focus:outline-none focus:border-primary transition-colors"
                  />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <input
                    type="tel"
                    placeholder="Phone Number"
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
                  Send Message <Send size={16} />
                </button>
              </form>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="rounded-lg overflow-hidden h-full min-h-[400px]"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d243647.3169042081!2d78.24323165!3d17.4123487!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99daeaebd2c7%3A0xae93b78392bafbc2!2sHyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1712500000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0, filter: "invert(90%) hue-rotate(180deg)" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="ArchiStrux Location"
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

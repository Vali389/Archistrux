import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import heroContact from "@/assets/hero-contact.jpg";
import { useToast } from "@/hooks/use-toast";
import { COMPANY } from "@/data/company";

const openings = [
  { title: "Site Engineer", type: "Full-time · Hyderabad", note: "Execution tracking, QC checks, and contractor coordination." },
  { title: "Interior Designer", type: "Full-time · Hyderabad", note: "Design development, material boards, and site support." },
  { title: "Draftsperson (AutoCAD)", type: "Full-time / Contract", note: "Working drawings, details, and revision control." },
];

const Careers = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", phone: "", role: "", message: "" });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Application received", description: "Our HR team will contact you shortly." });
    setForm({ name: "", email: "", phone: "", role: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection
        image={heroContact}
        title="Careers"
        subtitle={`Join ${COMPANY.legalName}. We value clear communication, disciplined execution, and continuous learning.`}
        highlight="Work with us"
      />

      <section className="py-20 max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-14">
        <div>
          <h2 className="text-2xl font-bold text-foreground mb-6 tracking-tight">Open positions</h2>
          <div className="space-y-4">
            {openings.map((o) => (
              <motion.div
                key={o.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="rounded-xl border border-border bg-card/50 p-5"
              >
                <h3 className="font-semibold text-foreground">{o.title}</h3>
                <p className="text-primary text-sm mt-1">{o.type}</p>
                <p className="text-muted-foreground text-sm mt-2 leading-relaxed">{o.note}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-foreground mb-6 tracking-tight">Apply</h2>
          <form onSubmit={submit} className="space-y-4">
            <input
              required
              placeholder="Full name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full rounded-lg bg-input border border-border px-4 py-3 text-sm"
            />
            <input
              required
              type="email"
              placeholder="Email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full rounded-lg bg-input border border-border px-4 py-3 text-sm"
            />
            <input
              placeholder="Phone"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              className="w-full rounded-lg bg-input border border-border px-4 py-3 text-sm"
            />
            <input
              placeholder="Role applying for"
              value={form.role}
              onChange={(e) => setForm({ ...form, role: e.target.value })}
              className="w-full rounded-lg bg-input border border-border px-4 py-3 text-sm"
            />
            <textarea
              placeholder="Cover note / portfolio link"
              rows={4}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full rounded-lg bg-input border border-border px-4 py-3 text-sm resize-none"
            />
            <button
              type="submit"
              className="inline-flex items-center justify-center rounded-lg bg-gold-gradient px-8 py-3 text-sm font-semibold uppercase tracking-wider text-primary-foreground hover:opacity-90 transition-opacity"
            >
              Submit application
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Careers;

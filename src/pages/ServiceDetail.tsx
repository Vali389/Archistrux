import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Link, Navigate, useParams } from "react-router-dom";
import { ArrowRight, Check, ChevronRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { COMPANY, whatsappHref } from "@/data/company";
import { getServiceAssetImages } from "@/data/serviceAssetImages";
import type { ServiceSlug } from "@/data/servicesContent";
import { getServiceBySlug, servicesList } from "@/data/servicesContent";

function heroSrcForSlug(slug: ServiceSlug): string {
  const assets = getServiceAssetImages(slug);
  return assets.hero;
}

const ServiceDetail = () => {
  const { slug } = useParams();
  const service = slug ? getServiceBySlug(slug) : undefined;

  const [galleryIdx, setGalleryIdx] = useState(0);

  const assets = service ? getServiceAssetImages(service.slug) : undefined;
  const heroImage = assets?.hero ?? service?.heroImage ?? "";
  const galleryImages = assets?.gallery ?? service?.galleryImages ?? (["", "", ""] as [string, string, string]);

  const thumbs = useMemo(() => {
    const g = [...galleryImages];
    return [heroImage, g[0], g[1], g[2]] as const;
  }, [heroImage, galleryImages]);

  const mainGallerySrc = thumbs[galleryIdx] ?? heroImage;

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  const related = servicesList.filter((s) => s.slug !== service.slug).slice(0, 3);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <nav
        className="pt-[4.25rem] border-t border-primary/35 bg-zinc-950 text-zinc-400"
        aria-label="Breadcrumb"
      >
        <div className="max-w-7xl mx-auto px-4 py-3.5 flex flex-wrap items-center gap-2 text-sm">
          <Link to="/" className="hover:text-zinc-200 transition-colors">
            Home
          </Link>
          <span className="text-zinc-600" aria-hidden>
            &gt;
          </span>
          <Link to="/services" className="hover:text-zinc-200 transition-colors">
            Services
          </Link>
          <span className="text-zinc-600" aria-hidden>
            &gt;
          </span>
          <span className="text-zinc-100 font-semibold line-clamp-1">{service.title}</span>
        </div>
      </nav>

      <section className="relative min-h-[min(52vh,520px)] w-full overflow-hidden">
        <img
          src={heroImage}
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
          width={2000}
          height={1200}
          fetchPriority="high"
          decoding="async"
        />
        <div className="absolute inset-0 bg-black/55" />
        <div className="relative z-10 flex min-h-[min(52vh,520px)] flex-col items-center justify-center px-4 py-16 text-center">
          <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-gold-gradient mb-4 max-w-4xl">
              {service.title}
            </h1>
            <p className="text-lg md:text-xl text-white/95 max-w-2xl mx-auto leading-snug">{service.tagline}</p>
          </motion.div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 py-14 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-2xl md:text-[1.65rem] font-bold text-foreground tracking-tight mb-2">
              About this service
            </h2>
            <div className="w-16 h-0.5 bg-gold-gradient mb-6" />
            <p className="text-base md:text-[17px] leading-[1.75] text-foreground/90 mb-4">{service.description}</p>
            {service.additionalContent.map((para, idx) => (
              <p key={idx} className="text-base md:text-[17px] leading-[1.75] text-foreground/80 mb-4 last:mb-6">
                {para}
              </p>
            ))}
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-3">Key features</p>
            <ul className="space-y-2.5">
              {service.whatWeOffer.map((item) => (
                <li key={item.title} className="flex items-start gap-2.5 text-foreground/90 text-sm md:text-base">
                  <Check className="h-5 w-5 shrink-0 text-primary mt-0.5" strokeWidth={2.5} />
                  <span>{item.title}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <div className="relative overflow-hidden rounded-xl border border-border/80 aspect-[4/3] bg-secondary shadow-lg">
              <img
                src={mainGallerySrc}
                alt={`${service.title} — project visual`}
                className="h-full w-full object-cover transition-opacity duration-300"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="grid grid-cols-4 gap-2 md:gap-3">
              {thumbs.map((src, i) => (
                <button
                  key={`${service.slug}-thumb-${i}`}
                  type="button"
                  onClick={() => setGalleryIdx(i)}
                  className={`relative aspect-[4/3] overflow-hidden rounded-lg border-2 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-primary ${
                    galleryIdx === i ? "border-primary ring-2 ring-primary/30" : "border-transparent opacity-80 hover:opacity-100"
                  }`}
                  aria-label={`View image ${i + 1}`}
                >
                  <img src={src} alt="" className="h-full w-full object-cover" loading="lazy" />
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <div className="bg-secondary/40 border-y border-border/60 py-14 md:py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-2xl md:text-[1.75rem] font-bold text-foreground tracking-tight mb-2">Scope & deliverables</h2>
            <p className="text-muted-foreground text-base md:text-[17px] leading-relaxed">
              What you can expect when you engage us for this service.
            </p>
            <div className="w-16 h-0.5 bg-gold-gradient mx-auto mt-5" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6">
            {service.whatWeOffer.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="rounded-xl border border-border bg-card/90 p-6 md:p-7 shadow-md hover:border-primary/30 transition-colors"
              >
                <h3 className="font-display text-base md:text-lg font-bold text-foreground tracking-tight mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm md:text-[15px] leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-14 md:py-16">
        <div className="text-center mb-10 md:mb-14">
          <h2 className="text-xl md:text-2xl font-bold text-foreground tracking-tight uppercase tracking-[0.12em]">
            Our process
          </h2>
          <div className="w-16 h-0.5 bg-gold-gradient mx-auto mt-4" />
        </div>

        <div className="relative">
          <div className="hidden md:block absolute left-[8%] right-[8%] top-[22px] h-0.5 bg-primary/35 pointer-events-none" aria-hidden />
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-4">
            {service.processSteps.map((step, i) => (
              <motion.div
                key={step}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="relative flex flex-col items-center text-center"
              >
                <span className="relative z-10 mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-primary/20 text-primary text-lg font-bold font-display ring-2 ring-primary/35">
                  {i + 1}
                </span>
                <p className="font-semibold text-foreground text-sm md:text-[15px] leading-snug px-1">{step}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-amber-200/90 via-amber-100 to-amber-200/90 border-y border-amber-300/50 py-10 md:py-12">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="font-display text-xl md:text-2xl font-bold text-zinc-900 mb-6">Interested in {service.title}?</h2>
          <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4 sm:gap-6 text-sm md:text-base font-semibold text-zinc-900">
            <Link to="/contact" className="underline-offset-4 hover:underline decoration-2">
              [ Request a quote ]
            </Link>
            <Link to="/contact" className="underline-offset-4 hover:underline decoration-2">
              [ Schedule a consultation ]
            </Link>
            <a href={`tel:${COMPANY.phoneTel}`} className="underline-offset-4 hover:underline decoration-2">
              [ Call now ]
            </a>
          </div>
        </div>
      </div>

      <div className="bg-secondary/50 border-y border-border/70 py-14 md:py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-stretch">
            <motion.div
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative min-h-[260px] overflow-hidden rounded-2xl border border-border"
            >
              <img src={galleryImages[1]} alt="" className="absolute inset-0 h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex flex-col justify-center rounded-2xl border border-primary/25 bg-card/70 p-8 md:p-10"
            >
              <h2 className="text-2xl md:text-[1.65rem] font-bold text-foreground tracking-tight mb-4">Why it matters</h2>
              <p className="text-base md:text-[17px] leading-[1.75] text-foreground/85">{service.whyItMatters}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {service.atAGlance.map((line) => (
                  <span
                    key={line}
                    className="rounded-full border border-primary/35 bg-primary/10 px-3 py-1.5 text-xs md:text-sm font-medium text-foreground/90"
                  >
                    {line}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-14 md:py-16">
        <div className="text-center mb-10">
          <h2 className="text-xl md:text-2xl font-bold text-foreground tracking-tight uppercase tracking-[0.12em]">Other services</h2>
          <div className="w-16 h-0.5 bg-gold-gradient mx-auto mt-4" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {related.map((r, i) => {
            const RIcon = r.icon;
            const img = heroSrcForSlug(r.slug);
            return (
              <motion.div
                key={r.slug}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
              >
                <Link
                  to={`/services/${r.slug}`}
                  className="group flex flex-col h-full rounded-xl border border-border bg-card/60 overflow-hidden hover:border-primary/45 transition-all hover:shadow-lg hover:shadow-black/20"
                >
                  <div className="relative h-40 w-full overflow-hidden shrink-0">
                    <img
                      src={img}
                      alt=""
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-60" />
                  </div>
                  <div className="p-4 sm:p-5 flex-1 flex flex-col">
                    <div className="flex items-center gap-2 mb-2">
                      <RIcon className="h-4 w-4 text-primary shrink-0" />
                      <span className="font-bold text-foreground text-sm sm:text-base group-hover:text-primary transition-colors line-clamp-2">
                        {r.title}
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-muted-foreground line-clamp-3 leading-relaxed flex-1">{r.summary}</p>
                    <span className="mt-3 inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wider text-primary">
                      Continue <ArrowRight className="h-3 w-3" />
                    </span>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>

      <section className="py-14 md:py-16 bg-secondary/80 border-t border-border">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-[1.75rem] font-bold text-foreground mb-4 tracking-tight">Ready to discuss this scope?</h2>
          <p className="text-base md:text-[17px] leading-[1.65] text-muted-foreground mb-2">
            {COMPANY.shortName} supports design, execution, and technical evaluation with clear communication and documented milestones.
          </p>
          <p className="text-sm text-muted-foreground mb-8">
            {COMPANY.phoneDisplay} · {COMPANY.email}
          </p>
          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-lg bg-gold-gradient px-8 py-3.5 text-sm font-semibold uppercase tracking-wider text-primary-foreground hover:opacity-90 transition-opacity"
            >
              Get free consultation
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-lg border border-border bg-background/60 px-8 py-3.5 text-sm font-semibold uppercase tracking-wider text-foreground hover:border-primary/50 transition-colors"
            >
              Contact us
            </Link>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-lg border border-primary/40 px-8 py-3.5 text-sm font-semibold uppercase tracking-wider text-primary hover:bg-primary/10 transition-colors"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServiceDetail;

import { motion } from "framer-motion";

const EditorialCommitment = () => {
  return (
    <section className="py-24 md:py-28 bg-background border-y border-border/60">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55 }}
            className="text-left"
          >
            <h2 className="text-2xl md:text-[26px] font-bold text-foreground tracking-tight mb-6">
              Our commitment
            </h2>
            <div className="space-y-5 text-base md:text-[17px] leading-[1.6] text-foreground/85 font-normal">
              <p>
                We treat every project—whether a{" "}
                <strong className="font-semibold text-foreground/95">residential build</strong>, a{" "}
                <strong className="font-semibold text-foreground/95">commercial landmark</strong>, or a{" "}
                <strong className="font-semibold text-foreground/95">full interior fit-out</strong>
                —as a long-term partnership. That means structured communication, documented decisions, and
                accountability from first sketch to final handover.
              </p>
              <p>
                Our engineers, architects, and site teams collaborate under one roof so schedules,
                specifications, and quality checks stay aligned—reducing surprises and protecting your
                investment.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55, delay: 0.08 }}
            className="text-left"
          >
            <h2 className="text-2xl md:text-[26px] font-bold text-foreground tracking-tight mb-6">
              Our focus
            </h2>
            <div className="space-y-5 text-base md:text-[17px] leading-[1.6] text-foreground/85 font-normal">
              <p>
                We focus on <strong className="font-semibold text-foreground/95">turnkey execution</strong>{" "}
                with premium materials, <strong className="font-semibold text-foreground/95">transparent pricing</strong>
                , and interiors that balance aesthetics with everyday function—so spaces don&apos;t just
                photograph well; they perform for years.
              </p>
              <p>
                From <strong className="font-semibold text-foreground/95">Hyderabad</strong> to metros
                nationwide, we support{" "}
                <strong className="font-semibold text-foreground/95">
                  homeowners, entrepreneurs, and business owners
                </strong>{" "}
                who expect the same rigor in construction as they do in design.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EditorialCommitment;

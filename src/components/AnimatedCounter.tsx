import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

function parseStat(value: string): { target: number; suffix: string } {
  const m = value.match(/^(\d+)(.*)$/);
  if (!m) return { target: 0, suffix: value };
  return { target: Number.parseInt(m[1], 10), suffix: m[2] };
}

type AnimatedCounterProps = {
  value: string;
  className?: string;
  durationMs?: number;
};

const AnimatedCounter = ({ value, className, durationMs = 1600 }: AnimatedCounterProps) => {
  const { target, suffix } = parseStat(value);
  const [display, setDisplay] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-12% 0px" });

  useEffect(() => {
    if (!inView || target <= 0) return;
    let start: number | null = null;
    let raf = 0;
    const ease = (t: number) => 1 - (1 - t) ** 3;
    const tick = (ts: number) => {
      if (start === null) start = ts;
      const p = Math.min((ts - start) / durationMs, 1);
      setDisplay(Math.round(ease(p) * target));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, target, durationMs]);

  return (
    <span ref={ref} className={className}>
      {display}
      {suffix}
    </span>
  );
};

export default AnimatedCounter;

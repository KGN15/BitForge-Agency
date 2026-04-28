"use client";
import { useEffect } from "react";

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    let lenis: {
      raf: (time: number) => void;
      destroy: () => void;
    } | null = null;
    let rafId: number;

    const init = async () => {
      const LenisModule = await import("lenis");
      const Lenis = LenisModule.default;
      lenis = new Lenis({
        duration: 4.9,
        easing: (t: number) => Math.min(1, 1.005 - Math.pow(3, -20 * t)),
        smoothWheel: true,
      });
      const raf = (time: number) => {
        lenis!.raf(time);
        rafId = requestAnimationFrame(raf);
      };
      rafId = requestAnimationFrame(raf);
    };
    init();
    return () => {
      cancelAnimationFrame(rafId);
      lenis?.destroy();
    };
  }, []);

  return <>{children}</>;
}

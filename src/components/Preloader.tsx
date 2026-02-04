import { useEffect, useRef } from "react";
import { gsap } from "gsap";

interface PreloaderProps {
  onComplete: () => void;
}

const Preloader = ({ onComplete }: PreloaderProps) => {
  const preloaderRef = useRef<HTMLDivElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const percentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Ensure visible defaults (prevents "clickable but invisible" issues)
    gsap.set(preloaderRef.current, { opacity: 1, scale: 1 });
    gsap.set(logoRef.current, { opacity: 1, scale: 1, y: 0 });
    gsap.set(progressBarRef.current, { width: "0%" });
    gsap.set(percentRef.current, { opacity: 1 });

    const obj = { value: 0 };

    const tl = gsap.timeline();

    tl.from(logoRef.current, {
      scale: 0.9,
      opacity: 0,
      y: 10,
      duration: 0.7,
      ease: "power3.out",
      immediateRender: false, // IMPORTANT FIX
    })
      .to(
        progressBarRef.current,
        {
          width: "100%",
          duration: 2.3,
          ease: "power2.out",
        },
        "-=0.1"
      )
      .to(
        obj,
        {
          value: 100,
          duration: 2.3,
          ease: "power2.out",
          onUpdate: () => {
            if (percentRef.current) {
              percentRef.current.textContent = `${Math.round(obj.value)}%`;
            }
          },
        },
        "<" // start at same time as progress bar
      )
      .to(logoRef.current, {
        scale: 1.03,
        duration: 0.25,
        ease: "power2.out",
      })
      .to(preloaderRef.current, {
        opacity: 0,
        scale: 0.98,
        duration: 0.6,
        ease: "power3.inOut",
        onComplete: () => onComplete(),
      }, "+=0.15");

    return () => {
      tl.kill();
    };
  }, [onComplete]);

  return (
    <div
      ref={preloaderRef}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-background"
    >
      <div className="text-center relative z-10">
        <div ref={logoRef} className="mb-8" style={{ opacity: 1 }}>
          <h1 className="text-2xl md:text-3xl font-light text-foreground text-glow mb-4">
            Hemanth Katikala Muniraj
          </h1>
          <p className="text-xl text-muted-foreground">Portfolio Loading...</p>
        </div>

        <div className="w-80 max-w-md mx-auto">
          <div className="h-1 bg-muted rounded-full overflow-hidden mb-4">
            <div
              ref={progressBarRef}
              className="h-full bg-gradient-primary w-0 rounded-full shadow-glow-primary"
            />
          </div>

          <div ref={percentRef} className="text-lg font-medium text-primary-glow" style={{ opacity: 1 }}>
            0%
          </div>
        </div>
      </div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        />
      </div>
    </div>
  );
};

export default Preloader;

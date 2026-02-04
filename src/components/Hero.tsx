import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ArrowRight, DownloadSimple, Handshake } from "phosphor-react";
import { Button } from "./ui/button";

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const splineRef = useRef<HTMLDivElement>(null);
  const orbRef1 = useRef<HTMLDivElement>(null);
  const orbRef2 = useRef<HTMLDivElement>(null);
  const orbRef3 = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // IMPORTANT: Make sure content is visible by default
      gsap.set([titleRef.current, subtitleRef.current, ctaRef.current], { opacity: 1, y: 0, filter: "none" });
      gsap.set(splineRef.current, { opacity: 1, x: 0 });

      const tl = gsap.timeline({ delay: 0.2 });

      // Use immediateRender:false so it DOES NOT hide things before the animation begins
      tl.from(titleRef.current, {
        y: 40,
        opacity: 0,
        filter: "blur(10px)",
        duration: 0.9,
        ease: "power3.out",
        immediateRender: false,
      })
        .from(
          subtitleRef.current,
          {
            y: 24,
            opacity: 0,
            duration: 0.7,
            ease: "power3.out",
            immediateRender: false,
          },
          "-=0.45"
        )
        .from(
          ctaRef.current,
          {
            y: 20,
            opacity: 0,
            scale: 0.98,
            duration: 0.65,
            ease: "power3.out",
            immediateRender: false,
          },
          "-=0.35"
        )
        .from(
          splineRef.current,
          {
            opacity: 0,
            duration: 0.9,
            ease: "power3.out",
            immediateRender: false,
          },
          "-=0.8"
        );

      // Floating orbs
      gsap.to(orbRef1.current, {
        y: -18,
        x: 10,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
      });

      gsap.to(orbRef2.current, {
        y: -26,
        x: -14,
        duration: 5,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
        delay: 0.8,
      });

      gsap.to(orbRef3.current, {
        y: -22,
        x: 18,
        duration: 6,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
        delay: 1.6,
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const scrollToProjects = () => {
    const element = document.getElementById("projects");
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  const downloadCV = () => {
    const link = document.createElement("a");
    link.href = "/Images/Hemanth-Resume.pdf"; // <-- update your pdf filename in public/Images
    link.download = "Hemanth-Katikala-Muniraj-Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="hero" ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Spline - pointer-events none so it won't block clicks */}
      <div ref={splineRef} className="absolute inset-0 w-full h-full opacity-70 pointer-events-none">
        <iframe
          src="https://my.spline.design/genkubgreetingrobot-MW4W3iAFsJj5olFfT1MhN0TH/"
          frameBorder="0"
          width="100%"
          height="100%"
          className="w-full h-full"
        />
      </div>

      {/* Orbs */}
      <div ref={orbRef1} className="absolute top-1/4 left-1/4 w-32 h-32 bg-primary/20 rounded-full blur-xl animate-pulse" />
      <div
        ref={orbRef2}
        className="absolute top-1/3 right-1/3 w-24 h-24 bg-secondary/20 rounded-full blur-xl animate-pulse"
        style={{ animationDelay: "1s" }}
      />
      <div
        ref={orbRef3}
        className="absolute bottom-1/4 left-1/3 w-40 h-40 bg-accent/20 rounded-full blur-xl animate-pulse"
        style={{ animationDelay: "2s" }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <h1 ref={titleRef} className="text-4xl md:text-6xl lg:text-7xl font-light text-foreground mb-6 leading-tight">
          Hi, I’m{" "}
          <span className="text-glow bg-gradient-primary bg-clip-text text-transparent">
            Hemanth Katikala Muniraj
          </span>
          <br className="hidden md:block" />
          <span className="text-primary-glow">Robotics Engineer</span>
        </h1>

        <p ref={subtitleRef} className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
          I build deployable robotics systems by integrating ROS2, LiDAR perception, localization, planning, and control, and I thrive on debugging hard problems until the robot works reliably in the real world.
        </p>

        <div ref={ctaRef} className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            onClick={scrollToContact}
            className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-primary text-primary-foreground rounded-lg font-medium hover:shadow-glow-primary transition-all duration-300 hover:scale-105"
            size="lg"
          >
            <Handshake size={20} />
            Hire Me
          </Button>

          <Button
            onClick={downloadCV}
            variant="outline"
            className="group inline-flex items-center gap-3 px-8 py-4 border-primary/30 text-primary hover:bg-primary/10 rounded-lg font-medium transition-all duration-300 hover:scale-105"
            size="lg"
          >
            <DownloadSimple size={20} />
            Download Resume
          </Button>

          <Button
            onClick={scrollToProjects}
            variant="ghost"
            className="group inline-flex items-center gap-3 px-8 py-4 text-foreground hover:bg-primary/10 rounded-lg font-medium transition-all duration-300 hover:scale-105"
            size="lg"
          >
            View My Work
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;

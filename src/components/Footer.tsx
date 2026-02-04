import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { GithubLogo, LinkedinLogo } from "phosphor-react";
import { ArrowUp } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const footerRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<HTMLDivElement>(null);

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Ensure footer is visible by default
      gsap.set(footerRef.current, { opacity: 1, y: 0 });
      gsap.set(footerRef.current?.children || [], { opacity: 1, y: 0, filter: "none" });

      gsap.from(footerRef.current?.children || [], {
        y: 30,
        opacity: 0,
        filter: "blur(8px)",
        duration: 0.7,
        stagger: 0.12,
        ease: "power3.out",
        immediateRender: false,
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 92%",
          once: true,
        },
      });

      const particles = particlesRef.current?.children;
      if (particles) {
        Array.from(particles).forEach((particle, index) => {
          gsap.to(particle, {
            y: -22,
            x: Math.random() * 40 - 20,
            duration: 3 + Math.random() * 2,
            repeat: -1,
            yoyo: true,
            ease: "power1.inOut",
            delay: index * 0.35,
          });
        });
      }

      ScrollTrigger.refresh();
    }, footerRef);

    return () => ctx.revert();
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToSectionOnHome = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) element.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const goToSection = (sectionId: string) => {
    // If we are not on "/", go home first then scroll
    if (location.pathname !== "/") {
      navigate("/");
      window.setTimeout(() => scrollToSectionOnHome(sectionId), 250);
      return;
    }
    scrollToSectionOnHome(sectionId);
  };

  return (
    <footer ref={footerRef} className="relative py-16 px-6 border-t border-border/30 overflow-hidden">
      {/* Floating particles */}
      <div ref={particlesRef} className="absolute inset-0 pointer-events-none opacity-30">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary rounded-full blur-sm" />
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-secondary rounded-full blur-sm" />
        <div className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-accent rounded-full blur-sm" />
        <div className="absolute top-1/2 right-1/4 w-2 h-2 bg-primary rounded-full blur-sm" />
        <div className="absolute bottom-1/3 right-1/2 w-1 h-1 bg-secondary rounded-full blur-sm" />
        <div className="absolute top-3/4 left-1/2 w-2 h-2 bg-accent rounded-full blur-sm" />
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Brand / Summary */}
          <div>
            <h3 className="text-xl font-semibold text-foreground mb-3">
              Hemanth Katikala Muniraj
            </h3>

            <p className="text-muted-foreground leading-relaxed mb-6">
              I build deployable robotics systems by integrating perception, localization, planning, and control, and I love turning messy sensor data into reliable robot behavior.
            </p>

            <div className="flex gap-4">
              <a
                href="https://github.com/Hemanth-Katikala-Muniraj"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center hover:shadow-glow-primary transition-all duration-300 hover:scale-110"
              >
                <GithubLogo size={18} className="text-primary-foreground" />
              </a>

              <a
                href="https://www.linkedin.com/in/hemanth-muniraj/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="w-10 h-10 bg-gradient-secondary rounded-lg flex items-center justify-center hover:shadow-glow-secondary transition-all duration-300 hover:scale-110"
              >
                <LinkedinLogo size={18} className="text-secondary-foreground" />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-lg font-medium text-foreground mb-4">Quick Links</h4>
            <nav className="space-y-3">
              <button
                onClick={() => goToSection("hero")}
                className="block text-muted-foreground hover:text-primary-glow transition-colors duration-300"
              >
                Home
              </button>
              <button
                onClick={() => goToSection("about")}
                className="block text-muted-foreground hover:text-primary-glow transition-colors duration-300"
              >
                About
              </button>
              <button
                onClick={() => goToSection("projects")}
                className="block text-muted-foreground hover:text-primary-glow transition-colors duration-300"
              >
                Featured Projects
              </button>
              <button
                onClick={() => goToSection("contact")}
                className="block text-muted-foreground hover:text-primary-glow transition-colors duration-300"
              >
                Contact
              </button>

              {/* Helpful link for your /projects page */}
              <button
                onClick={() => navigate("/projects")}
                className="block text-muted-foreground hover:text-primary-glow transition-colors duration-300"
              >
                All Projects
              </button>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-medium text-foreground mb-4">Get In Touch</h4>
            <div className="space-y-3">
              <p className="text-muted-foreground">
                <span className="text-primary-glow">Email:</span>
                <br />
                hemanthh@umich.edu
              </p>

              <p className="text-muted-foreground">
                <span className="text-primary-glow">Location:</span>
                <br />
                Dearborn, Michigan
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-border/30 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-center md:text-left">
            © 2026 Hemanth Katikala Muniraj. All rights reserved.
          </p>

          <button
            onClick={scrollToTop}
            className="px-4 py-2 gap-2 flex items-center bg-gradient-primary text-primary-foreground rounded-lg hover:shadow-glow-primary transition-all duration-300 hover:scale-105 text-sm"
          >
            Back to Top <ArrowUp size={18} />
          </button>
        </div>
      </div>

      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-96 h-32 bg-gradient-primary opacity-10 blur-3xl" />
    </footer>
  );
};

export default Footer;

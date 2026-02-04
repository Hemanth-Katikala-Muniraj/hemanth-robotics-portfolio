import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { GithubLogo, LinkedinLogo, EnvelopeSimple } from "phosphor-react";

const Contact = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !contentRef.current) return;

    // Always visible by default
    gsap.set(sectionRef.current, { opacity: 1, y: 0 });
    gsap.set(contentRef.current, { opacity: 1, y: 0 });

    gsap.from(contentRef.current.children, {
      y: 24,
      opacity: 0,
      duration: 0.6,
      stagger: 0.1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 85%",
      },
      immediateRender: false,
    });
  }, []);

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-24 px-6 relative overflow-hidden"
    >
      <div className="container mx-auto max-w-4xl relative z-10">
        <div ref={contentRef} className="text-center">
          <h2 className="text-4xl md:text-5xl font-light text-foreground mb-4">
            Let’s <span className="text-primary-glow">Connect</span>
          </h2>

          <div className="w-20 h-1 bg-gradient-primary rounded-full mx-auto mb-6" />

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
            I’m actively seeking robotics, autonomy, and perception roles where I
            can build reliable systems and solve real engineering problems.
            Feel free to reach out.
          </p>

          {/* Contact info */}
          <div className="flex flex-col items-center gap-4 mb-10">
            <div className="flex items-center gap-3 text-muted-foreground">
              <EnvelopeSimple size={20} className="text-primary-glow" />
              <span className="text-base">hemanthh@umich.edu</span>
            </div>

            <div className="text-muted-foreground text-base">
              Dearborn, Michigan, USA
            </div>
          </div>

          {/* Social links */}
          <div className="flex justify-center gap-6">
            <a
              href="https://github.com/Hemanth-Katikala-Muniraj"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-6 py-3 bg-gradient-primary text-primary-foreground rounded-lg hover:shadow-glow-primary transition-all duration-300 hover:scale-105"
            >
              <GithubLogo size={20} />
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/hemanth-muniraj/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-6 py-3 bg-gradient-secondary text-secondary-foreground rounded-lg hover:shadow-glow-secondary transition-all duration-300 hover:scale-105"
            >
              <LinkedinLogo size={20} />
              LinkedIn
            </a>
          </div>
        </div>
      </div>

      {/* Background glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[32rem] h-[32rem] bg-primary/5 rounded-full blur-3xl" />
    </section>
  );
};

export default Contact;

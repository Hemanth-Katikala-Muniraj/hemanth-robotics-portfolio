import { useEffect, useMemo, useRef, useState } from "react";
import { gsap } from "gsap";
import { List, X } from "phosphor-react";
import { useLocation, useNavigate } from "react-router-dom";

type NavItem = { name: string; id: string };

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navRef = useRef<HTMLElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  const navigate = useNavigate();
  const location = useLocation();

  // ✅ Required order:
  // Home, About me, Experience, Technical Skills, Projects, Contact
  const navItems: NavItem[] = useMemo(
    () => [
      { name: "Home", id: "hero" },
      { name: "About me", id: "about" },
      { name: "Experience", id: "experience" },
      { name: "Projects", id: "projects" },
      { name: "Contact", id: "contact" },
    ],
    []
  );

  // ✅ Safe mount animation (does NOT leave nav invisible)
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set([navRef.current, logoRef.current, menuRef.current], {
        opacity: 1,
        clearProps: "transform",
      });

      gsap.from(navRef.current, {
        y: -18,
        opacity: 0,
        duration: 0.45,
        ease: "power2.out",
        immediateRender: false,
      });

      gsap.from(logoRef.current, {
        x: -14,
        opacity: 0,
        duration: 0.35,
        ease: "power2.out",
        immediateRender: false,
        delay: 0.05,
      });

      gsap.from(menuRef.current?.children || [], {
        y: -10,
        opacity: 0,
        duration: 0.25,
        stagger: 0.05,
        ease: "power2.out",
        immediateRender: false,
        delay: 0.08,
      });
    });

    return () => ctx.revert();
  }, []);

  // ✅ Prevent background scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const scrollToSectionOnHome = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const goToSection = (sectionId: string) => {
    setIsOpen(false);

    // If we are not on "/", go home first then scroll
    if (location.pathname !== "/") {
      navigate("/");
      window.setTimeout(() => scrollToSectionOnHome(sectionId), 250);
      return;
    }

    scrollToSectionOnHome(sectionId);
  };

  const goHome = () => {
    setIsOpen(false);

    if (location.pathname !== "/") {
      navigate("/");
      return;
    }
    scrollToSectionOnHome("hero");
  };

  const goAllProjectsPage = () => {
    setIsOpen(false);
    navigate("/projects");
  };

  return (
    <>
      <nav
        ref={navRef}
        className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/10"
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div ref={logoRef}>
              <button
                onClick={goHome}
                className="text-2xl font-bold text-primary-glow hover:opacity-90 transition-opacity"
              >
                Hemanth Katikala Muniraj
              </button>
            </div>

            {/* Desktop Menu */}
            <div ref={menuRef} className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => goToSection(item.id)}
                  className="text-foreground/80 hover:text-primary-glow transition-colors duration-200 font-light"
                >
                  {item.name}
                </button>
              ))}

              <button
                onClick={goAllProjectsPage}
                className="text-foreground/80 hover:text-primary-glow transition-colors duration-200 font-light"
              >
                All Projects
              </button>

              <button
                onClick={() => goToSection("contact")}
                className="px-6 py-2 bg-gradient-primary text-primary-foreground rounded-lg hover:shadow-glow-primary transition-all duration-300 hover:scale-105"
              >
                Hire Me
              </button>
            </div>

            {/* Mobile button */}
            <button
              onClick={() => setIsOpen(true)}
              className="md:hidden text-foreground p-2"
              aria-label="Open menu"
            >
              <List size={24} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-[60] md:hidden transition-opacity duration-200 ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/40"
          onClick={() => setIsOpen(false)}
        />

        {/* Slide panel */}
        <div
          className={`absolute top-0 right-0 h-full w-full max-w-sm bg-background/95 backdrop-blur-lg border-l border-white/10
          transition-transform duration-300 ease-out
          ${isOpen ? "translate-x-0" : "translate-x-full"}`}
        >
          <div className="flex items-center justify-between p-6 border-b border-white/10">
            <button
              onClick={goHome}
              className="text-2xl font-light text-primary-glow hover:opacity-90 transition-opacity"
            >
              Portfolio
            </button>

            <button
              onClick={() => setIsOpen(false)}
              className="text-foreground p-2"
              aria-label="Close menu"
            >
              <X size={24} />
            </button>
          </div>

          <div className="flex flex-col space-y-5 p-6 mt-6">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => goToSection(item.id)}
                className="text-left text-xl text-foreground/80 hover:text-primary-glow transition-colors duration-200"
              >
                {item.name}
              </button>
            ))}

            <button
              onClick={goAllProjectsPage}
              className="text-left text-xl text-foreground/80 hover:text-primary-glow transition-colors duration-200"
            >
              All Projects
            </button>

            <button
              onClick={() => goToSection("contact")}
              className="px-6 py-3 bg-gradient-primary text-primary-foreground rounded-lg hover:shadow-glow-primary transition-all duration-300 text-center mt-6"
            >
              Hire Me
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;

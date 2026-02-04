import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  PaperPlaneTilt,
  GithubLogo,
  LinkedinLogo,
  Envelope,
  Phone,
  MapPin,
} from "phosphor-react";

gsap.registerPlugin(ScrollTrigger);

const GITHUB_URL = "https://github.com/Hemanth-Katikala-Muniraj";
const LINKEDIN_URL = "https://www.linkedin.com/in/hemanth-muniraj/";

const Contact = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState<null | "success" | "error">(null);
  const [statusMsg, setStatusMsg] = useState("");

  useEffect(() => {
    const ctx = gsap.context(() => {
      // ✅ Prevent “invisible section” bugs even if ScrollTrigger doesn’t fire
      gsap.set([titleRef.current, formRef.current, infoRef.current], {
        opacity: 1,
        x: 0,
        y: 0,
        clearProps: "transform",
      });

      gsap.from(titleRef.current?.children || [], {
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
        immediateRender: false,
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 85%",
        },
      });

      gsap.from(formRef.current?.children || [], {
        x: -25,
        opacity: 0,
        duration: 0.7,
        stagger: 0.12,
        ease: "power3.out",
        immediateRender: false,
        scrollTrigger: {
          trigger: formRef.current,
          start: "top 85%",
        },
      });

      gsap.from(infoRef.current?.children || [], {
        x: 25,
        opacity: 0,
        duration: 0.7,
        stagger: 0.12,
        ease: "power3.out",
        immediateRender: false,
        scrollTrigger: {
          trigger: infoRef.current,
          start: "top 85%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Button micro animation
    const button = (e.currentTarget as HTMLFormElement).querySelector(
      'button[type="submit"]'
    );
    if (button) {
      gsap.to(button, {
        scale: 0.97,
        duration: 0.1,
        yoyo: true,
        repeat: 1,
        ease: "power2.out",
      });
    }

    setStatus(null);
    setStatusMsg("");

    const endpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT as string | undefined;
    if (!endpoint) {
      setStatus("error");
      setStatusMsg(
        "Form is not configured yet. Add VITE_FORMSPREE_ENDPOINT in your .env and Vercel env settings."
      );
      return;
    }

    try {
      setIsSending(true);

      const payload = {
        name: formData.name,
        email: formData.email,
        message: formData.message,
        source: "Portfolio Contact Form",
      };

      const res = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const text = await res.text().catch(() => "");
        throw new Error(text || "Failed to send message");
      }

      setStatus("success");
      setStatusMsg("Message sent successfully. I’ll get back to you soon!");
      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      setStatus("error");
      setStatusMsg(
        "Something went wrong while sending. Please try again or email me directly at hemanthh@umich.edu."
      );
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-20 px-6 relative overflow-hidden"
    >
      <div className="container mx-auto max-w-6xl">
        <div ref={titleRef} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-foreground mb-4">
            Get In <span className="text-primary-glow">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-primary rounded-full mx-auto mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            If you’re hiring for robotics, autonomy, or perception roles, I’d love
            to connect. Send a message and I’ll respond quickly.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* FORM */}
          <div ref={formRef} className="space-y-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-foreground mb-2 font-medium"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-input glass border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-foreground mb-2 font-medium"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-input glass border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-foreground mb-2 font-medium"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-input glass border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 resize-none"
                  placeholder="Tell me what role you’re hiring for, what you’re building, and what you’d like me to share."
                />
              </div>

              {/* Status message */}
              {status && (
                <div
                  className={`glass border rounded-lg px-4 py-3 text-sm ${
                    status === "success"
                      ? "border-primary/30 text-primary-glow"
                      : "border-destructive/30 text-destructive"
                  }`}
                >
                  {statusMsg}
                </div>
              )}

              <button
                type="submit"
                disabled={isSending}
                className={`group w-full inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-primary text-primary-foreground rounded-lg font-medium transition-all duration-300 ${
                  isSending
                    ? "opacity-70 cursor-not-allowed"
                    : "hover:shadow-glow-primary hover:scale-105"
                }`}
              >
                {isSending ? "Sending..." : "Send Message"}
                <PaperPlaneTilt
                  size={20}
                  className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300"
                />
              </button>
            </form>
          </div>

          {/* INFO */}
          <div ref={infoRef} className="space-y-8">
            <div>
              <h3 className="text-2xl font-light text-foreground mb-6">
                Let's Connect
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-8">
                I enjoy building robotics systems that are deployable and testable,
                with strong integration across perception, planning, and control.
                If you’re working on autonomy, AMRs, perception, or simulation,
                I’d love to talk.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 glass rounded-lg hover:shadow-glow-primary transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                  <Envelope size={20} className="text-primary-foreground" />
                </div>
                <div>
                  <p className="text-foreground font-medium">Email</p>
                  <p className="text-muted-foreground">hemanthh@umich.edu</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 glass rounded-lg hover:shadow-glow-secondary transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-secondary rounded-lg flex items-center justify-center">
                  <Phone size={20} className="text-secondary-foreground" />
                </div>
                <div>
                  <p className="text-foreground font-medium">Phone</p>
                  <p className="text-muted-foreground">+1 (248) 835-0594</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 glass rounded-lg hover:shadow-glow-primary transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                  <MapPin size={20} className="text-primary-foreground" />
                </div>
                <div>
                  <p className="text-foreground font-medium">Location</p>
                  <p className="text-muted-foreground">Dearborn, Michigan</p>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-medium text-foreground mb-4">
                Follow Me
              </h4>
              <div className="flex gap-4">
                <a
                  href={GITHUB_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center hover:shadow-glow-primary transition-all duration-300 hover:scale-110"
                  aria-label="GitHub"
                >
                  <GithubLogo size={20} className="text-primary-foreground" />
                </a>
                <a
                  href={LINKEDIN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gradient-secondary rounded-lg flex items-center justify-center hover:shadow-glow-secondary transition-all duration-300 hover:scale-110"
                  aria-label="LinkedIn"
                >
                  <LinkedinLogo size={20} className="text-secondary-foreground" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />
    </section>
  );
};

export default Contact;

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Briefcase, MapPin, CalendarDays } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

type ExperienceItem = {
  role: string;
  company: string;
  location: string;
  date: string;
  bullets: string[];
};

const Experience = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  const experiences: ExperienceItem[] = [
    {
      role: "Industrial Automation and Artificial Intelligence Intern",
      company: "AliveMind",
      location: "Cerritos, CA, USA",
      date: "Sept 2025 – Present",
      bullets: [
        "Directed Robotics and AI teams for the Robot Barista Project, designing an intelligent UR5 workflow that integrates automation, perception, and NLP-based interaction.",
        "Built a multi-modal AI stack combining speech-to-text (Whisper), text-to-speech (gTTS), and transformer-based intent recognition (BERT/GPT), enabling conversational order handling and emotion-aware responses.",
        "Completed eye-in-hand calibration (OpenCV) achieving ±1.5 mm TCP repeatability, and designed a Streamlit-based interface integrated with Vision DB for facial recognition and optimized inference pipelines, achieving end-to-end response times under 30 s and ≥ 95% task accuracy.",
      ],
    },
    {
      role: "Computer Vision and 3D Perception Intern",
      company: "BotClub PVT LTD",
      location: "Visakhapatnam, India",
      date: "June 2023 – Nov 2023",
      bullets: [
        "Designed and trained deep learning models using PyTorch, TensorFlow, and YOLOv11 for real-time object detection and classification, improving detection accuracy by 28%.",
        "Developed computer vision pipelines for defect detection, object localization, and 3D reconstruction using OpenCV and PyTorch3D, enhancing perception precision.",
        "Implemented data preprocessing, augmentation, and hyperparameter tuning workflows to optimize mAP, precision, and recall for production-ready model deployment.",
      ],
    },
    {
      role: "Research Fellow – Computer Vision and Perception",
      company: "Vellore Institute of Technology",
      location: "Amaravathi, India",
      date: "Mar 2023 – May 2023",
      bullets: [
        "Authored a paper on vehicle detection using computer vision, enhancing research output.",
        "Developed algorithms for real-time vehicle classification, significantly improving accuracy.",
        "Collaborated on robotics projects, fostering innovative solutions in transportation analysis, particularly in the context of Advanced Driver Assistance Systems.",
      ],
    },
    {
      role: "Research Fellow – Embedded Systems and Robotics",
      company: "Vellore Institute of Technology",
      location: "Amaravathi, India",
      date: "Dec 2023 – Apr 2024",
      bullets: [
        "Co-authored IEEE paper: “AGRIFOG: Fog-Assisted IoT Enabled Agriculture Monitoring System”, implementing MQTT and Google Drive API for edge-cloud communication.",
        "Designed a Fog node-based system architecture using ESP32 and Raspberry Pi for real-time environmental sensing.",
        "Implemented MQTT communication & REST APIs, ensuring fault-tolerant data handling.",
      ],
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Visible defaults (prevents invisible-but-clickable issues)
      gsap.set(sectionRef.current, { opacity: 1, y: 0 });
      gsap.set(headerRef.current, { opacity: 1, y: 0, filter: "none" });
      gsap.set(cardsRef.current?.children || [], { opacity: 1, y: 0, filter: "none" });

      gsap.from(headerRef.current, {
        y: 20,
        opacity: 0,
        duration: 0.7,
        ease: "power3.out",
        immediateRender: false,
        scrollTrigger: { trigger: sectionRef.current, start: "top 85%", once: true },
      });

      gsap.from(cardsRef.current?.children || [], {
        y: 35,
        opacity: 0,
        duration: 0.75,
        stagger: 0.12,
        ease: "power3.out",
        immediateRender: false,
        scrollTrigger: { trigger: cardsRef.current, start: "top 85%", once: true },
      });

      ScrollTrigger.refresh();
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="experience" ref={sectionRef} className="py-20 px-6 relative overflow-hidden">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-light text-foreground mb-4">
            Professional <span className="text-primary-glow">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-primary rounded-full mx-auto mb-6" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Real-world experience across industrial automation, robotics perception, and research — with a focus on
            integration, measurable outcomes, and reliable system behavior.
          </p>
        </div>

        {/* Cards */}
        <div ref={cardsRef} className="grid grid-cols-1 gap-6">
          {experiences.map((exp) => (
            <div
              key={`${exp.company}-${exp.role}-${exp.date}`}
              className="glass rounded-2xl p-7 md:p-8 hover:shadow-glow-primary transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                <div className="min-w-0">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-xl bg-gradient-primary flex items-center justify-center">
                      <Briefcase className="text-primary-foreground" size={18} />
                    </div>

                    <div className="min-w-0">
                      <h3 className="text-xl md:text-2xl font-semibold text-foreground leading-tight">
                        {exp.role}
                      </h3>
                      <p className="text-muted-foreground">
                        <span className="text-primary-glow font-medium">{exp.company}</span>
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <MapPin size={16} className="text-primary-glow" />
                      <span>{exp.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CalendarDays size={16} className="text-primary-glow" />
                      <span>{exp.date}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-5">
                <ul className="list-disc pl-5 space-y-2 text-muted-foreground leading-relaxed">
                  {exp.bullets.map((b, idx) => (
                    <li key={`${exp.company}-${idx}`}>{b}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Background accents */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
    </section>
  );
};

export default Experience;

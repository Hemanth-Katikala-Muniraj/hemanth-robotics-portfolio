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
  technologies: string[];
};

const experiences: ExperienceItem[] = [
  {
    role: "Scenario Infrastructure Intern",
    company: "Motional",
    location: "Las Vegas, NV, USA",
    date: "May 2026 – Aug 2026",
    bullets: [
      "Developed and validated autonomous vehicle simulation scenarios using YAML-based configurations and log-replay workflows for pedestrian, cyclist, and traffic-interaction test cases.",
      "Created parameter sweeps for agent speed, ego speed, reaction timing, trigger distance, and warm-start duration to evaluate planner behavior across varied operating conditions.",
      "Investigated discrepancies between recorded logs and simulation results by analyzing agent motion, trigger conditions, lane-change behavior, collision handling, and planner responses.",
      "Used Python, Airflow-based automation workflows, Git, and Linux tools to support scenario generation, repeated simulation execution, debugging, and reproducible validation.",
      "Collaborated with simulation and infrastructure engineers to present technical findings, document limitations, and recommend improved scenario configurations and testing strategies.",
    ],
    technologies: [
      "Python",
      "YAML",
      "Airflow",
      "Git",
      "Linux",
      "Log Replay",
      "Scenario Simulation",
      "Autonomous Vehicles",
    ],
  },
  {
    role: "Industrial Automation and Artificial Intelligence Intern",
    company: "AliveMind",
    location: "Cerritos, CA, USA",
    date: "Sept 2025 – Dec 2025",
    bullets: [
      "Contributed to the Robot Barista project by developing an intelligent UR5 and UR10 automation workflow integrating robotic manipulation, perception, and conversational AI.",
      "Built a multimodal interaction pipeline combining speech recognition, text-to-speech, intent processing, and facial recognition for automated customer interaction and order handling.",
      "Developed and tested robot pick-and-place sequences in CoppeliaSim and supported integration with robotic grippers, remote APIs, MQTT communication, and ROS-based components.",
      "Performed eye-in-hand camera calibration using OpenCV and refined robot motion and perception workflows to improve task repeatability and system reliability.",
      "Developed a Streamlit-based operator interface and supported debugging across robot motion, communication, vision, and hardware-software integration workflows.",
    ],
    technologies: [
      "Python",
      "ROS Noetic",
      "CoppeliaSim",
      "UR5",
      "UR10",
      "OpenCV",
      "MQTT",
      "Streamlit",
      "Vosk",
    ],
  },
  {
    role: "Computer Vision and 3D Perception Intern",
    company: "BotClub Pvt. Ltd.",
    location: "Visakhapatnam, India",
    date: "June 2023 – Nov 2023",
    bullets: [
      "Developed deep learning pipelines for real-time object detection, classification, and localization using Python, PyTorch, TensorFlow, OpenCV, and YOLO-based models.",
      "Prepared and augmented custom image datasets and tuned model parameters to improve precision, recall, mean average precision, and robustness across varied visual conditions.",
      "Worked with PyTorch3D and STL-based object models to support 3D recognition, reconstruction, and augmented-reality visualization workflows.",
      "Evaluated model performance, analyzed detection errors, and improved preprocessing and inference pipelines for more reliable computer vision deployment.",
    ],
    technologies: [
      "Python",
      "PyTorch",
      "TensorFlow",
      "YOLO",
      "OpenCV",
      "PyTorch3D",
      "Computer Vision",
      "Deep Learning",
    ],
  },
  {
    role: "Research Fellow – Embedded Systems and Robotics",
    company: "Vellore Institute of Technology",
    location: "Amaravati, India",
    date: "Dec 2023 – Apr 2024",
    bullets: [
      "Co-authored the IEEE research paper “AGRIFOG: Fog-Assisted IoT Enabled Agriculture Monitoring System,” focused on real-time environmental monitoring through edge and cloud communication.",
      "Designed a fog-computing architecture using ESP32 devices and Raspberry Pi nodes for environmental sensing, local processing, and reliable data transmission.",
      "Implemented MQTT communication and Google Drive API integration to support edge-to-cloud data transfer, remote storage, and monitoring.",
      "Tested the system under varied communication and sensor conditions and contributed to technical documentation, experimentation, and research analysis.",
    ],
    technologies: [
      "Python",
      "ESP32",
      "Raspberry Pi",
      "MQTT",
      "REST APIs",
      "Google Drive API",
      "IoT",
      "Fog Computing",
    ],
  },
  {
    role: "Research Fellow – Computer Vision and Perception",
    company: "Vellore Institute of Technology",
    location: "Amaravati, India",
    date: "Mar 2023 – May 2023",
    bullets: [
      "Conducted research on computer vision methods for vehicle detection and classification in intelligent transportation and driver-assistance applications.",
      "Developed and evaluated image-processing and machine-learning workflows for identifying and classifying vehicles from visual data.",
      "Analyzed detection performance and contributed to research documentation, experimentation, and technical reporting.",
      "Collaborated with faculty and research team members on perception-focused projects related to transportation analysis and Advanced Driver Assistance Systems.",
    ],
    technologies: [
      "Python",
      "OpenCV",
      "Computer Vision",
      "Image Processing",
      "Machine Learning",
      "Vehicle Detection",
      "ADAS",
    ],
  },
];

const Experience = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const header = headerRef.current;
    const cards = cardsRef.current;

    if (!section || !header || !cards) {
      return;
    }

    const cardElements = Array.from(cards.children);

    /*
      Keep all content visible by default. This prevents sections from
      becoming invisible if ScrollTrigger does not initialize correctly.
    */
    gsap.set(section, {
      opacity: 1,
      y: 0,
    });

    gsap.set(header, {
      opacity: 1,
      y: 0,
      filter: "none",
    });

    gsap.set(cardElements, {
      opacity: 1,
      y: 0,
      filter: "none",
    });

    const ctx = gsap.context(() => {
      gsap.from(header, {
        y: 24,
        opacity: 0,
        duration: 0.75,
        ease: "power3.out",
        immediateRender: false,
        scrollTrigger: {
          trigger: header,
          start: "top 88%",
          once: true,
        },
      });

      gsap.from(cardElements, {
        y: 36,
        opacity: 0,
        duration: 0.75,
        stagger: 0.12,
        ease: "power3.out",
        immediateRender: false,
        scrollTrigger: {
          trigger: cards,
          start: "top 88%",
          once: true,
        },
      });
    }, section);

    const refreshTimer = window.setTimeout(() => {
      ScrollTrigger.refresh();
    }, 100);

    return () => {
      window.clearTimeout(refreshTimer);
      ctx.revert();
    };
  }, []);

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="py-20 px-6 relative overflow-hidden"
    >
      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Section header */}
        <div ref={headerRef} className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-light text-foreground mb-4">
            Professional{" "}
            <span className="text-primary-glow">Experience</span>
          </h2>

          <div className="w-24 h-1 bg-gradient-primary rounded-full mx-auto mb-6" />

          <p className="text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Experience across autonomous vehicle simulation, robotics
            integration, industrial automation, computer vision, embedded
            systems, and applied research.
          </p>
        </div>

        {/* Experience cards */}
        <div ref={cardsRef} className="grid grid-cols-1 gap-7">
          {experiences.map((experience) => (
            <article
              key={`${experience.company}-${experience.role}-${experience.date}`}
              className="glass rounded-2xl p-6 md:p-8 border border-border/40 hover:border-primary/40 hover:shadow-glow-primary transition-all duration-300"
            >
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-5">
                <div className="flex items-start gap-4 min-w-0">
                  <div className="w-11 h-11 shrink-0 rounded-xl bg-gradient-primary flex items-center justify-center shadow-glow-primary">
                    <Briefcase
                      className="text-primary-foreground"
                      size={19}
                    />
                  </div>

                  <div className="min-w-0">
                    <h3 className="text-xl md:text-2xl font-semibold text-foreground leading-tight">
                      {experience.role}
                    </h3>

                    <p className="text-primary-glow font-medium mt-1">
                      {experience.company}
                    </p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row lg:flex-col gap-2 sm:gap-5 lg:gap-2 text-sm text-muted-foreground lg:items-end">
                  <div className="flex items-center gap-2">
                    <MapPin size={16} className="text-primary-glow shrink-0" />
                    <span>{experience.location}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <CalendarDays
                      size={16}
                      className="text-primary-glow shrink-0"
                    />
                    <span>{experience.date}</span>
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <ul className="list-disc pl-5 space-y-3 text-muted-foreground leading-relaxed marker:text-primary-glow">
                  {experience.bullets.map((bullet, index) => (
                    <li key={`${experience.company}-bullet-${index}`}>
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-7 pt-5 border-t border-border/30">
                <p className="text-sm font-medium text-foreground mb-3">
                  Technologies and Tools
                </p>

                <div className="flex flex-wrap gap-2">
                  {experience.technologies.map((technology) => (
                    <span
                      key={`${experience.company}-${technology}`}
                      className="px-3 py-1.5 text-xs md:text-sm rounded-full glass border border-primary/20 text-muted-foreground hover:text-primary-glow hover:border-primary/40 transition-colors duration-300"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Background accents */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2 pointer-events-none" />
    </section>
  );
};

export default Experience;
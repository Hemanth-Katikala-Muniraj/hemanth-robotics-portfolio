import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  Robot,
  Code,
  Cpu,
  MapTrifold,
  Scan,
  ChartLineUp,
  GitBranch,
  Terminal,
  Eye,
  Cube,
  Cloud,
  Wrench,
} from 'phosphor-react';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);

  const skills = [
    { icon: Robot, name: 'ROS2 (Nodes, Topics, TF)', level: 88 },
    { icon: Code, name: 'C++ (Robotics Software)', level: 84 },
    { icon: Terminal, name: 'Python (Tools + ML)', level: 86 },
    { icon: Scan, name: 'LiDAR (PointCloud2, RViz)', level: 82 },
    { icon: MapTrifold, name: 'Localization & SLAM', level: 80 },
    { icon: ChartLineUp, name: 'Motion Planning (A*, DWA)', level: 82 },
    { icon: Cpu, name: 'Control & Estimation (EKF)', level: 80 },
    { icon: Eye, name: 'Computer Vision (YOLO)', level: 78 },
    { icon: GitBranch, name: 'Git & Reproducible Workflows', level: 85 },
    { icon: Cube, name: 'Simulation (Gazebo/Coppelia)', level: 76 },
    { icon: Cloud, name: 'Docker & Dev Environments', level: 74 },
    { icon: Wrench, name: 'Debugging & Integration', level: 90 },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Image animation (safe)
      if (imageRef.current) {
        gsap.from(imageRef.current, {
          x: -80,
          opacity: 0,
          filter: 'blur(8px)',
          duration: 0.9,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
          },
        });
      }

      // Content animation (safe)
      if (contentRef.current?.children) {
        gsap.from(contentRef.current.children, {
          y: 24,
          opacity: 0,
          duration: 0.7,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: contentRef.current,
            start: 'top 82%',
          },
        });
      }

      /**
       * IMPORTANT FIX:
       * Do NOT animate skills from opacity: 0.
       * If ScrollTrigger doesn't fire, they would remain invisible.
       * Instead, animate only y/scale so they are always visible.
       */
      if (skillsRef.current?.children) {
        gsap.from(skillsRef.current.children, {
          y: 18,
          scale: 0.98,
          duration: 0.55,
          stagger: 0.08,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: skillsRef.current,
            start: 'top 85%',
          },
        });
      }

      // Helps ScrollTrigger calculate positions correctly
      ScrollTrigger.refresh();
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-20 px-6 relative overflow-hidden">
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile image / visual */}
          <div ref={imageRef} className="relative">
            <div className="relative w-80 h-80 mx-auto lg:mx-0">
              <div className="absolute inset-0 bg-gradient-primary rounded-full blur-xl opacity-30 animate-pulse" />

              <div className="relative w-full h-full glass rounded-full p-2 hover:shadow-glow-primary transition-all duration-500 group">
                <div className="w-full h-full cursor-pointer rounded-full overflow-hidden bg-gradient-secondary">
                  {/* Replace this with your real photo later if you want */}
                  <img
                    src="/Images/profileLogo.jpg"
                    alt="Hemanth Katikala Muniraj - Robotics Engineer"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
              </div>

              <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary/30 rounded-full animate-float" />
              <div
                className="absolute -bottom-6 -left-6 w-12 h-12 bg-accent/20 rounded-full animate-float"
                style={{ animationDelay: '1s' }}
              />
            </div>
          </div>

          {/* About text */}
          <div ref={contentRef} className="space-y-6">
            <div>
              <h2 className="text-4xl md:text-5xl font-light text-foreground mb-4">
                About <span className="text-primary-glow">Me</span>
              </h2>
              <div className="w-20 h-1 bg-gradient-primary rounded-full mb-6" />
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed">
              I’m a Robotics Engineer and graduate student focused on building autonomous systems that work in
              real conditions. I enjoy taking a robotics problem from raw sensor data to stable robot behavior,
              then iterating until the system is dependable and easy to reproduce.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              My work spans ROS2-based autonomy and LiDAR perception pipelines, state estimation and motion
              planning, and end-to-end system integration. I’m especially strong at debugging failures,
              validating behavior with repeatable tests, and designing clean interfaces so perception,
              planning, and control modules fit together smoothly.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <div className="glass px-4 py-2 rounded-lg">
                <span className="text-primary-glow font-medium">ROS2</span>
                <span className="text-muted-foreground ml-1">Autonomy & Integration</span>
              </div>
              <div className="glass px-4 py-2 rounded-lg">
                <span className="text-secondary-glow font-medium">LiDAR</span>
                <span className="text-muted-foreground ml-1">Perception Pipelines</span>
              </div>
              <div className="glass px-4 py-2 rounded-lg">
                <span className="text-accent-glow font-medium">Planning</span>
                <span className="text-muted-foreground ml-1">A* / DWA / Replanning</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 pt-2">
              <div className="glass px-4 py-2 rounded-lg">
                <span className="text-primary-glow font-medium">6+</span>
                <span className="text-muted-foreground ml-1">Robotics Projects</span>
              </div>
              <div className="glass px-4 py-2 rounded-lg">
                <span className="text-secondary-glow font-medium">3+</span>
                <span className="text-muted-foreground ml-1">End-to-End Systems</span>
              </div>
              <div className="glass px-4 py-2 rounded-lg">
                <span className="text-accent-glow font-medium">100%</span>
                <span className="text-muted-foreground ml-1">Hands-on Build Mindset</span>
              </div>
            </div>
          </div>
        </div>

        {/* Skills grid */}
        <div className="mt-20">
          <h3 className="text-3xl font-light text-center text-foreground mb-12">
            Technical <span className="text-primary-glow">Skills</span>
          </h3>

          <div ref={skillsRef} className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {skills.map((skill) => (
              <div
                key={skill.name}
                className="glass p-6 cursor-pointer rounded-xl hover:shadow-glow-primary transition-all duration-300 hover:scale-105 group"
              >
                <div className="flex flex-col items-center text-center space-y-3">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center group-hover:animate-bounce">
                    <skill.icon size={24} className="text-primary-foreground" />
                  </div>

                  <h4 className="text-lg font-medium text-foreground">{skill.name}</h4>

                  <div className="w-full bg-muted rounded-full h-2">
                    <div
                      className="bg-gradient-primary h-2 rounded-full transition-all duration-1000"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>

                  <span className="text-primary-glow font-medium">{skill.level}%</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Background blobs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
    </section>
  );
};

export default About;

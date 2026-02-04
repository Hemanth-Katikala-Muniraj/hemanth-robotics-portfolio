import { useEffect, useMemo, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight } from "phosphor-react";
import { Link } from "react-router-dom";
import { projects } from "@/data/projects";

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const featuredGridRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);

  const featuredProjects = useMemo(
    () => projects.filter((p) => p.featured).slice(0, 3),
    []
  );

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Ensure nothing starts hidden permanently
      gsap.set(titleRef.current, { opacity: 1 });
      gsap.set(featuredGridRef.current, { opacity: 1 });

      gsap.from(titleRef.current?.children || [], {
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.12,
        ease: "power3.out",
        immediateRender: false,
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 85%",
          once: true,
        },
      });

      gsap.from(featuredGridRef.current?.children || [], {
        y: 40,
        opacity: 0,
        duration: 0.7,
        stagger: 0.15,
        ease: "power3.out",
        immediateRender: false,
        scrollTrigger: {
          trigger: featuredGridRef.current,
          start: "top 85%",
          once: true,
        },
      });

      ScrollTrigger.refresh();
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="projects" ref={sectionRef} className="py-20 px-6 relative overflow-hidden">
      <div className="container mx-auto max-w-7xl">
        <div ref={titleRef} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-foreground mb-4">
            Featured <span className="text-primary-glow">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-primary rounded-full mx-auto mb-6" />
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A curated set of robotics projects highlighting autonomy, LiDAR perception, state estimation, motion planning, and integration.
          </p>
        </div>

        <div ref={featuredGridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project) => (
            <div key={project.id} className="glass rounded-xl overflow-hidden hover:shadow-glow-primary transition-all duration-500 group">
              <div className="relative overflow-hidden h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary-glow transition-colors duration-300">
                  {project.title}
                </h3>

                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  {project.shortDescription}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={`${project.id}-${tech}`}
                      className="px-3 py-1 bg-primary/10 text-primary-glow text-xs rounded-full border border-primary/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <Link
                  to={`/projects/${project.slug}`}
                  className="inline-flex items-center gap-2 text-primary-glow hover:text-primary transition-colors duration-300 group/link"
                >
                  View Case Study
                  <ArrowUpRight
                    size={16}
                    className="group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform duration-300"
                  />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/projects"
            className="inline-flex items-center justify-center px-8 py-3 bg-gradient-secondary text-secondary-foreground rounded-lg hover:shadow-glow-secondary transition-all duration-300 hover:scale-105"
          >
            View All Projects
          </Link>
        </div>
      </div>

      <div className="absolute top-1/4 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl -translate-x-1/2" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl translate-x-1/2" />
    </section>
  );
};

export default Projects;

import { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'phosphor-react';
import { projects } from '../data/projects';

const AllProjects = () => {
  const all = useMemo(() => projects, []);

  return (
    <section className="py-20 px-6 relative overflow-hidden">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-14">
          <h1 className="text-4xl md:text-5xl font-light text-foreground mb-4">
            All <span className="text-primary-glow">Projects</span>
          </h1>
          <div className="w-20 h-1 bg-gradient-primary rounded-full mx-auto mb-6" />
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Explore my complete project portfolio. Click any project to view the detailed case study.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {all.map((project) => (
            <div
              key={project.id}
              className="glass rounded-xl overflow-hidden hover:shadow-glow-primary transition-all duration-500 group"
            >
              <div className="relative overflow-hidden h-44">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary-glow transition-colors duration-300">
                  {project.title}
                </h3>

                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  {project.shortDescription}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.slice(0, 6).map((tech) => (
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
          <Link to="/" className="text-muted-foreground hover:text-foreground transition-colors">
            Back to Home
          </Link>
        </div>
      </div>

      <div className="absolute top-1/4 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl -translate-x-1/2" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl translate-x-1/2" />
    </section>
  );
};

export default AllProjects;

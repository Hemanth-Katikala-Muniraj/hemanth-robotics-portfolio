import { useMemo } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, GithubLogo, Globe } from 'phosphor-react';
import { projects } from '../data/projects';

const ProjectDetail = () => {
  const { slug } = useParams();

  const project = useMemo(() => projects.find((p) => p.slug === slug), [slug]);

  if (!project) {
    return (
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-3xl text-foreground mb-4">Project not found</h1>
          <Link to="/projects" className="text-primary-glow hover:text-primary transition-colors">
            Go back to All Projects
          </Link>
        </div>
      </section>
    );
  }

  const hasGithub = !!project.githubUrl;
  const hasLive = !!project.liveUrl;

  return (
    <section className="py-20 px-6 relative overflow-hidden">
      <div className="container mx-auto max-w-4xl">
        <div className="mb-8">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft size={18} />
            Back to All Projects
          </Link>
        </div>

        <h1 className="text-4xl md:text-5xl font-light text-foreground mb-4">{project.title}</h1>
        <p className="text-lg text-muted-foreground leading-relaxed mb-8">{project.longDescription}</p>

        <div className="glass rounded-xl overflow-hidden mb-10">
          <img src={project.image} alt={project.title} className="w-full h-64 object-cover" />
        </div>

        <div className="flex flex-wrap gap-2 mb-10">
          {project.tech.map((t) => (
            <span
              key={t}
              className="px-3 py-1 bg-primary/10 text-primary-glow text-xs rounded-full border border-primary/20"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap gap-4 mb-12">
          <a
            href={project.githubUrl || '#'}
            target="_blank"
            rel="noreferrer"
            onClick={(e) => {
              if (!hasGithub) e.preventDefault();
            }}
            className={`inline-flex items-center gap-2 px-5 py-3 rounded-lg transition-all ${
              hasGithub
                ? 'bg-secondary/90 hover:bg-secondary text-secondary-foreground'
                : 'bg-muted/40 cursor-not-allowed text-muted-foreground'
            }`}
            title={hasGithub ? 'Open GitHub Repository' : 'GitHub link coming soon'}
          >
            <GithubLogo size={18} />
            GitHub
          </a>

          <a
            href={project.liveUrl || '#'}
            target="_blank"
            rel="noreferrer"
            onClick={(e) => {
              if (!hasLive) e.preventDefault();
            }}
            className={`inline-flex items-center gap-2 px-5 py-3 rounded-lg transition-all ${
              hasLive
                ? 'bg-primary/90 hover:bg-primary text-primary-foreground'
                : 'bg-muted/40 cursor-not-allowed text-muted-foreground'
            }`}
            title={hasLive ? 'Open Live Demo' : 'Live demo coming soon'}
          >
            <Globe size={18} />
            Live Demo
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="glass rounded-xl p-6">
            <h2 className="text-xl text-foreground mb-3">Highlights</h2>
            <ul className="text-muted-foreground space-y-2 list-disc pl-5">
              {project.highlights.map((h) => (
                <li key={h}>{h}</li>
              ))}
            </ul>
          </div>

          <div className="glass rounded-xl p-6">
            <h2 className="text-xl text-foreground mb-3">My Work</h2>
            <ul className="text-muted-foreground space-y-2 list-disc pl-5">
              {project.responsibilities.map((r) => (
                <li key={r}>{r}</li>
              ))}
            </ul>
          </div>

          <div className="glass rounded-xl p-6">
            <h2 className="text-xl text-foreground mb-3">Results</h2>
            <ul className="text-muted-foreground space-y-2 list-disc pl-5">
              {project.results.map((res) => (
                <li key={res}>{res}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="text-center mt-14">
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

export default ProjectDetail;

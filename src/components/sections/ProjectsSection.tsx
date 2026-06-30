import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import Header from "@/components/ui/Header";
import { projects } from "@/config/project";
import { trackExternalLinkProjects } from "@/utils/analytics";

const ProjectsSection = () => {
  return (
    <section
      id="projects"
      className="relative min-h-screen py-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <Header
          title="Featured Projects"
          subtitle="Some things I've built"
          gradient={true}
          align="center"
          className="mb-2"
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid gap-8 md:grid-cols-2"
        >
          {projects.map((project, index) => {
            const demoLabel = project.demoLabel
              ? project.demoLabel
              : project.demoLink?.includes("github.com")
              ? "Demo"
              : "Live Demo";
            const hasDemoLink = Boolean(project.demoLink);

            return (
              <motion.div
                key={`${project.title}-${index}`}
                whileHover={{ y: -8 }}
                className="group"
              >
                <div className="flex h-full min-h-[620px] flex-col rounded-[24px] border border-border bg-card shadow-[0_25px_80px_rgba(0,0,0,0.15)] backdrop-blur-xl transition-transform duration-300 hover:border-primary/50 hover:shadow-[0_30px_100px_rgba(239,68,68,0.05)]">
                  <div className="overflow-hidden rounded-t-[24px]">
                    <div className="min-h-[320px] sm:min-h-[380px] overflow-hidden rounded-t-[24px]">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="h-full w-full object-contain object-center bg-slate-950 transition duration-500"
                      />
                    </div>
                  </div>

                  <div className="flex h-full flex-col p-6">
                    <div className="space-y-4">
                      <h3 className="text-2xl font-semibold bg-gradient-to-r from-red-500 via-red-400 to-orange-400 bg-clip-text text-transparent">
                        {project.title}
                      </h3>
                      <p className="text-sm leading-6 text-muted-foreground line-clamp-3">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full border border-border bg-background/50 px-3 py-1 text-xs font-medium text-secondary-text"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="mt-auto pt-6">
                      <div className={`grid gap-3 ${hasDemoLink ? "sm:grid-cols-2" : "sm:grid-cols-1"}`}>
                        <a
                          href={project.githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={() =>
                            trackExternalLinkProjects(
                              project.githubLink,
                              `${project.title} - GitHub View`
                            )
                          }
                          className="inline-flex items-center justify-center rounded-xl border border-border bg-white/5 px-4 py-3 text-sm font-semibold text-foreground transition hover:border-primary/40 hover:bg-white/10"
                        >
                          <Github className="mr-2 h-4 w-4" />
                          GitHub
                        </a>
                        {hasDemoLink && (
                          <a
                            href={project.demoLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={() =>
                              trackExternalLinkProjects(
                                project.demoLink!,
                                `${project.title} - Link View`
                              )
                            }
                            className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-red-700 via-red-500 to-orange-500 px-4 py-3 text-sm font-semibold text-white transition hover:opacity-95"
                          >
                            <ExternalLink className="mr-2 h-4 w-4" />
                            {demoLabel}
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center mt-16"
        >
          <a
            href="https://github.com/AvinashUmrao"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 rounded-2xl bg-gradient-to-r from-red-700 via-red-500 to-orange-500 text-white font-medium hover:opacity-90 transition-opacity"
            onClick={() =>
              trackExternalLinkProjects(
                "https://github.com/AvinashUmrao",
                "View All Projects - GitHub"
              )
            }
          >
            View All Projects
          </a>
        </motion.div>
      </div>

      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-section dark:bg-grid-white/[0.15] bg-grid-black/[0.15]" />
        <div className="absolute inset-0 bg-section [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>
    </section>
  );
};

export default ProjectsSection;

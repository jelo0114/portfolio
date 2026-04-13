import { Code2, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'SaaS Analytics Dashboard',
    description:
      'A data-rich dashboard with KPI tracking, role-based views, and streamlined reporting.',
    tech: 'React, Tailwind, Node.js',
  },
  {
    title: 'Enterprise CRM Portal',
    description:
      'A corporate portal for customer lifecycle management with secure workflows and audit logs.',
    tech: 'React, Express, PostgreSQL',
  },
  {
    title: 'Internal Ops Platform',
    description:
      'A process automation tool that reduced manual work and improved department visibility.',
    tech: 'React, REST API, Docker',
  },
];

function Projects() {
  return (
    <section id="projects" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-10 text-3xl font-bold text-brandDark">Projects</h2>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="rounded-xl border border-slate-200 p-6 transition duration-200 hover:scale-[1.02] hover:border-brandBlue"
            >
              <h3 className="text-xl font-semibold text-brandDark">{project.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">{project.description}</p>
              <p className="mt-4 text-sm font-medium text-brandGreen">{project.tech}</p>
              <div className="mt-6 flex items-center gap-3">
                <button
                  type="button"
                  className="inline-flex items-center gap-2 rounded-md border border-brandBlue px-4 py-2 text-sm font-semibold text-brandBlue transition-colors hover:border-brandGreen hover:text-brandGreen"
                >
                  Live Demo
                  <ExternalLink size={16} />
                </button>
                <button
                  type="button"
                  className="inline-flex items-center gap-2 rounded-md border border-slate-300 px-4 py-2 text-sm font-semibold text-brandDark transition-colors hover:border-brandGreen hover:text-brandGreen"
                >
                  GitHub
                  <Code2 size={16} />
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;

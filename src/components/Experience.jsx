import { motion } from 'framer-motion';

const experiences = [
  {
    role: 'Senior Frontend Developer',
    company: 'TechSphere Solutions',
    duration: '2023 - Present',
    description:
      'Leading development of enterprise web applications, focusing on scalable UI systems and performance improvements.',
  },
  {
    role: 'Frontend Engineer',
    company: 'BluePeak Digital',
    duration: '2021 - 2023',
    description:
      'Delivered responsive customer-facing platforms and collaborated closely with product and design teams.',
  },
  {
    role: 'Junior Web Developer',
    company: 'Nexa Labs',
    duration: '2019 - 2021',
    description:
      'Built reusable components and supported feature delivery across multiple SaaS products.',
  },
];

function Experience() {
  return (
    <section id="experience" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-10 text-3xl font-bold text-brandDark">Experience</h2>
        <div className="relative">
          <div className="absolute left-4 top-0 h-full w-0.5 bg-slate-200 md:left-1/2 md:-translate-x-1/2" />
          <div className="space-y-8">
            {experiences.map((item, index) => (
              <motion.div
                key={`${item.company}-${item.role}`}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className={`relative md:flex ${index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'}`}
              >
                <div className="absolute left-4 top-6 z-10 h-3 w-3 rounded-full bg-brandBlue md:left-1/2 md:-translate-x-1/2" />
                <article className="ml-12 rounded-xl border border-slate-200 p-6 md:ml-0 md:w-[46%]">
                  <p className="text-sm font-semibold text-brandGreen">{item.duration}</p>
                  <h3 className="mt-1 text-lg font-semibold text-brandDark">{item.role}</h3>
                  <p className="text-sm text-brandBlue">{item.company}</p>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">{item.description}</p>
                </article>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;

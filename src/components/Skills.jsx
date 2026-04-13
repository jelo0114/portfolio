import { motion } from 'framer-motion';
import { Code2, Database, Wrench } from 'lucide-react';

const skillGroups = [
  {
    title: 'Frontend',
    icon: Code2,
    skills: [
      { name: 'React', level: 90 },
      { name: 'Tailwind CSS', level: 88 },
      { name: 'JavaScript', level: 85 },
    ],
  },
  {
    title: 'Backend',
    icon: Database,
    skills: [
      { name: 'Node.js', level: 82 },
      { name: 'Express', level: 80 },
      { name: 'SQL', level: 78 },
    ],
  },
  {
    title: 'Tools',
    icon: Wrench,
    skills: [
      { name: 'Git', level: 86 },
      { name: 'Docker', level: 74 },
      { name: 'Figma', level: 70 },
    ],
  },
];

function Skills() {
  return (
    <section id="skills" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-10 text-3xl font-bold text-brandDark">Skills</h2>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {skillGroups.map((group, groupIndex) => {
            const Icon = group.icon;
            return (
              <motion.div
                key={group.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.45, delay: groupIndex * 0.08 }}
                className="rounded-xl border border-slate-200 p-6"
              >
                <div className="mb-4 flex items-center gap-2">
                  <Icon className="text-brandBlue" size={20} />
                  <h3 className="text-lg font-semibold text-brandDark">{group.title}</h3>
                </div>

                <div className="space-y-4">
                  {group.skills.map((skill) => (
                    <div key={skill.name}>
                      <div className="mb-1 flex items-center justify-between text-sm text-slate-600">
                        <span>{skill.name}</span>
                        <span>{skill.level}%</span>
                      </div>
                      <div className="h-2 rounded-full bg-slate-100">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true, amount: 0.6 }}
                          transition={{ duration: 0.6 }}
                          className="h-2 rounded-full bg-brandBlue"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Skills;

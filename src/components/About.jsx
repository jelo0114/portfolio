import { motion } from 'framer-motion';

function About() {
  return (
    <section id="about" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-2 lg:items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.5 }}
          className="mx-auto h-80 w-full max-w-sm rounded-2xl border border-slate-200 bg-slate-50"
        />

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.5 }}
          className="space-y-5"
        >
          <h2 className="text-3xl font-bold text-brandDark">About Me</h2>
          <p className="leading-relaxed text-slate-600">
            I am a results-driven developer who enjoys building polished digital experiences with
            strong performance and maintainability. I focus on creating interfaces that align with
            product goals and real business outcomes.
          </p>
          <p className="leading-relaxed text-slate-600">
            My core strengths include <span className="font-semibold text-brandBlue">React</span>,
            <span className="font-semibold text-brandGreen"> responsive design systems</span>, and
            scalable frontend architecture with clean collaboration across teams.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default About;

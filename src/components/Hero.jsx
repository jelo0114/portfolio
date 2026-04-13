import { ArrowRight, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

function Hero() {
  return (
    <section id="hero" className="flex min-h-screen items-center px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto grid w-full max-w-6xl gap-10 lg:grid-cols-2 lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <p className="inline-flex rounded-full border border-brandBlue px-4 py-1 text-sm font-semibold text-brandBlue">
            Corporate Portfolio
          </p>
          <h1 className="text-4xl font-bold leading-tight text-brandDark sm:text-5xl lg:text-6xl">
            Angelo O. Cu
          </h1>
          <p className="max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
            I build scalable, user-focused web products with clean frontend architecture and
            measurable business impact.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-md bg-brandBlue px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brandGreen"
            >
              View Projects
              <ArrowRight size={16} />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-md border border-brandGreen px-6 py-3 text-sm font-semibold text-brandGreen transition-colors hover:bg-brandGreen hover:text-white"
            >
              Contact Me
              <Mail size={16} />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.55 }}
          className="rounded-2xl border border-slate-200 p-8 shadow-sm"
        >
          <h2 className="mb-6 text-xl font-semibold text-brandDark">Professional Snapshot</h2>
          <div className="space-y-5 text-sm text-slate-600">
            <div className="rounded-lg border border-slate-200 p-4">
              <p className="text-brandBlue">Frontend Excellence</p>
              <p>React, responsive systems, and maintainable component architecture.</p>
            </div>
            <div className="rounded-lg border border-slate-200 p-4">
              <p className="text-brandGreen">Business Focused</p>
              <p>Translating product goals into fast, accessible, conversion-driven interfaces.</p>
            </div>
            <div className="rounded-lg border border-slate-200 p-4">
              <p className="text-brandBlue">Reliable Delivery</p>
              <p>Clean code, predictable release cycles, and collaborative development process.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;

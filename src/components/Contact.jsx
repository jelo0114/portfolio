import { Globe, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

function Contact() {
  return (
    <section id="contact" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.45 }}
          className="rounded-2xl border border-slate-200 p-8 sm:p-10"
        >
          <h2 className="text-3xl font-bold text-brandDark">Contact</h2>
          <p className="mt-3 text-sm text-slate-600">
            Have a project in mind? Send me a message and I will get back to you quickly.
          </p>

          <form className="mt-8 space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <input
                type="text"
                placeholder="Name"
                className="rounded-md border border-slate-300 px-4 py-3 text-sm outline-none transition-colors focus:border-brandBlue"
              />
              <input
                type="email"
                placeholder="Email"
                className="rounded-md border border-slate-300 px-4 py-3 text-sm outline-none transition-colors focus:border-brandBlue"
              />
            </div>
            <textarea
              rows={5}
              placeholder="Message"
              className="w-full rounded-md border border-slate-300 px-4 py-3 text-sm outline-none transition-colors focus:border-brandBlue"
            />
            <button
              type="submit"
              className="rounded-md bg-brandBlue px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brandGreen"
            >
              Send Message
            </button>
          </form>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm text-brandDark transition-colors hover:text-brandGreen"
            >
              <Globe size={16} />
              GitHub
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm text-brandDark transition-colors hover:text-brandGreen"
            >
              <Globe size={16} />
              LinkedIn
            </a>
            <a
              href="mailto:hello@example.com"
              className="inline-flex items-center gap-2 text-sm text-brandDark transition-colors hover:text-brandGreen"
            >
              <Mail size={16} />
              Email
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;

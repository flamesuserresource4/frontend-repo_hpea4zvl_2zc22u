import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, BookOpen } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="relative w-full bg-slate-950 text-white">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <h2 className="text-3xl font-semibold sm:text-4xl">About Me</h2>
          <p className="mt-4 text-white/80">
            I’m a sophomore at Ashesi University majoring in Economics. My background spans both economics and accounting, and I’m passionate about using data, models, and clear communication to inform better decisions.
          </p>
        </motion.div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur"
          >
            <div className="flex items-start gap-4">
              <div className="rounded-lg bg-cyan-400/10 p-3 ring-1 ring-cyan-400/20">
                <GraduationCap className="text-cyan-300" size={22} />
              </div>
              <div>
                <h3 className="text-lg font-semibold">Economics Major</h3>
                <p className="mt-1 text-sm text-white/80">
                  Building strengths in microeconomics, macroeconomics, econometrics, and applied policy.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur"
          >
            <div className="flex items-start gap-4">
              <div className="rounded-lg bg-emerald-400/10 p-3 ring-1 ring-emerald-400/20">
                <BookOpen className="text-emerald-300" size={22} />
              </div>
              <div>
                <h3 className="text-lg font-semibold">Accounting Foundation</h3>
                <p className="mt-1 text-sm text-white/80">
                  Experience working with financial statements, budgeting, and cost analysis to support decision-making.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

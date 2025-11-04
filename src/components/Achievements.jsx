import React from 'react';
import { motion } from 'framer-motion';
import { Award, BarChart2 } from 'lucide-react';

const items = [
  {
    icon: Award,
    title: 'Economics Case Challenge Recognition',
    desc: 'Recognized for analytical rigor and clear presentation of policy insights in a student-led case challenge.'
  },
  {
    icon: BarChart2,
    title: 'Accounting Excellence Mention',
    desc: 'Acknowledged for strong performance in introductory and intermediate accounting coursework.'
  },
  {
    icon: Award,
    title: 'Data-Driven Project Highlights',
    desc: 'Built dashboards and reports that translated complex data into actionable stories.'
  }
];

export default function Achievements() {
  return (
    <section id="achievements" className="relative w-full bg-slate-950 text-white">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center text-3xl font-semibold sm:text-4xl"
        >
          Accolades & Highlights
        </motion.h2>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: idx * 0.05 }}
              className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur"
            >
              <div className="mb-4 inline-flex rounded-lg bg-white/5 p-3 ring-1 ring-white/10">
                <it.icon size={22} className="text-fuchsia-300" />
              </div>
              <h3 className="text-lg font-semibold">{it.title}</h3>
              <p className="mt-2 text-sm text-white/80">{it.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Briefcase } from 'lucide-react';

const projects = [
  {
    title: 'Microfinance Impact Dashboard',
    desc: 'An interactive dashboard exploring loan performance and social impact metrics for microfinance initiatives.',
    tags: ['Data Viz', 'Econometrics', 'Policy'],
    link: '#'
  },
  {
    title: 'Student Budgeting App',
    desc: 'A simple budgeting workflow to track expenses, categorize spending, and set savings goals.',
    tags: ['Personal Finance', 'Accounting'],
    link: '#'
  },
  {
    title: 'Macroeconomic Trends Explorer',
    desc: 'A visual explorer for inflation, GDP, and employment indicators with annotated insights.',
    tags: ['Macro', 'Visualization'],
    link: '#'
  }
];

export default function Projects() {
  return (
    <section id="projects" className="relative w-full bg-slate-950 text-white">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-center gap-3 text-center"
        >
          <Briefcase className="text-emerald-300" />
          <h2 className="text-3xl font-semibold sm:text-4xl">Selected Projects</h2>
        </motion.div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, idx) => (
            <motion.a
              key={p.title}
              href={p.link}
              target={p.link.startsWith('http') ? '_blank' : undefined}
              rel={p.link.startsWith('http') ? 'noopener noreferrer' : undefined}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: idx * 0.07 }}
              className="group rounded-xl border border-white/10 bg-white/5 p-5 ring-1 ring-white/10 backdrop-blur transition hover:-translate-y-1 hover:bg-white/10"
            >
              <div className="flex items-start justify-between gap-3">
                <h3 className="text-lg font-semibold">{p.title}</h3>
                <ExternalLink size={16} className="opacity-0 transition group-hover:opacity-100" />
              </div>
              <p className="mt-2 text-sm text-white/80">{p.desc}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="rounded-full bg-white/5 px-2.5 py-1 text-xs text-white/80 ring-1 ring-white/10">
                    {t}
                  </span>
                ))}
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

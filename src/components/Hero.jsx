import React from 'react';
import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';
import { Mail, Download } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] w-full overflow-hidden bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 text-white">
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute -top-24 left-1/2 h-96 w-[70rem] -translate-x-1/2 rounded-full bg-gradient-to-r from-cyan-500/20 via-fuchsia-500/10 to-emerald-400/20 blur-3xl" />
      </div>

      <div className="mx-auto flex max-w-7xl flex-col items-center px-6 py-20 md:flex-row md:py-28 gap-12">
        <motion.div
          className="relative z-10 w-full md:w-1/2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-block rounded-full bg-white/10 px-4 py-1 text-xs tracking-wider text-white/80 ring-1 ring-white/15 backdrop-blur">
            Ashesi University • Economics Major
          </span>
          <h1 className="mt-5 text-4xl font-semibold leading-tight tracking-tight sm:text-5xl md:text-6xl">
            Hi, I’m <span className="bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-emerald-400 bg-clip-text text-transparent">a sophomore economist</span>
          </h1>
          <p className="mt-5 max-w-xl text-white/80">
            I blend analytical rigor from economics with a strong foundation in accounting. I enjoy turning data into clear stories and building modern, impactful projects.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-lg bg-white px-4 py-2 text-slate-900 transition hover:bg-white/90"
            >
              <Mail size={18} /> Contact
            </a>
            <a
              href="#about"
              className="inline-flex items-center gap-2 rounded-lg border border-white/20 bg-white/5 px-4 py-2 text-white transition hover:bg-white/10"
            >
              <Download size={18} /> View Profile
            </a>
          </div>
        </motion.div>

        <motion.div
          className="relative z-10 w-full md:w-1/2 h-[420px] md:h-[560px] rounded-xl overflow-hidden ring-1 ring-white/10 bg-white/5 backdrop-blur"
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          <Spline
            scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
            style={{ width: '100%', height: '100%' }}
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/30 via-transparent to-slate-900/20" />
        </motion.div>
      </div>
    </section>
  );
}

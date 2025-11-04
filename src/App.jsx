import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Achievements from './components/Achievements';
import Projects from './components/Projects';
import { motion } from 'framer-motion';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <header className="sticky top-0 z-50 backdrop-blur bg-slate-950/50 border-b border-white/10">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#home" className="text-sm font-semibold tracking-tight">
            <span className="bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-emerald-400 bg-clip-text text-transparent">Portfolio</span>
          </a>
          <nav className="hidden gap-6 text-sm text-white/80 md:flex">
            <a href="#about" className="hover:text-white">About</a>
            <a href="#achievements" className="hover:text-white">Accolades</a>
            <a href="#projects" className="hover:text-white">Projects</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </nav>
        </div>
      </header>

      <main>
        <Hero />
        <About />
        <Achievements />
        <Projects />

        <section id="contact" className="relative w-full bg-slate-950">
          <div className="mx-auto max-w-6xl px-6 py-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
              className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/0 p-8 text-center backdrop-blur"
            >
              <h3 className="text-2xl font-semibold">Let’s connect</h3>
              <p className="mx-auto mt-2 max-w-2xl text-white/80">
                Interested in collaborating or chatting about economics, accounting, or data-driven projects? I’d love to hear from you.
              </p>
              <div className="mt-6">
                <a
                  href="mailto:hello@example.com"
                  className="inline-flex items-center justify-center rounded-lg bg-white px-4 py-2 text-slate-900 transition hover:bg-white/90"
                >
                  Email Me
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-slate-950/60 py-6 text-center text-xs text-white/60">
        © {new Date().getFullYear()} Ashesi University • Economics Portfolio
      </footer>
    </div>
  );
}

"use client";

import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

import ProgressBar from "@/components/ProgressBar";
import FloatingAssets from "@/components/FloatingAssets";
import { socials } from "@/data/portfolio";
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa6";
import { ArrowUpRight } from "lucide-react";
import { useEffect, useState } from "react";

const iconMap: any = {
  github: FaGithub,
  linkedin: FaLinkedin,
  mail: FaEnvelope,
  instagram: FaInstagram,
};

export default function Home() {
  const email = "fauzan.ashril.hakiim.tik23@stu.pnj.ac.id";
  const [year, setYear] = useState<number | string>("");

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  // Manual Robust Smooth Scroll
  const scrollTo = (targetPosition: number) => {
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    const duration = 1000;
    let start: number | null = null;

    const animation = (currentTime: number) => {
      if (start === null) start = currentTime;
      const timeElapsed = currentTime - start;
      const run = ease(timeElapsed, startPosition, distance, duration);
      window.scrollTo(0, run);
      if (timeElapsed < duration) requestAnimationFrame(animation);
    };

    const ease = (t: number, b: number, c: number, d: number) => {
      t /= d / 2;
      if (t < 1) return (c / 2) * t * t + b;
      t--;
      return (-c / 2) * (t * (t - 2) - 1) + b;
    };

    requestAnimationFrame(animation);
  };

  const scrollToId = (id: string) => {
    const target = document.getElementById(id);
    if (!target) return;
    const offset = 120;
    const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - offset;
    scrollTo(targetPosition);
  };

  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    scrollTo(0);
  };

  return (
    <main className="relative bg-white selection:bg-sky-100 selection:text-sky-900 overflow-x-hidden grid-pattern">
      <ProgressBar />
      <FloatingAssets />

      <div className="noise" />

      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full z-[100] px-6 py-6 md:px-8 md:py-8 flex justify-between items-center bg-white/80 backdrop-blur-md border-b border-slate-100">
        <button
          onClick={scrollToTop}
          className="text-lg font-black tracking-widest text-slate-900 uppercase cursor-pointer outline-none hover:text-sky-500 transition-colors"
        >
          F<span className="text-sky-500">A</span>H<span className="text-slate-300">.</span>
        </button>
        <div className="flex gap-8 items-center">
          {["Work", "Skills", "Contact"].map((item) => (
            <button
              key={item}
              onClick={() => scrollToId(item.toLowerCase() === 'work' ? 'work' : item.toLowerCase())}
              className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400 hover:text-sky-500 transition-colors cursor-pointer outline-none"
            >
              {item}
            </button>
          ))}
        </div>
      </nav>

      <Hero />
      <Projects />
      <Skills />

      {/* Social / Connect Section */}
      <section id="contact" className="py-40 px-6 bg-slate-50 border-t border-slate-100">
        <div className="container max-w-7xl mx-auto flex flex-col gap-24">
          <div className="space-y-6 text-center">
            <span className="text-sky-500 font-bold text-xs uppercase tracking-[0.6em]">Collaboration</span>
            <h2 className="text-6xl md:text-8xl font-black tracking-tighter leading-none text-slate-900 uppercase">
              Let's craft <br /> <span className="text-slate-400 opacity-80">Legendary.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 space-y-10">
              <p className="text-slate-500 text-xl leading-relaxed font-medium">
                Pioneering digital excellence with high-performance engineering.
                Ready for the next big challenge.
              </p>
              <div className="flex flex-wrap gap-4">
                {socials.map((social) => {
                  const Icon = iconMap[social.icon];
                  return (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      data-cursor-text={social.name}
                      className="flex items-center gap-4 px-8 py-4 rounded-full bg-white border border-slate-200 hover:border-sky-500 hover:text-sky-600 text-slate-600 font-black text-[10px] uppercase tracking-widest transition-all duration-300 shadow-sm"
                    >
                      <Icon className="w-4 h-4" />
                      {social.name}
                    </a>
                  );
                })}
              </div>
            </div>

            <div className="lg:col-span-7">
              <a href={`mailto:${email}`} className="group block p-12 md:p-16 rounded-[3rem] bg-white border border-slate-200 shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:scale-[1.02] transition-all">
                <div className="flex flex-col gap-8">
                  <span className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400">Official Inquiry</span>
                  <div className="flex items-center justify-between">
                    <span className="text-lg md:text-2xl font-black tracking-tighter text-slate-900 uppercase break-all">
                      {email}
                    </span>
                    <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-sky-500 text-white flex items-center justify-center -rotate-45 group-hover:rotate-0 transition-transform duration-500 shadow-lg shadow-sky-500/20">
                      <ArrowUpRight className="w-6 h-6 md:w-8 md:h-8" />
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-20 text-center bg-slate-50 border-t border-slate-100">
        <p className="text-[12px] font-black uppercase tracking-[0.8em] text-slate-500 opacity-80">&copy; {year} Fauzan Ashril Hakiim</p>
      </footer>
    </main>
  );
}

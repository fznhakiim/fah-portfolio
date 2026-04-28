"use client";

import { motion, useMotionValue, useSpring, useScroll, useTransform } from "framer-motion";
import { stats } from "@/data/portfolio";
import { useRef } from "react";

function MagneticButton({ children, className, primary = false, onClick }: any) {
  const ref = useRef<HTMLButtonElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 150, damping: 15 });
  const springY = useSpring(y, { stiffness: 150, damping: 15 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    x.set((clientX - centerX) * 0.4);
    y.set((clientY - centerY) * 0.4);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.button
      ref={ref}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: springX, y: springY }}
      className={`${className} relative overflow-hidden group cursor-none`}
    >
      <span className="relative z-10">{children}</span>
      {primary && (
        <motion.div 
          className="absolute inset-0 bg-sky-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        />
      )}
    </motion.button>
  );
}

export default function Hero() {
  const containerRef = useRef(null);
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);

  const manualScroll = (targetId: string) => {
    const target = document.getElementById(targetId);
    if (!target) return;

    const offset = 120;
    const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - offset;
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

  return (
    <section ref={containerRef} className="relative min-h-screen flex flex-col justify-center items-center px-6 pt-20 md:pt-0 bg-white grid-pattern">
      {/* Decorative Background Elements */}
      <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-sky-50 blur-[120px] rounded-full" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-50/50 blur-[100px] rounded-full" />
      
      <motion.div 
        style={{ y: y1 }}
        className="absolute top-1/4 left-0 w-full text-center pointer-events-none select-none opacity-[0.03] z-0"
      >
        <span className="text-[20vw] font-black tracking-tighter uppercase text-slate-900">
          Creative
        </span>
      </motion.div>

      <motion.div 
        style={{ y: y2 }}
        className="absolute bottom-1/4 right-0 w-full text-right pr-20 pointer-events-none select-none opacity-[0.02] z-0"
      >
        <span className="text-[15vw] font-black tracking-tighter uppercase text-slate-900">
          Developer
        </span>
      </motion.div>
      
      <div className="container max-w-7xl mx-auto z-10">
        <div className="flex flex-col items-center text-center space-y-12">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="px-5 py-2 rounded-full border border-sky-100 bg-sky-50 text-sky-600 text-[10px] font-black uppercase tracking-[0.4em] relative z-10"
          >
            Digital Craftsman
          </motion.div>

          <motion.h1 
            className="text-7xl md:text-[9rem] font-black tracking-tighter leading-[0.8] text-slate-900 uppercase"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Fauzan <br />
            <span className="text-sky-500">Ashril Hakiim</span>
          </motion.h1>

          <motion.p 
            className="text-lg md:text-2xl text-slate-500 max-w-2xl leading-relaxed mx-auto font-medium"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            Building next-generation digital products with clean code, 
            exceptional performance, and user-centric design.
          </motion.p>

          <motion.div 
            className="flex flex-wrap gap-6 justify-center pt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <MagneticButton 
              primary 
              onClick={() => manualScroll("work")}
              className="px-14 py-6 bg-sky-500 text-white font-black text-[10px] uppercase tracking-widest rounded-full shadow-lg shadow-sky-500/20 hover:scale-105 transition-transform"
            >
              The Portfolio
            </MagneticButton>
            <MagneticButton 
              onClick={() => manualScroll("contact")}
              className="px-14 py-6 bg-white border border-slate-200 text-slate-900 font-black text-[10px] uppercase tracking-widest rounded-full hover:bg-slate-50 transition-colors shadow-sm"
            >
              Let's Connect
            </MagneticButton>
          </motion.div>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-32 border-t border-slate-100 pt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          {stats.map((stat, i) => (
            <div key={i} className="text-center md:text-left flex flex-col gap-2">
              <div className="text-5xl font-black text-slate-900 leading-none">{stat.value}</div>
              <div className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.3em]">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

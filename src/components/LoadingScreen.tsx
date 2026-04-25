"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    // Progress counter logic
    const interval = setInterval(() => {
      setCounter((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setLoading(false), 500);
          return 100;
        }
        return prev + Math.floor(Math.random() * 5) + 1;
      });
    }, 50);

    return () => clearInterval(interval);
  }, []);

  const letters = ["F", "A", "H", "."];

  return (
    <AnimatePresence>
      {loading && (
        <div className="fixed inset-0 z-[10000] flex flex-col pointer-events-none">
          {/* Top Panel */}
          <motion.div
            initial={{ y: 0 }}
            exit={{ 
              y: "-100%",
              transition: { duration: 1, ease: [0.87, 0, 0.13, 1] }
            }}
            className="flex-1 bg-white relative overflow-hidden"
          >
            <div className="absolute inset-0 opacity-[0.05] grid-pattern" />
            <div className="absolute top-[-20%] right-[-10%] w-[60%] h-[120%] bg-sky-50 blur-[120px] rounded-full" />
          </motion.div>

          {/* Bottom Panel */}
          <motion.div
            initial={{ y: 0 }}
            exit={{ 
              y: "100%",
              transition: { duration: 1, ease: [0.87, 0, 0.13, 1] }
            }}
            className="flex-1 bg-white relative overflow-hidden"
          >
            <div className="absolute inset-0 opacity-[0.05] grid-pattern" />
            <div className="absolute bottom-[-20%] left-[-10%] w-[60%] h-[120%] bg-blue-50/50 blur-[120px] rounded-full" />
          </motion.div>

          {/* Content Overlay */}
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ 
              opacity: 0, 
              scale: 0.9,
              filter: "blur(10px)",
              transition: { duration: 0.4 } 
            }}
            className="absolute inset-0 flex flex-col items-center justify-center pointer-events-auto"
          >
            <div className="flex gap-4 mb-8">
              {letters.map((char, i) => (
                <motion.span
                  key={i}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className={`text-5xl md:text-8xl font-black ${char === "." ? "text-sky-500" : "text-slate-900"} uppercase tracking-tighter`}
                >
                  {char}
                </motion.span>
              ))}
            </div>

            <div className="relative w-64 h-[2px] bg-slate-100 overflow-hidden rounded-full">
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: `${counter}%` }}
                className="absolute top-0 left-0 h-full bg-sky-500"
              />
            </div>

            <div className="mt-6 flex flex-col items-center gap-2">
              <motion.span 
                className="text-4xl md:text-6xl font-black text-slate-200 tabular-nums"
              >
                {counter}%
              </motion.span>
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="text-[10px] font-black text-slate-400 uppercase tracking-[1em] ml-4"
              >
                Loading Excellence
              </motion.span>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

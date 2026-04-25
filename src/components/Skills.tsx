"use client";

import { motion } from "framer-motion";
import { skillCategories } from "@/data/portfolio";

export default function Skills() {
  return (
    <section id="skills" className="py-40 px-6 bg-white border-t border-slate-100 relative overflow-hidden">
      <div className="container max-w-7xl mx-auto">
        <div className="flex flex-col gap-24">
          <div className="space-y-6 text-center max-w-3xl mx-auto">
            <span className="text-sky-500 font-bold text-xs uppercase tracking-[0.5em]">Technical Arsenal</span>
            <h2 className="text-6xl md:text-8xl font-black tracking-tighter leading-none text-slate-900 uppercase">
              Tools & <br /> <span className="text-slate-300 opacity-60">Systems.</span>
            </h2>
            <p className="text-slate-500 text-lg md:text-xl leading-relaxed">
              A meticulously selected technical arsenal for building high-impact digital solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-6 auto-rows-[200px]">
            {skillCategories.flatMap((category, catIdx) => 
              category.skills.map((skill, i) => {
                // Randomly assign spans for a bento feel
                const isLarge = (i + catIdx) % 7 === 0;
                const isWide = (i + catIdx) % 5 === 0;
                
                return (
                  <motion.div
                    key={`${catIdx}-${i}`}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.05 }}
                    className={`group relative p-8 rounded-[2.5rem] bg-slate-50 border-2 border-slate-100/80 hover:border-sky-500/50 hover:shadow-2xl hover:shadow-sky-500/10 transition-all duration-500 overflow-hidden ${
                      isLarge ? "md:row-span-2 md:col-span-2" : isWide ? "md:col-span-2" : ""
                    }`}
                  >
                    <div className="absolute top-8 right-8 text-[10px] font-black text-slate-300 uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                      {category.title.split(' ')[0]}
                    </div>

                    <div className="h-full flex flex-col justify-between relative z-10">
                      {skill.icon && (
                        <div className="w-12 h-12 md:w-16 md:h-16 flex items-center justify-center rounded-2xl bg-white shadow-sm border-2 border-slate-100 group-hover:scale-110 group-hover:rotate-6 group-hover:border-sky-500/30 transition-all duration-500">
                          <img
                            src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${skill.icon}/${skill.icon}-original.svg`}
                            alt={skill.name}
                            className="w-8 h-8 md:w-10 md:h-10 grayscale group-hover:grayscale-0 transition-all duration-700"
                            onError={(e) => {
                              (e.target as HTMLImageElement).style.display = 'none';
                            }}
                          />
                        </div>
                      )}
                      
                      <div>
                        <h4 className="text-xl md:text-2xl font-black text-slate-900 uppercase tracking-tighter">
                          {skill.name}
                        </h4>
                        <div className="h-1 w-0 group-hover:w-full bg-sky-500 transition-all duration-500 mt-2" />
                      </div>
                    </div>

                    {/* Background Glow */}
                    <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-sky-100/50 blur-[80px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                  </motion.div>
                );
              })
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

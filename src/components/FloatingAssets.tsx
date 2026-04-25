"use client";

import { motion } from "framer-motion";
import { FaReact, FaPython, FaLaravel, FaJs, FaVuejs } from "react-icons/fa6";
import { SiNextdotjs, SiTailwindcss, SiFastapi } from "react-icons/si";

const icons = [
  { Icon: FaReact, color: "text-sky-400", top: "25%", left: "20%" },
  { Icon: SiNextdotjs, color: "text-slate-900", top: "25%", left: "85%" },
  { Icon: FaPython, color: "text-blue-500", top: "45%", left: "5%" },
  { Icon: FaLaravel, color: "text-red-500", top: "65%", left: "90%" },
  { Icon: SiTailwindcss, color: "text-sky-500", top: "85%", left: "15%" },
  { Icon: FaJs, color: "text-yellow-400", top: "35%", left: "75%" },
  { Icon: FaVuejs, color: "text-emerald-500", top: "55%", left: "80%" },
  { Icon: SiFastapi, color: "text-emerald-400", top: "75%", left: "8%" },
];

const shapes = [
  { type: "plus", top: "20%", left: "20%", size: "text-xl" },
  { type: "circle", top: "40%", left: "90%", size: "text-2xl" },
  { type: "star", top: "60%", left: "15%", size: "text-lg" },
  { type: "square", top: "80%", left: "70%", size: "text-xl" },
  { type: "plus", top: "10%", left: "80%", size: "text-lg" },
];

export default function FloatingAssets() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {icons.map((item, i) => (
        <motion.div
          key={`icon-${i}`}
          className={`absolute ${item.color} opacity-[0.2] text-5xl md:text-7xl`}
          initial={{ y: 0 }}
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 10, -10, 0]
          }}
          transition={{ 
            duration: 5 + i, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          style={{ top: item.top, left: item.left }}
        >
          <item.Icon />
        </motion.div>
      ))}

      {shapes.map((shape, i) => (
        <motion.div
          key={`shape-${i}`}
          className={`absolute text-slate-300 opacity-[0.4] ${shape.size} font-black`}
          initial={{ scale: 0.8 }}
          animate={{ 
            scale: [0.8, 1.2, 0.8],
            rotate: [0, 90, 180, 270, 360]
          }}
          transition={{ 
            duration: 8 + i, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          style={{ top: shape.top, left: shape.left }}
        >
          {shape.type === "plus" && "+"}
          {shape.type === "circle" && "○"}
          {shape.type === "star" && "★"}
          {shape.type === "square" && "□"}
        </motion.div>
      ))}
    </div>
  );
}

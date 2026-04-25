"use client";

import { useEffect, useState } from "react";
import { motion, useSpring, AnimatePresence } from "framer-motion";

export default function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false);
  const [cursorText, setCursorText] = useState("");
  const mouseX = useSpring(0, { stiffness: 400, damping: 30 });
  const mouseY = useSpring(0, { stiffness: 400, damping: 30 });

  useEffect(() => {
    const moveMouse = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const handleHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const interactable = target.closest("a, button, .interactable") as HTMLElement;
      
      if (interactable) {
        setIsHovering(true);
        const text = interactable.getAttribute("data-cursor-text");
        setCursorText(text || "");
      } else {
        setIsHovering(false);
        setCursorText("");
      }
    };

    window.addEventListener("mousemove", moveMouse);
    window.addEventListener("mouseover", handleHover);
    
    return () => {
      window.removeEventListener("mousemove", moveMouse);
      window.removeEventListener("mouseover", handleHover);
    };
  }, [mouseX, mouseY]);

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-10 h-10 rounded-full border-2 border-sky-500 pointer-events-none z-[10000] hidden md:flex items-center justify-center overflow-hidden"
        style={{
          x: mouseX,
          y: mouseY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: isHovering ? 2.5 : 1,
          backgroundColor: isHovering ? "rgba(14, 165, 233, 0.2)" : "rgba(14, 165, 233, 0)",
          borderColor: cursorText ? "rgba(14, 165, 233, 0.8)" : "rgba(14, 165, 233, 1)",
        }}
        transition={{ scale: { duration: 0.2 } }}
      >
        <AnimatePresence>
          {cursorText && (
            <motion.span
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              className="text-[4px] font-black uppercase text-sky-600 tracking-tighter text-center px-1"
            >
              {cursorText}
            </motion.span>
          )}
        </AnimatePresence>
      </motion.div>
      
      {/* Follower Dot */}
      <motion.div
        className="fixed top-0 left-0 w-1.5 h-1.5 bg-sky-500 rounded-full pointer-events-none z-[10001] hidden md:block"
        style={{
          x: mouseX,
          y: mouseY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />
    </>
  );
}

"use client";
import { Command, CheckCircle2, CircleDashed } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function Process() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [-50, 50]);

  return (
    <section ref={containerRef} className="py-32 relative overflow-hidden" id="solutions">
      {/* Dynamic Background shapes bound to scroll */}
      <motion.div style={{ y: y1 }} className="absolute -left-[10%] top-[20%] w-[400px] h-[400px] border-[40px] border-[#0168FD]/5 rounded-full z-0 pointer-events-none" />
      <motion.div style={{ y: y2 }} className="absolute right-[5%] bottom-[10%] w-[300px] h-[300px] border-[2px] border-white/10 rounded-full z-0 pointer-events-none" />

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-[#0168FD]/10 rounded-full blur-[160px] -z-10 pointer-events-none" />
      
      <div className="max-w-4xl mx-auto px-6 text-center mb-16 relative z-10">
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          className="inline-flex items-center px-4 py-1.5 rounded-full bg-[#0168FD] text-white text-xs font-semibold uppercase tracking-wider mb-6 shadow-[0_0_20px_rgba(1,104,253,0.5)]"
        >
          Agile Process
        </motion.div>
        
        <motion.h2 
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-white mb-6"
        >
          More powerful with <span className="text-[#0168FD]">Agile Methodology</span>
        </motion.h2>
        
        <motion.p 
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="text-zinc-400 max-w-2xl mx-auto text-lg"
        >
          Need a feature pivoted? Want to scale up? With our iterative transparent workflow, you're always in control of your roadmap and deliverables.
        </motion.p>
      </div>

      <motion.div 
        initial={{ y: 40, opacity: 0, scale: 0.95 }}
        whileInView={{ y: 0, opacity: 1, scale: 1 }}
        transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.3 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto px-6 relative z-10"
      >
        <div className="w-full rounded-2xl border border-white/10 bg-[#0A0A0A]/80 backdrop-blur-xl shadow-2xl p-1 relative overflow-hidden">
          <motion.div 
             animate={{ x: ["-100%", "200%"] }}
             transition={{ duration: 3, ease: "linear", repeat: Infinity }}
             className="absolute top-0 left-0 w-1/2 h-1 bg-gradient-to-r from-transparent via-[#0168FD]/80 to-transparent"
          />
          
          <div className="p-6 md:p-8 flex flex-col gap-6">
            <div className="flex items-center gap-4 pb-6 border-b border-white/5">
              <Command className="w-5 h-5 text-zinc-500" />
              <div className="h-10 w-full bg-white/5 rounded-lg border border-white/10 flex items-center px-4 overflow-hidden relative">
                <motion.span 
                   initial={{ x: "-100%" }}
                   whileInView={{ x: 0 }}
                   transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
                   viewport={{ once: true }}
                   className="text-white/80 text-sm font-mono tracking-wider absolute"
                >
                  Type 'review sprint' to see progress...
                </motion.span>
              </div>
              <motion.button 
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="h-10 w-10 shrink-0 bg-[#0168FD] rounded-lg flex items-center justify-center shadow-[0_0_15px_rgba(1,104,253,0.4)]"
              >
                <span className="text-white transform -rotate-90 text-xl font-bold">^</span>
              </motion.button>
            </div>

            <div className="grid grid-cols-2 gap-4 text-sm font-medium">
              <div className="flex flex-col gap-2">
                <div className="text-zinc-500 mb-2 uppercase tracking-wider text-xs font-bold">In Progress</div>
                {[1, 2].map((i) => (
                   <motion.div 
                     key={i}
                     initial={{ opacity: 0, x: -20 }}
                     whileInView={{ opacity: 1, x: 0 }}
                     transition={{ delay: 0.6 + i * 0.1 }}
                     viewport={{ once: true }}
                     className="flex items-center gap-3 bg-white/5 px-4 py-3 rounded-lg border border-white/5"
                   >
                     <motion.div animate={{ rotate: 360 }} transition={{ duration: 2, repeat: Infinity, ease: "linear" }}>
                       <CircleDashed className="w-4 h-4 text-[#1755B3]" />
                     </motion.div>
                     <span className="text-zinc-300">Task {i} Schema</span>
                   </motion.div>
                ))}
              </div>
              <div className="flex flex-col gap-2">
                <div className="text-zinc-500 mb-2 uppercase tracking-wider text-xs font-bold">Completed</div>
                {[1, 2].map((i) => (
                   <motion.div 
                     key={i}
                     initial={{ opacity: 0, x: 20 }}
                     whileInView={{ opacity: 1, x: 0 }}
                     transition={{ delay: 0.8 + i * 0.1 }}
                     viewport={{ once: true }}
                     className="flex items-center gap-3 bg-green-500/10 px-4 py-3 rounded-lg border border-green-500/20 text-green-400"
                   >
                     <CheckCircle2 className="w-4 h-4" />
                     <span>Milestone {i} Docs</span>
                   </motion.div>
                ))}
              </div>
            </div>
            
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              viewport={{ once: true }}
              className="mt-4 p-4 bg-white/5 rounded-lg border border-white/5 flex items-center justify-between text-sm hover:border-[#0168FD]/30 transition-colors"
            >
               <span className="text-zinc-400">Current Velocity: <span className="text-white font-bold ml-1">42 SP / Sprint</span></span>
               <span className="text-[#0168FD] font-semibold cursor-pointer flex items-center gap-1 group">
                 View Roadmap 
                 <motion.span animate={{ x: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>→</motion.span>
               </span>
            </motion.div>
          </div>
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        viewport={{ once: true }}
        className="text-center mt-12 flex items-center justify-center gap-4 relative z-10"
      >
        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-6 py-3 rounded-full bg-[#0168FD] text-white text-sm font-semibold hover:bg-[#1755B3] transition-colors shadow-[0_0_15px_rgba(1,104,253,0.3)]"
        >
          Start Project ⚡
        </motion.button>
        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-6 py-3 rounded-full bg-white/10 text-white text-sm font-semibold hover:bg-white/20 transition-colors border border-white/10"
        >
          See Demo 👁️
        </motion.button>
      </motion.div>
    </section>
  );
}

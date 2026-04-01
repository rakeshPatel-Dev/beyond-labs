"use client";
import { Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export function Pricing() {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <section className="py-24 relative overflow-hidden" id="pricing">
      {/* Background shape */}
      <motion.div 
         animate={{ rotate: 360 }}
         transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
         className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#0168FD]/5 rounded-full blur-[120px] -z-10 pointer-events-none" 
      />
      
      <div className="max-w-5xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 relative z-10"
        >
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-[#0168FD] text-white text-xs font-semibold uppercase tracking-wider mb-6 shadow-[#0168FD]/30 shadow-lg">
            Partnership
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Find your perfect engagement model
          </h2>
          
          <div className="inline-flex items-center p-1 rounded-full bg-black border border-white/10 my-8 relative cursor-pointer" onClick={() => setIsAnnual(!isAnnual)}>
             <motion.div 
               className="absolute top-1 bottom-1 left-1 bg-[#0168FD] rounded-full z-0 shadow-[0_0_15px_rgba(1,104,253,0.5)]"
               initial={false}
               animate={{ 
                 width: isAnnual ? "190px" : "130px",
                 x: isAnnual ? "130px" : "0px"
               }}
               transition={{ type: "spring", stiffness: 300, damping: 30 }}
             />
             <div className={`px-6 py-2 rounded-full text-sm font-semibold relative z-10 transition-colors ${!isAnnual ? 'text-white' : 'text-zinc-400'}`}>
                Project Based
             </div>
             <div className={`px-6 py-2 rounded-full text-sm font-semibold relative z-10 transition-colors flex items-center ${isAnnual ? 'text-white' : 'text-zinc-400'}`}>
                Monthly Retainer 
                <span className={`ml-2 text-[10px] px-2 py-0.5 rounded-full transition-colors ${isAnnual ? 'bg-white text-[#0168FD]' : 'bg-[#0168FD]/20 text-[#0168FD]'}`}>
                  Save 20%
                </span>
             </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto z-10 relative">
          {/* Card 1 */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -5, borderColor: "rgba(255,255,255,0.2)" }}
            className="p-8 pb-10 rounded-3xl bg-zinc-950/80 backdrop-blur-md border border-white/10 flex flex-col items-start gap-4 transition-all"
          >
            <h3 className="text-white text-2xl font-bold">Dedicated Team</h3>
            <p className="text-zinc-500 text-sm">Perfect for active scale-ups.</p>
            <div className="flex items-end gap-1 my-4 h-14">
              <AnimatePresence mode="wait">
                 <motion.span 
                   key={isAnnual ? 'annual' : 'monthly'}
                   initial={{ opacity: 0, y: -10 }}
                   animate={{ opacity: 1, y: 0 }}
                   exit={{ opacity: 0, y: 10 }}
                   className="text-5xl font-bold text-white relative"
                 >
                   {isAnnual ? '$8k' : 'Custom'}
                 </motion.span>
              </AnimatePresence>
              <span className="text-zinc-500 mb-2">/month</span>
            </div>
            <div className="w-full h-px bg-white/10 mb-2"></div>
            <p className="text-zinc-300 font-semibold mb-2">Included</p>
            <ul className="space-y-4 mb-10 w-full">
               {["Full-time dedicated engineers", "Direct integration into your PM tools", "Daily standups and Slack access", "Scale team up or down with 30 days notice"].map((feature, i) => (
                 <li key={i} className="flex gap-3 text-zinc-400 text-sm items-start">
                   <Check className="w-5 h-5 text-zinc-600 shrink-0"/> {feature}
                 </li>
               ))}
            </ul>
            <motion.button 
              whileTap={{ scale: 0.95 }}
              className="w-full mt-auto px-6 py-4 rounded-full border border-white/20 text-white font-semibold hover:bg-white/5 transition-colors"
            >
              Talk to Sales
            </motion.button>
          </motion.div>

          {/* Card 2 */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(1,104,253,0.2)" }}
            className="p-8 pb-10 rounded-3xl bg-zinc-950/90 backdrop-blur-md border border-[#0168FD]/40 flex flex-col items-start gap-4 relative overflow-hidden shadow-[0_0_40px_rgba(1,104,253,0.15)] group"
          >
            {/* Hover Glare */}
            <div className="absolute top-0 left-0 w-[200%] h-[200%] bg-gradient-to-br from-white/10 to-transparent -translate-x-[150%] translate-y-[-50%] group-hover:translate-x-[100%] transition-transform duration-1000 rotate-45 pointer-events-none"></div>
            
            <div className="absolute top-0 right-0 p-4 pb-8 pl-8 rounded-bl-3xl bg-gradient-to-bl from-[#0168FD]/20 to-transparent flex items-center gap-2"></div>
            
            <h3 className="text-white text-2xl font-bold">Project Based</h3>
            <p className="text-zinc-500 text-sm">Perfect for delivering specific milestones.</p>
            <div className="flex items-end gap-1 my-4 h-14">
              <span className="text-5xl font-bold text-white">Fixed</span>
              <span className="text-zinc-500 mb-2">/milestone</span>
            </div>
            <div className="w-full h-px bg-[#0168FD]/20 mb-2"></div>
            <p className="text-white font-semibold mb-2">Included</p>
            <ul className="space-y-4 mb-10 w-full">
               {["Discovery & Architectural Design", "Guaranteed Delivery Timeline", "Dedicated QA & Testing Phase", "Minimum 6-month Warranty support"].map((feature, i) => (
                 <li key={i} className="flex gap-3 text-white text-sm items-start">
                   <Check className="w-5 h-5 text-[#0168FD] shrink-0"/> {feature}
                 </li>
               ))}
            </ul>
            <motion.button 
              whileTap={{ scale: 0.95 }}
              whileHover={{ scale: 1.02 }}
              className="w-full mt-auto px-6 py-4 rounded-full bg-[#0168FD] shadow-[0_4px_14px_0_rgba(1,104,253,0.39)] text-white font-semibold transition-all relative overflow-hidden z-10"
            >
              Request a Quote ⚡
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

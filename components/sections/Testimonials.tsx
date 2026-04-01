"use client";
import { Star, ArrowLeft, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export function Testimonials() {
  const reviews = [
    {
       name: "Felix H.",
       role: "CTO @Chandler",
       content: "As a CTO, I was skeptical. But the scalable architecture they delivered is clean, readable, and instantly deployable. We rely on it daily.",
       image: "https://i.pravatar.cc/150?img=11"
    },
    {
       name: "Rafi H.",
       role: "Product Owner @GrowLoop",
       content: "It feels like our product specs go live instantly. There's no bottleneck. What we imagine is exactly what gets built.",
       image: "https://i.pravatar.cc/150?img=59"
    },
    {
       name: "Alex M.",
       role: "Founder @Lightframe",
       content: "This team feels like an in-house elite squad. We shipped a massive feature set in under a month — with zero technical debt.",
       image: "https://i.pravatar.cc/150?img=12"
    }
  ];

  return (
    <section className="py-24 border-y border-white/5 relative bg-zinc-950/30 overflow-hidden">
      {/* Decorative Blur */}
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-[#0168FD]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16"
        >
          <div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Honest review from<br />founders & CTOs
            </h2>
          </div>
          <div className="flex items-center gap-4 text-right">
             <motion.div 
               initial={{ scale: 0.8, opacity: 0 }}
               whileInView={{ scale: 1, opacity: 1 }}
               viewport={{ once: true }}
               transition={{ type: "spring", delay: 0.3 }}
               className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-[#0168FD] to-[#0168FD]/30"
             >
               99%
             </motion.div>
             <div className="text-sm font-bold text-zinc-400 capitalize whitespace-pre-wrap text-left lead pb-2 leading-none">
               Positive feedback<br/>from scale-ups
             </div>
          </div>
        </motion.div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
             hidden: {},
             visible: { transition: { staggerChildren: 0.2 } }
          }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
           {reviews.map((review, idx) => (
             <motion.div 
               variants={{
                 hidden: { opacity: 0, scale: 0.9, y: 20 },
                 visible: { opacity: 1, scale: 1, y: 0, transition: { type: "spring", stiffness: 100 } }
               }}
               key={idx} 
               whileHover={{ y: -8 }}
               className={`p-8 rounded-2xl bg-[#0A0A0A] border transition-colors ${idx === 0 ? 'border-[#0168FD]/30 shadow-[0_0_20px_rgba(1,104,253,0.1)]' : 'border-white/5 hover:border-white/10'} relative flex flex-col gap-6`}
             >
               {idx === 0 && (
                 <div className="absolute top-6 left-6 flex items-center gap-1 text-[#0168FD]">
                   {[...Array(5)].map((_, i) => (
                     <motion.div key={i} initial={{ opacity: 0, rotate: -30 }} animate={{ opacity: 1, rotate: 0 }} transition={{ delay: 1 + (i*0.1) }}>
                       <Star className="w-4 h-4 fill-[#0168FD]" />
                     </motion.div>
                   ))}
                   <span className="text-sm text-white ml-2">5.0</span>
                 </div>
               )}
               <p className={`text-zinc-300 leading-relaxed ${idx === 0 ? 'mt-8' : ''}`}>
                 "{review.content}"
               </p>
               <div className="mt-auto flex items-center gap-4 pt-4">
                 {/* eslint-disable-next-line @next/next/no-img-element */}
                 <img src={review.image} alt={review.name} className="w-10 h-10 rounded-full border border-white/20"/>
                 <div>
                    <h4 className="text-white font-semibold text-sm">{review.name}</h4>
                    <p className="text-zinc-500 text-xs">{review.role}</p>
                 </div>
               </div>
             </motion.div>
           ))}
        </motion.div>

        <div className="flex justify-end gap-3 mt-8">
           <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 text-white transition-colors">
              <ArrowLeft className="w-5 h-5"/>
           </motion.button>
           <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 text-white transition-colors">
              <ArrowRight className="w-5 h-5"/>
           </motion.button>
        </div>
      </div>
    </section>
  );
}

"use client";
import { ArrowRight, MessageSquareCode } from "lucide-react";
import { motion } from "framer-motion";

export function CTA() {
  return (
    <section className="py-32 relative overflow-hidden" id="contact">
      {/* Immersive Shapes Background */}
      <div className="absolute inset-0 z-0">
        <motion.div 
          animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-[20%] right-[10%] w-[300px] h-[300px] border border-white/5 rounded-[40px] rotate-12 blur-[2px]"
        />
        <motion.div 
          animate={{ scale: [1.2, 1, 1.2], rotate: [90, 0, 90] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-[10%] left-[5%] w-[400px] h-[400px] border border-[#0168FD]/10 rounded-[60px] -rotate-12 blur-[1px]"
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-radial from-[#1755B3]/20 to-transparent rounded-full blur-[140px] pointer-events-none" />
      </div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.95, y: 30 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, type: "spring" }}
        className="max-w-4xl mx-auto px-6 text-center relative z-10"
      >
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
          Take the Shortcut way to Production
        </h2>
        <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          <strong className="text-white">Partner with Beyond Labs</strong> to turn ideas into clean, scalable software — faster. No more boilerplate. No more guesswork. Just results.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <motion.button 
            whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(1,104,253,0.5)" }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-8 py-4 rounded-full bg-[#0168FD] text-white font-bold text-lg transition-transform relative overflow-hidden group"
          >
            <span className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300 ease-out" />
            <span className="relative flex items-center gap-2">Get Started <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" /></span>
          </motion.button>
          
          <motion.button 
            whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-8 py-4 rounded-full border border-white/20 bg-white/5 text-white font-bold text-lg transition-colors group"
          >
            Book a Strategy Call <MessageSquareCode className="w-5 h-5 group-hover:scale-110 transition-transform" />
          </motion.button>
        </div>
      </motion.div>
    </section>
  );
}

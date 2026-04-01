"use client";
import { MonitorSmartphone, Cloud, Layers, Cpu, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

export function Features() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 30 },
    visible: { 
       opacity: 1, 
       scale: 1, 
       y: 0, 
       transition: { type: "spring", stiffness: 100, damping: 20 } 
    },
  };

  const features = [
    {
      icon: <MonitorSmartphone className="w-6 h-6 text-[#0168FD]" />,
      title: "Custom Web Applications",
      description: "Scalable, high-performance web applications tailored to your business logic.",
      visual: (
        <div className="h-40 w-full rounded-lg bg-zinc-900/50 border border-white/5 p-4 flex flex-col gap-3 group-hover:border-[#0168FD]/30 transition-colors">
          <div className="h-4 w-1/2 bg-white/10 rounded overflow-hidden">
             <motion.div 
               animate={{ x: ["-100%", "200%"] }} 
               transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
               className="h-full w-1/2 bg-gradient-to-r from-transparent via-[#0168FD]/50 to-transparent"
             />
          </div>
          <div className="flex-1 rounded border border-white/5 bg-gradient-to-br from-white/5 to-transparent relative overflow-hidden">
            <motion.div 
               animate={{ opacity: [0.1, 0.3, 0.1] }} 
               transition={{ duration: 3, repeat: Infinity }}
               className="absolute inset-0 bg-[#0168FD]/10 mix-blend-overlay"
            />
          </div>
        </div>
      )
    },
    {
      icon: <Cloud className="w-6 h-6 text-[#0168FD]" />,
      title: "Enterprise Cloud Solutions",
      description: "Secure and resilient cloud infrastructure design and deployment.",
      visual: (
        <div className="h-40 w-full rounded-lg bg-zinc-900/50 border border-white/5 p-4 relative overflow-hidden flex items-center justify-center group-hover:border-[#0168FD]/30 transition-colors">
          <motion.div 
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(1,104,253,0.15)_0%,transparent_70%)]"
          ></motion.div>
          <div className="flex gap-4 relative z-10">
             <motion.div animate={{ y: [0, -5, 0] }} transition={{ duration: 2, repeat: Infinity, delay: 0 }} className="w-12 h-12 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center backdrop-blur-md"><Cloud className="w-5 h-5 text-zinc-400"/></motion.div>
             <motion.div animate={{ y: [0, -8, 0] }} transition={{ duration: 2, repeat: Infinity, delay: 0.2 }} className="w-12 h-12 rounded-lg bg-white/5 border border-[#0168FD]/40 shadow-[0_0_20px_rgba(1,104,253,0.3)] flex items-center justify-center backdrop-blur-md relative">
                <Cpu className="w-5 h-5 text-[#0168FD]"/>
                <div className="absolute inset-0 border border-[#0168FD] rounded-lg animate-ping opacity-20"></div>
             </motion.div>
             <motion.div animate={{ y: [0, -5, 0] }} transition={{ duration: 2, repeat: Infinity, delay: 0.4 }} className="w-12 h-12 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center backdrop-blur-md"><ShieldCheck className="w-5 h-5 text-zinc-400"/></motion.div>
          </div>
        </div>
      )
    },
    {
      icon: <Layers className="w-6 h-6 text-[#0168FD]" />,
      title: "Scalable Architecture",
      description: "System designs that grow with your user base without bottlenecks.",
      visual: (
        <div className="h-40 w-full rounded-lg bg-zinc-900/50 border border-white/5 p-4 flex items-end gap-2 group-hover:border-[#0168FD]/30 transition-colors">
            {[40, 60, 30, 80, 50, 90, 70].map((h, i) => (
              <motion.div 
                key={i} 
                initial={{ height: "0%" }}
                whileInView={{ height: `${h}%` }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 + i * 0.1, type: "spring" }}
                className="flex-1 bg-gradient-to-t from-[#0168FD]/50 to-[#0168FD]/10 rounded-t-sm border-t border-[#0168FD]/50" 
              />
            ))}
        </div>
      )
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden" id="features">
      {/* Decorative shapes */}
      <div className="absolute left-[5%] top-1/4 w-64 h-64 border border-white/5 rounded-full -z-10" />
      <div className="absolute right-[5%] bottom-1/4 w-96 h-96 border border-[#0168FD]/10 rounded-full -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-[#0168FD]/10 border border-[#0168FD]/20 text-[#0168FD] text-xs font-semibold uppercase tracking-wider mb-6">
            Our Advantage
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Unleash Your Business Power<br />With Engineering Precision
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto text-lg leading-relaxed">
            Combine expert engineering with strategic vision. Deliver clean, scalable software faster than ever — and make your mark in the digital landscape.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {features.map((feature, idx) => (
            <motion.div 
              key={idx} 
              variants={cardVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group p-1 rounded-2xl bg-gradient-to-b from-white/10 to-transparent hover:from-[#0168FD]/40 hover:to-transparent transition-all duration-300"
            >
              <div className="bg-black/90 backdrop-blur-xl h-full rounded-xl p-8 flex flex-col items-start gap-6 border border-white/5 group-hover:border-transparent transition-colors shadow-2xl">
                <div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center border border-white/10 group-hover:bg-[#0168FD]/20 group-hover:border-[#0168FD]/30 transition-colors">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                  <p className="text-zinc-400 leading-relaxed text-sm">
                    {feature.description}
                  </p>
                </div>
                <div className="w-full mt-auto pt-6">
                   {feature.visual}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

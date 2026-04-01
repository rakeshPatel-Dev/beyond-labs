"use client";
import { ArrowRight, Code2, Rocket, Cloud, Shield, Database, Layout } from "lucide-react";
import { motion, Variants } from "framer-motion";

export function Hero() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 20 } },
  };

  return (
    <section className="relative w-full pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden flex flex-col items-center justify-center min-h-[90vh]">
      {/* Glowing Dome Background */}
      <div className="absolute inset-x-0 top-0 h-300 z-0 pointer-events-none flex justify-center mt-[-20%] md:mt-[-10%]">
        {/* The Grid inside the Dome */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:70px_70px] [mask-image:radial-gradient(ellipse_at_top,black_40%,transparent_70%)] opacity-100 mt-[30%]"></div>

        {/* The Arc */}
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute top-[50%] w-[200%] sm:w-[150%] md:w-[150%] h-375 rounded-[100%] bg-black border-t-2 border-[#0168FD]/20"
          style={{
            boxShadow: '0 -40px 200px -20px rgba(1, 104, 253, 0.4), inset 0 40px 80px -20px rgba(1, 104, 253, 0.2)'
          }}
        />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-6xl mx-auto px-6 text-center z-10"
      >
        <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-zinc-300 mb-8 backdrop-blur-sm shadow-[0_0_15px_rgba(1,104,253,0.15)]">
          <span>Engineering Excellence</span>
          <Rocket className="w-4 h-4 text-[#0168FD]" />
        </motion.div>

        <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6 leading-tight">
          Deliver Digital Products<br />
          <span className="text-transparent bg-clip-text bg-linear-to-r from-[#0168FD] to-[#00A3FF]">Faster And Seamlessly</span>
        </motion.h1>

        <motion.p variants={itemVariants} className="text-lg md:text-xl text-zinc-400 mb-10 max-w-2xl mx-auto leading-relaxed">
          Production-ready software solutions built by experts. From idea to deployment in record time using cutting-edge technologies.
        </motion.p>

        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(1,104,253,0.5)" }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-8 py-4 rounded-full bg-[#0168FD] text-white font-semibold hover:bg-[#1755B3] transition-colors relative overflow-hidden group"
          >
            <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
            <span className="relative flex items-center gap-2">Start a Project <Rocket className="w-5 h-5 ml-1" /></span>
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-8 py-4 rounded-full bg-white/5 text-white font-semibold border border-white/10 hover:bg-white/10 transition-colors"
          >
            View Our Work
          </motion.button>
        </motion.div>

        {/* Abstract UI Visual */}
        <motion.div
          variants={{
            hidden: { opacity: 0, scale: 0.9, y: 40 },
            visible: { opacity: 1, scale: 1, y: 0, transition: { type: "spring", stiffness: 80, damping: 20, delay: 0.4 } }
          }}
          className="relative w-full max-w-4xl mx-auto aspect-video rounded-2xl border border-white/10 bg-black/40 backdrop-blur-md overflow-hidden shadow-[0_20px_50px_rgba(1,104,253,0.15)] flex items-center justify-center"
        >
          <div className="absolute inset-x-0 top-0 h-10 border-b border-white/10 flex items-center px-4 gap-2 bg-white/5">
            <div className="w-3 h-3 rounded-full bg-red-500/80 hover:bg-red-400 transition-colors" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/80 hover:bg-yellow-400 transition-colors" />
            <div className="w-3 h-3 rounded-full bg-green-500/80 hover:bg-green-400 transition-colors" />
          </div>
          <div className="p-8 w-full h-full mt-10 flex gap-6">
            {/* Sidebar mock */}
            <div className="w-48 hidden md:flex flex-col gap-4 border-r border-white/10 pr-6">
              <motion.div animate={{ opacity: [0.5, 1, 0.5] }} transition={{ duration: 3, repeat: Infinity }} className="h-8 rounded bg-white/10 w-full"></motion.div>
              <div className="h-4 rounded bg-white/5 w-3/4"></div>
              <div className="h-4 rounded bg-white/5 w-5/6"></div>
              <div className="h-4 rounded bg-white/5 w-2/3"></div>
            </div>
            {/* Content mock */}
            <div className="flex-1 flex flex-col gap-6">
              <div className="flex items-center justify-between">
                <div className="h-8 rounded bg-white/10 w-1/3"></div>
                <div className="h-8 rounded bg-[#0168FD]/20 border border-[#0168FD]/50 w-24"></div>
              </div>
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
                {[...Array(6)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.6 + i * 0.1, type: "spring" }}
                    whileHover={{ scale: 1.05, backgroundColor: "rgba(1, 104, 253, 0.1)" }}
                    className="aspect-video rounded-xl border border-white/5 bg-white/5 flex items-center justify-center cursor-pointer"
                  >
                    <Code2 className="w-6 h-6 text-zinc-600 transition-colors hover:text-[#0168FD]" />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Logo Cloud */}
        <motion.div
          variants={itemVariants}
          className="mt-24 pt-10 border-t border-white/10 relative"
        >
          <p className="text-sm font-medium text-zinc-500 mb-8 uppercase tracking-widest">
            Trusted by innovative startups to build faster
          </p>
          <div className="flex flex-wrap items-center justify-center gap-12 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
            <motion.div whileHover={{ y: -5, color: "#0168FD" }} className="flex items-center gap-2 font-bold text-xl cursor-default transition-colors"><Layout className="w-6 h-6" /> WebFlow</motion.div>
            <motion.div whileHover={{ y: -5, color: "#0168FD" }} className="flex items-center gap-2 font-bold text-xl cursor-default transition-colors"><Database className="w-6 h-6" /> Codat</motion.div>
            <motion.div whileHover={{ y: -5, color: "#0168FD" }} className="flex items-center gap-2 font-bold text-xl cursor-default transition-colors"><Cloud className="w-6 h-6" /> OpenAI</motion.div>
            <motion.div whileHover={{ y: -5, color: "#0168FD" }} className="flex items-center gap-2 font-bold text-xl cursor-default transition-colors"><Shield className="w-6 h-6" /> Deepset</motion.div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

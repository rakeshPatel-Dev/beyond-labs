"use client";
import { Code2, Cpu, Cloud, Database, Layout, Server, DatabaseZap } from "lucide-react";
import { motion } from "framer-motion";

export function TechStack() {
  const stack = [
    { name: "React / Next.js", icon: <Layout className="w-5 h-5" /> },
    { name: "Node.js", icon: <Server className="w-5 h-5" /> },
    { name: "TypeScript", icon: <Code2 className="w-5 h-5" /> },
    { name: "PostgreSQL", icon: <Database className="w-5 h-5" /> },
    { name: "AWS Cloud", icon: <Cloud className="w-5 h-5" /> },
    { name: "Redis", icon: <DatabaseZap className="w-5 h-5" /> },
    { name: "AI/ML Integration", icon: <Cpu className="w-5 h-5" /> },
  ];

  return (
    <section className="py-24 border-y border-white/5 relative bg-zinc-950/50 overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#0168FD]/30 to-transparent"></div>
      
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-12 relative z-10">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex-1 text-center md:text-left"
        >
          <h2 className="text-3xl font-bold text-white mb-4">
            Built on your favorite<br />Tech Stack
          </h2>
          <p className="text-zinc-400 max-w-sm mx-auto md:mx-0 mb-6">
            Clean code, ready to scale with the tools you trust. No lock-in—just enterprise-grade open source and cloud standards.
          </p>
          <motion.a 
            whileHover={{ x: 5 }}
            href="#" 
            className="inline-flex items-center text-[#0168FD] font-semibold hover:text-[#00A3FF] transition-colors"
          >
            Our Technology Focus &rarr;
          </motion.a>
        </motion.div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
             hidden: { opacity: 0 },
             visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
          }}
          className="flex-1 flex flex-wrap justify-center gap-4 relative"
        >
          <div className="absolute -inset-10 bg-[#0168FD]/5 rounded-full blur-2xl -z-10"></div>
          {stack.map((tech, idx) => (
            <motion.div 
              variants={{
                hidden: { opacity: 0, scale: 0.8, y: 20 },
                visible: { opacity: 1, scale: 1, y: 0, transition: { type: "spring" } }
              }}
              whileHover={{ scale: 1.05, borderColor: "rgba(1,104,253,0.5)", backgroundColor: "rgba(1,104,253,0.05)" }}
              key={idx} 
              className="px-5 py-3 rounded-xl bg-white/5 border border-white/10 flex items-center gap-3 backdrop-blur-sm shadow-lg shadow-black/50 cursor-default"
            >
              <div className="text-zinc-400 group-hover:text-[#0168FD] transition-colors">{tech.icon}</div>
              <span className="font-semibold text-zinc-300">{tech.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

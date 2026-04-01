"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    {
      question: "Do I need to know how to code to use this?",
      answer: "Nope! While developers will feel right at home with our architecture, non-coders and founders can rely on our dedicated team to handle the technical complexities while focusing on the product vision."
    },
    {
      question: "What design tools are supported?",
      answer: "We natively support Figma designs and can easily adapt Adobe XD, Sketch, or even rough wireframes into production-ready software."
    },
    {
      question: "Can I customize the generated code?",
      answer: "Absolutely. We build using standard, un-opinionated frameworks like Next.js and React so your team can easily take ownership and extend the codebase."
    },
    {
      question: "What happens to my code after generation?",
      answer: "You own 100% of the IP. We transfer all repositories directly to your GitHub/GitLab organizations upon completion of milestones."
    },
    {
      question: "Is my data secure?",
      answer: "Yes. We follow enterprise-grade security protocols, including SOC2 compliance principles and strict confidentiality agreements, to ensure your business logic and user data are fully protected."
    }
  ];

  return (
    <section className="py-24 max-w-4xl mx-auto px-6 relative" id="faq">
      {/* Premium accent dot */}
      <motion.div 
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-0 top-1/2 w-4 h-4 bg-[#0168FD] rounded-full blur-md opacity-50"
      />

      <div className="text-center mb-16">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="inline-flex items-center px-4 py-1.5 rounded-full bg-[#0168FD] text-white text-xs font-semibold uppercase tracking-wider mb-6 shadow-[#0168FD]/30 shadow-lg"
        >
          FAQ
        </motion.div>
        
        <motion.h2 
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ delay: 0.1 }}
           className="text-3xl md:text-5xl font-bold text-white mb-8"
        >
          Frequently Asked Questions
        </motion.h2>
        
        <motion.div 
           initial={{ opacity: 0 }}
           whileInView={{ opacity: 1 }}
           viewport={{ once: true }}
           transition={{ delay: 0.2 }}
           className="flex flex-wrap items-center justify-center gap-6 text-sm tabular-nums text-zinc-400 pb-4 mb-4 border-b border-white/5"
        >
           <button className="text-white relative after:absolute after:bottom-[-20px] after:left-0 after:w-full after:h-0.5 after:bg-[#0168FD]">General</button>
           <button className="hover:text-white transition-colors">Services</button>
           <button className="hover:text-white transition-colors">Security</button>
           <button className="hover:text-white transition-colors">Pricing</button>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="flex flex-col gap-0 border border-white/10 rounded-2xl overflow-hidden bg-black shadow-2xl"
      >
        {faqs.map((faq, idx) => (
          <div key={idx} className={`border-b border-white/10 last:border-0 ${openIdx === idx ? 'bg-zinc-950/50 flex flex-col md:flex-row' : 'hover:bg-zinc-900/30'} transition-colors duration-300`}>
             <button 
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                className={`flex-1 text-left p-6 font-medium text-lg flex justify-between items-center transition-colors ${openIdx === idx ? 'text-white' : 'text-zinc-400 hover:text-white'}`}
              >
                {faq.question}
                <motion.div animate={{ rotate: openIdx === idx ? 180 : 0 }} transition={{ duration: 0.3, ease: "backOut" }}>
                  <ChevronDown className={`w-5 h-5 shrink-0 transition-colors ${openIdx === idx ? 'text-[#0168FD]' : 'text-zinc-600'}`}/>
                </motion.div>
             </button>
             <AnimatePresence>
               {openIdx === idx && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
                    style={{ overflow: "hidden" }}
                    className="flex-1 md:pl-0 border-t border-white/5 md:border-t-0 md:border-l"
                  >
                    <div className="p-6 md:p-6 text-zinc-400 leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
               )}
             </AnimatePresence>
          </div>
        ))}
      </motion.div>
      
      <motion.p 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
        className="text-center text-zinc-500 mt-8 text-sm max-w-lg mx-auto"
      >
         For any unanswered questions, reach out to our support team via Contact form. We'll respond as soon as possible to assist you.
      </motion.p>
    </section>
  );
}

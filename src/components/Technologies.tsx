import { motion } from 'motion/react';

const techList = [
  { name: 'Python', color: 'text-yellow-400 border-yellow-400/30 shadow-yellow-400/20' },
  { name: 'Flask', color: 'text-white border-white/30 shadow-white/20' },
  { name: 'JavaScript', color: 'text-yellow-300 border-yellow-300/30 shadow-yellow-300/20' },
  { name: 'SQLite', color: 'text-blue-400 border-blue-400/30 shadow-blue-400/20' },
  { name: 'HTML5', color: 'text-orange-400 border-orange-400/30 shadow-orange-400/20' },
  { name: 'CSS3', color: 'text-blue-500 border-blue-500/30 shadow-blue-500/20' },
  { name: 'APIs', color: 'text-purple-400 border-purple-400/30 shadow-purple-400/20' },
  { name: 'OpenCV', color: 'text-green-400 border-green-400/30 shadow-green-400/20' },
  { name: 'Pine Script', color: 'text-teal-400 border-teal-400/30 shadow-teal-400/20' },
  { name: 'Cloud', color: 'text-cyan-400 border-cyan-400/30 shadow-cyan-400/20' },
];

export default function Technologies() {
  return (
    <section id="fase-2" className="py-32 bg-[#0d0d0d] relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-right"
        >
          <h3 className="text-[#00f5ff] font-mono text-xl mb-2">Fase 2</h3>
          <h2 className="text-4xl md:text-5xl font-bold">Minhas <span className="text-gradient">Skills</span></h2>
        </motion.div>
        
        <div className="flex flex-wrap justify-center gap-6 md:gap-8 max-w-5xl mx-auto py-10">
          {techList.map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ 
                type: "spring",
                stiffness: 260,
                damping: 20,
                delay: index * 0.05 
              }}
              animate={{
                y: [0, -15, 0],
              }}
              // @ts-ignore
              transition={{
                y: {
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: Math.random() * 2
                }
              }}
              whileHover={{ scale: 1.1, rotate: 5 }}
              className={`px-8 py-5 rounded-2xl bg-[#141414] border ${tech.color} font-mono text-lg md:text-xl cursor-pointer transition-colors duration-300 shadow-[0_0_20px_var(--tw-shadow-color)] hover:bg-[#1a1a1a] will-change-transform`}
            >
              {tech.name}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

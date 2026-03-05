import { motion, useScroll, useTransform } from 'motion/react';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
  const { scrollY } = useScroll();
  const gridY = useTransform(scrollY, [0, 1000], [0, 250]);
  const purpleOrbY = useTransform(scrollY, [0, 1000], [0, -200]);
  const cyanOrbY = useTransform(scrollY, [0, 1000], [0, 300]);
  const textY = useTransform(scrollY, [0, 1000], [0, 100]);

  const scrollToNext = () => {
    window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <motion.div style={{ y: gridY }} className="absolute inset-[-50%] bg-grid-pattern opacity-30 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a0a0a] to-[#0a0a0a] pointer-events-none" />
      
      {/* Glowing Orbs */}
      <motion.div 
        style={{ y: purpleOrbY }}
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-[radial-gradient(circle_at_center,_rgba(106,0,255,0.4)_0%,_transparent_60%)] rounded-full mix-blend-screen pointer-events-none will-change-transform"
      />
      <motion.div 
        style={{ y: cyanOrbY }}
        animate={{ 
          scale: [1, 1.5, 1],
          opacity: [0.1, 0.3, 0.1],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-[radial-gradient(circle_at_center,_rgba(0,245,255,0.4)_0%,_transparent_60%)] rounded-full mix-blend-screen pointer-events-none will-change-transform"
      />

      <motion.div style={{ y: textY }} className="container mx-auto px-6 relative z-10 text-center will-change-transform">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="inline-block mb-4 px-4 py-1.5 rounded-full border border-[#00f5ff]/30 bg-[#00f5ff]/10 text-[#00f5ff] font-mono text-sm"
        >
          System.init()
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-4 leading-tight"
        >
          João Layon
        </motion.h1>
        
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="text-3xl md:text-4xl font-semibold text-gradient mb-6"
        >
          Fullstack Developer
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto"
        >
          Criando sistemas inteligentes, automações e soluções digitais.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button 
            onClick={scrollToNext}
            className="relative inline-flex h-14 overflow-hidden rounded-full p-[2px] focus:outline-none focus:ring-2 focus:ring-[#00f5ff] focus:ring-offset-2 focus:ring-offset-[#0a0a0a] group w-full sm:w-auto"
          >
            <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#6a00ff_0%,#00f5ff_50%,#6a00ff_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-[#111111] px-10 py-1 text-base font-semibold text-white backdrop-blur-3xl transition-colors group-hover:bg-[#1a1a1a]">
              Iniciar Experiência
            </span>
          </button>
        </motion.div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer"
        onClick={scrollToNext}
      >
        <ChevronDown className="text-[#00f5ff] w-8 h-8 opacity-70" />
      </motion.div>
    </section>
  );
}

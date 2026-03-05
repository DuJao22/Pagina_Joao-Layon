import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, Unlock } from 'lucide-react';

const lines = [
  "> loading developer...",
  "Nome: João Layon",
  "Profissão: Fullstack Developer",
  "Stack: Python • Flask • JavaScript",
  "Especialidade: Sistemas e Automação",
  "> status: ready"
];

export default function About({ onUnlock }: { onUnlock: () => void }) {
  const [visibleLines, setVisibleLines] = useState<number>(0);
  const [isFinished, setIsFinished] = useState(false);
  const [unlocked, setUnlocked] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('fase-1');
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.7) {
          // Start animation
          const interval = setInterval(() => {
            setVisibleLines((prev) => {
              if (prev < lines.length - 1) {
                return prev + 1;
              } else {
                clearInterval(interval);
                setTimeout(() => setIsFinished(true), 500);
                return prev + 1;
              }
            });
          }, 400);
          window.removeEventListener('scroll', handleScroll);
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleUnlock = () => {
    setUnlocked(true);
    onUnlock();
    setTimeout(() => {
      const nextSection = document.getElementById('fase-2');
      if (nextSection) {
        nextSection.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.scrollBy({ top: window.innerHeight * 0.8, behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <section id="fase-1" className="py-32 relative z-10 bg-[#0a0a0a] min-h-screen flex flex-col justify-center">
      <div className="container mx-auto px-6 flex flex-col items-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center w-full max-w-3xl"
        >
          <h3 className="text-[#6a00ff] font-mono text-xl mb-2">Fase 1</h3>
          <h2 className="text-4xl md:text-5xl font-bold">Quem <span className="text-gradient">sou eu</span></h2>
        </motion.div>

        <div className="bg-[#111111] border border-[#333] rounded-xl p-8 font-mono text-base md:text-lg text-gray-300 shadow-[0_0_40px_rgba(0,245,255,0.1)] w-full max-w-3xl relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#00f5ff] to-[#6a00ff] opacity-50" />
          <div className="flex gap-2 mb-8">
            <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
            <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
          </div>
          <div className="space-y-4">
            {lines.map((line, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: index < visibleLines ? 1 : 0, x: index < visibleLines ? 0 : -10 }}
                transition={{ duration: 0.3 }}
                className={
                  index === 0 ? "text-gray-500" : 
                  index === lines.length - 1 ? `font-bold mt-8 transition-colors duration-500 ${isFinished ? 'text-[#25D366]' : 'text-[#00f5ff]'}` : 
                  "text-gray-200"
                }
              >
                {line.startsWith('Nome:') || line.startsWith('Profissão:') || line.startsWith('Stack:') || line.startsWith('Especialidade:') ? (
                  <>
                    <span className="text-[#6a00ff]">{line.split(': ')[0]}:</span> {line.split(': ')[1]}
                  </>
                ) : (
                  line
                )}
              </motion.div>
            ))}
            <motion.div
              animate={{ opacity: [0, 1, 0] }}
              transition={{ repeat: Infinity, duration: 0.8 }}
              className={`inline-block w-3 h-6 ml-2 align-middle ${isFinished ? 'bg-[#25D366]' : 'bg-[#00f5ff]'}`}
            />
          </div>
        </div>

        <div className="h-24 mt-12 flex items-center justify-center w-full">
          <AnimatePresence>
            {isFinished && !unlocked && (
              <motion.button
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9, y: -20 }}
                onClick={handleUnlock}
                className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 font-bold text-white bg-[#25D366]/10 border border-[#25D366]/50 rounded-full overflow-hidden transition-all hover:scale-105 hover:bg-[#25D366]/20 hover:border-[#25D366] shadow-[0_0_20px_rgba(37,211,102,0.2)]"
              >
                <Unlock className="relative z-10 w-5 h-5 text-[#25D366]" />
                <span className="relative z-10 text-[#25D366]">Acesso Liberado - Continuar</span>
                <ChevronDown className="relative z-10 w-5 h-5 text-[#25D366] animate-bounce" />
              </motion.button>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

import { useState, useEffect } from 'react';
import { motion } from 'motion/react';

const lines = [
  "> Loading developer...",
  "Python ✓",
  "Flask ✓",
  "JavaScript ✓",
  "OpenCV ✓",
  "APIs ✓",
  "System ready."
];

export default function Terminal() {
  const [visibleLines, setVisibleLines] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleLines((prev) => {
        if (prev < lines.length) return prev + 1;
        clearInterval(interval);
        return prev;
      });
    }, 600);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-[#111111] border border-[#333] rounded-xl p-6 font-mono text-sm md:text-base text-gray-300 shadow-[0_0_40px_rgba(106,0,255,0.15)] w-full max-w-md mx-auto relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#00f5ff] to-[#6a00ff] opacity-50" />
      <div className="flex gap-2 mb-6">
        <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
        <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
        <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
      </div>
      <div className="space-y-3">
        {lines.map((line, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: index < visibleLines ? 1 : 0, x: index < visibleLines ? 0 : -10 }}
            transition={{ duration: 0.3 }}
            className={index === lines.length - 1 ? "text-[#00f5ff] font-bold mt-6" : ""}
          >
            {line}
          </motion.div>
        ))}
        <motion.div
          animate={{ opacity: [0, 1, 0] }}
          transition={{ repeat: Infinity, duration: 0.8 }}
          className="inline-block w-2.5 h-5 bg-[#00f5ff] ml-2 align-middle"
        />
      </div>
    </div>
  );
}

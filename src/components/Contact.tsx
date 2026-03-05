import { motion } from 'motion/react';
import { Mail, MessageCircle, Rocket } from 'lucide-react';

export default function Contact() {
  return (
    <section className="py-40 relative overflow-hidden bg-[#0a0a0a]">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle_at_center,_rgba(106,0,255,0.15)_0%,_transparent_60%)] rounded-[100%] mix-blend-screen pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="inline-block mb-8 px-6 py-2 rounded-full border border-green-500/30 bg-green-500/10 text-green-400 font-mono text-lg uppercase tracking-widest"
        >
          Missão Completada
        </motion.div>

        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl md:text-7xl font-bold tracking-tighter mb-6 leading-tight"
        >
          Pronto para criar <br />
          <span className="text-gradient">algo incrível?</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto"
        >
          Vamos construir seu sistema.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <a 
            href="https://wa.me/5531990780959" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center gap-3 px-8 py-4 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold transition-colors w-full sm:w-auto justify-center"
          >
            <MessageCircle className="w-5 h-5" />
            WhatsApp
          </a>
          
          <a 
            href="mailto:joaolayon.grupohigino@gmail.com" 
            className="flex items-center gap-3 px-8 py-4 rounded-full bg-[#111] border border-[#333] hover:border-[#00f5ff] text-white font-semibold transition-colors w-full sm:w-auto justify-center"
          >
            <Mail className="w-5 h-5" />
            Email
          </a>

          <a 
            href="https://wa.me/5531990780959?text=Olá,%20gostaria%20de%20solicitar%20um%20projeto!" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 font-bold text-white bg-white/5 border border-white/10 rounded-full overflow-hidden transition-all hover:scale-105 hover:bg-white/10 hover:border-[#6a00ff]/50 w-full sm:w-auto"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#00f5ff]/20 to-[#6a00ff]/20 opacity-0 group-hover:opacity-100 transition-opacity" />
            <span className="relative z-10">Solicitar Projeto</span>
            <Rocket className="relative z-10 w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

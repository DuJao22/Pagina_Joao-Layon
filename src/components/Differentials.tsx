import { motion } from 'motion/react';
import { ShieldCheck, Zap, Smartphone, Cloud, Settings } from 'lucide-react';

const differentials = [
  { icon: ShieldCheck, title: '100% Personalizados', desc: 'Sistemas criados sob medida para a sua necessidade exata.' },
  { icon: Zap, title: 'Otimizados e Escaláveis', desc: 'Arquitetura pronta para crescer junto com o seu negócio.' },
  { icon: Smartphone, title: 'Interface Responsiva', desc: 'Funciona perfeitamente em celulares, tablets e computadores.' },
  { icon: Cloud, title: 'Hospedagem Cloud', desc: 'Sistemas seguros e disponíveis 24/7 em servidores de alta performance.' },
  { icon: Settings, title: 'Automação de Processos', desc: 'Reduza trabalho manual e aumente a eficiência da sua equipe.' },
];

export default function Differentials() {
  return (
    <section className="py-24 bg-[#111111] border-y border-[#222] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-[radial-gradient(ellipse_at_right,_rgba(0,245,255,0.05)_0%,_transparent_70%)] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-1/3 h-full bg-[radial-gradient(ellipse_at_left,_rgba(106,0,255,0.05)_0%,_transparent_70%)] pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold">Meu <span className="text-gradient">Diferencial</span></h2>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-6 max-w-6xl mx-auto">
          {differentials.map((diff, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex items-start gap-4 p-6 rounded-2xl bg-[#1a1a1a] border border-[#333] w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] hover:border-[#00f5ff]/30 transition-colors"
            >
              <div className="w-12 h-12 rounded-full bg-[#222] flex items-center justify-center flex-shrink-0">
                <diff.icon className="w-6 h-6 text-[#00f5ff]" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">{diff.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{diff.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

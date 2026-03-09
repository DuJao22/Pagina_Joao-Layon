import { useRef, useState } from 'react';
import { motion, useScroll, useTransform, useMotionValueEvent, AnimatePresence } from 'motion/react';
import { 
  Monitor, HeartPulse, ShoppingCart, Globe, ShoppingBag, CreditCard, 
  Cpu, Bot, BarChart3, TrendingUp, Target, Camera, Smartphone, 
  Download, Brain, Lightbulb 
} from 'lucide-react';

const services = [
  { 
    icon: Monitor, 
    title: 'Sistemas Web', 
    items: ['Sistemas personalizados', 'Painéis administrativos', 'Dashboards de controle', 'Login e níveis de acesso', 'Banco de dados SQLite', 'Hospedagem Cloud (Render)'] 
  },
  { 
    icon: HeartPulse, 
    title: 'Clínicas', 
    items: ['Agendamento de consultas', 'Agenda automática', 'Cadastro de pacientes', 'Busca por nome/CPF', 'Histórico de atendimentos', 'Recepção de clínica'] 
  },
  { 
    icon: ShoppingCart, 
    title: 'Sistemas Comerciais', 
    items: ['Gestão de loja', 'Cadastro com fotos', 'Controle de estoque', 'Entrada e saída', 'Gestão de clientes', 'Controle de vendas'] 
  },
  { 
    icon: Globe, 
    title: 'Desenvolvimento de Sites', 
    items: ['Sites profissionais', 'Landing pages', 'Sites responsivos', 'Páginas institucionais', 'Páginas promocionais', 'Vendas de serviços'] 
  },
  { 
    icon: ShoppingBag, 
    title: 'E-commerce', 
    items: ['Lojas virtuais completas', 'Cadastro de produtos', 'Carrinho de compras', 'Integração de pagamentos', 'Pedidos online', 'Painel admin'] 
  },
  { 
    icon: CreditCard, 
    title: 'Pagamentos', 
    items: ['Mercado Pago', 'Pagamentos via PIX', 'Geração de QR Code', 'Links de pagamento', 'Checkout personalizado'] 
  },
  { 
    icon: Cpu, 
    title: 'Automação', 
    items: ['Automação de processos', 'Sistemas automatizados', 'Integração de APIs', 'Desenvolvimento de bots', 'Automações web'] 
  },
  { 
    icon: Bot, 
    title: 'Inteligência Artificial', 
    items: ['Sistemas com IA', 'Análise de mercado', 'Redes neurais (Python)', 'Machine Learning', 'Automação de análise'] 
  },
  { 
    icon: BarChart3, 
    title: 'Análise de Dados', 
    items: ['Análise de produção', 'Mercado financeiro', 'Dashboards', 'Relatórios automáticos', 'Visualização de dados'] 
  },
  { 
    icon: TrendingUp, 
    title: 'Trading', 
    items: ['Estratégias de trading', 'Indicadores TradingView', 'Pine Script', 'Análise de velas', 'Estratégias Fibonacci'] 
  },
  { 
    icon: Target, 
    title: 'Automação Empresarial', 
    items: ['Sistemas internos', 'Tarefas administrativas', 'Relatórios', 'Cadastro de dados', 'Controle interno'] 
  },
  { 
    icon: Camera, 
    title: 'Visão Computacional', 
    items: ['Reconhecimento facial', 'Leitura de imagens', 'Identificação de objetos', 'Leitura de cores', 'Sistemas com OpenCV'] 
  },
  { 
    icon: Smartphone, 
    title: 'Aplicativos', 
    items: ['Apps em Python', 'Controle financeiro', 'Produtividade', 'Automação', 'Apps empresariais'] 
  },
  { 
    icon: Download, 
    title: 'Gerenciamento', 
    items: ['Download de playlists', 'Baixar conteúdos', 'Gerenciamento de arquivos', 'Automação de downloads'] 
  },
  { 
    icon: Brain, 
    title: 'Projetos Personalizados', 
    items: ['Software sob medida', 'Sistemas empresariais', 'Soluções tecnológicas', 'Prototipagem', 'Desenvolvimento de MVPs'] 
  },
  { 
    icon: Lightbulb, 
    title: 'Serviços Extras', 
    items: ['Manutenção de sistemas', 'Atualizações', 'Consultoria tecnológica', 'Otimização', 'Transformação digital'] 
  },
];

export default function Services() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const total = services.length;
  const [activeIndex, setActiveIndex] = useState(0);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const index = Math.round(latest * (total - 1));
    if (index !== activeIndex) {
      setActiveIndex(index);
    }
  });

  const anglePerItem = 360 / total;
  const totalRotation = anglePerItem * (total - 1);
  
  const wheelRotation = useTransform(scrollYProgress, [0, 1], [0, -totalRotation]);
  const iconRotation = useTransform(wheelRotation, v => -v);

  return (
    <section id="fase-3" ref={containerRef} className="relative h-[600vh] bg-[#050505]">
      <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center overflow-hidden">
        
        {/* Background Effects */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,245,255,0.05)_0%,transparent_70%)]" />
        
        {/* Header */}
        <div className="absolute top-6 md:top-12 left-0 right-0 text-center z-50 pointer-events-none">
          <h3 className="text-[#00f5ff] font-mono text-sm md:text-base mb-1 tracking-widest uppercase">Fase 3</h3>
          <h2 className="text-2xl md:text-4xl font-bold text-white">Meus <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f5ff] to-[#6a00ff]">Serviços</span></h2>
        </div>

        {/* Giant Orbital Wheel */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] h-[340px] md:w-[700px] md:h-[700px]">
          {/* Decorative Rings */}
          <div className="absolute inset-0 rounded-full border border-[#00f5ff]/10 border-dashed animate-[spin_60s_linear_infinite] will-change-transform" />
          <div className="absolute inset-8 md:inset-16 rounded-full border border-[#6a00ff]/20 animate-[spin_40s_linear_infinite_reverse] will-change-transform" />
          <div className="absolute inset-16 md:inset-32 rounded-full border border-[#00f5ff]/5 will-change-transform" />

          {/* Center Hub Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-[radial-gradient(circle_at_center,rgba(0,245,255,0.2)_0%,transparent_70%)] rounded-full pointer-events-none" />

          {/* Rotating Container */}
          <motion.div className="absolute inset-0 will-change-transform" style={{ rotate: wheelRotation }}>
            {services.map((s, i) => {
              const angle = i * anglePerItem - 90; // -90 puts index 0 at the top
              const isActive = activeIndex === i;
              
              return (
                <div key={i} className="absolute inset-0 will-change-transform" style={{ transform: `rotate(${angle}deg)` }}>
                  {/* Node positioning: right edge of the rotated container */}
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 will-change-transform">
                    {/* Counter-rotate the spoke */}
                    <div style={{ transform: `rotate(${-angle}deg)` }} className="will-change-transform">
                      {/* Counter-rotate the wheel */}
                      <motion.div 
                        style={{ rotate: iconRotation }}
                        className={`relative flex items-center justify-center w-10 h-10 md:w-14 md:h-14 rounded-full border-2 transition-all duration-500 will-change-transform ${
                          isActive 
                            ? 'border-[#00f5ff] bg-[#00f5ff]/20 shadow-[0_0_15px_#00f5ff]' 
                            : 'border-gray-800 bg-black/80 opacity-50 scale-75'
                        }`}
                      >
                        <s.icon className={`w-4 h-4 md:w-6 md:h-6 transition-colors duration-500 ${isActive ? 'text-[#00f5ff]' : 'text-gray-500'}`} />
                        
                        {/* Connection line to center for active item */}
                        {isActive && (
                          <div className="absolute top-full left-1/2 -translate-x-1/2 w-[2px] h-[30px] md:h-[80px] bg-gradient-to-b from-[#00f5ff] to-transparent" />
                        )}
                      </motion.div>
                    </div>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>

        {/* Content Panel (Center/Bottom) */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/4 md:-translate-y-1/2 mt-12 md:mt-0 w-[90%] max-w-sm md:max-w-lg z-20">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="relative p-6 md:p-8 rounded-2xl bg-[#050505]/95 md:bg-[#050505]/80 backdrop-blur-md border border-[#00f5ff]/30 shadow-[0_0_30px_rgba(0,245,255,0.1)] overflow-hidden group will-change-transform"
            >
              {/* Tech borders */}
              <div className="absolute top-0 left-0 w-12 h-[2px] bg-[#00f5ff] transition-all duration-500 group-hover:w-24" />
              <div className="absolute top-0 left-0 w-[2px] h-12 bg-[#00f5ff] transition-all duration-500 group-hover:h-24" />
              <div className="absolute bottom-0 right-0 w-12 h-[2px] bg-[#6a00ff] transition-all duration-500 group-hover:w-24" />
              <div className="absolute bottom-0 right-0 w-[2px] h-12 bg-[#6a00ff] transition-all duration-500 group-hover:h-24" />
              
              {/* Grid background */}
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiLz48L3N2Zz4=')] opacity-50" />

              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-[#00f5ff]/10 border border-[#00f5ff]/40 flex items-center justify-center shadow-[0_0_15px_rgba(0,245,255,0.2)]">
                    {(() => {
                      const Icon = services[activeIndex].icon;
                      return <Icon className="w-6 h-6 text-[#00f5ff]" />;
                    })()}
                  </div>
                  <div>
                    <h4 className="text-[#00f5ff] text-xs font-mono mb-1 tracking-wider uppercase">Serviço {activeIndex + 1} / {total}</h4>
                    <h3 className="text-xl md:text-2xl font-bold text-white tracking-wide">{services[activeIndex].title}</h3>
                  </div>
                </div>

                <ul className="space-y-3">
                  {services[activeIndex].items.map((item, i) => (
                    <motion.li 
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 + 0.2 }}
                      className="flex items-start gap-3 text-gray-300"
                    >
                      <span className="text-[#6a00ff] mt-1 text-xs">◈</span>
                      <span className="text-sm md:text-base leading-snug">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Progress Indicator (Bottom) */}
        <div className="absolute bottom-8 left-0 right-0 flex justify-center z-50 pointer-events-none">
          <div className="flex gap-1.5 md:gap-2 flex-wrap justify-center max-w-[80%]">
            {services.map((_, i) => (
              <div
                key={i}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  activeIndex === i 
                    ? 'w-6 md:w-8 bg-[#00f5ff] shadow-[0_0_10px_#00f5ff]' 
                    : 'w-1.5 md:w-2 bg-gray-800'
                }`}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

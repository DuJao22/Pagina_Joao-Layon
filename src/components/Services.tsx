import { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'motion/react';
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

function ServiceCard({ service, index, total, scrollYProgress }: { service: any, index: number, total: number, scrollYProgress: MotionValue<number> }) {
  const anglePerItem = 360 / total;
  const rotate = index * anglePerItem;
  const radius = 1000;

  const cardProgress = index / (total - 1);
  const windowSize = 1 / (total - 1);

  const opacity = useTransform(
    scrollYProgress,
    [cardProgress - windowSize * 1.5, cardProgress, cardProgress + windowSize * 1.5],
    [0.1, 1, 0.1]
  );

  const scale = useTransform(
    scrollYProgress,
    [cardProgress - windowSize * 1.5, cardProgress, cardProgress + windowSize * 1.5],
    [0.7, 1, 0.7]
  );

  const borderColor = useTransform(
    scrollYProgress,
    [cardProgress - windowSize * 0.5, cardProgress, cardProgress + windowSize * 0.5],
    ['rgba(34, 34, 34, 1)', 'rgba(0, 245, 255, 0.8)', 'rgba(34, 34, 34, 1)']
  );

  const boxShadow = useTransform(
    scrollYProgress,
    [cardProgress - windowSize * 0.5, cardProgress, cardProgress + windowSize * 0.5],
    ['0 0 0 rgba(0,245,255,0)', '0 20px 40px rgba(0,245,255,0.2)', '0 0 0 rgba(0,245,255,0)']
  );

  return (
    <div
      className="absolute top-1/2 left-1/2 w-[280px] md:w-[340px] h-[340px] md:h-[450px]"
      style={{
        transform: `translate(-50%, -50%) rotateY(${rotate}deg) translateZ(${radius}px)`,
        transformStyle: "preserve-3d"
      }}
    >
      <motion.div 
        className="w-full h-full p-5 md:p-6 rounded-2xl bg-[#111111] border flex flex-col will-change-transform"
        style={{ 
          opacity,
          scale,
          borderColor,
          boxShadow
        }}
      >
        <div className="flex items-center gap-3 md:gap-4 mb-3 md:mb-4">
          <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-[#1a1a1a] border border-[#333] flex items-center justify-center flex-shrink-0">
            <service.icon className="w-5 h-5 md:w-6 md:h-6 text-[#00f5ff]" />
          </div>
          <h3 className="text-base md:text-xl font-semibold text-white leading-tight">{service.title}</h3>
        </div>
        <ul className="space-y-1.5 md:space-y-2 text-xs md:text-sm text-gray-400 flex-grow">
          {service.items.map((item: string, i: number) => (
            <li key={i} className="flex items-start gap-2">
              <span className="text-[#6a00ff] mt-1 text-[8px] md:text-[10px]">▶</span>
              <span className="leading-snug">{item}</span>
            </li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
}

function ProgressDot({ index, total, scrollYProgress }: { index: number, total: number, scrollYProgress: MotionValue<number> }) {
  const cardProgress = index / (total - 1);
  const windowSize = 1 / (total - 1);
  
  const opacity = useTransform(
    scrollYProgress,
    [cardProgress - windowSize * 0.5, cardProgress, cardProgress + windowSize * 0.5],
    [0.3, 1, 0.3]
  );
  
  const scale = useTransform(
    scrollYProgress,
    [cardProgress - windowSize * 0.5, cardProgress, cardProgress + windowSize * 0.5],
    [1, 1.5, 1]
  );
  
  const backgroundColor = useTransform(
    scrollYProgress,
    [cardProgress - windowSize * 0.5, cardProgress, cardProgress + windowSize * 0.5],
    ['#333333', '#00f5ff', '#333333']
  );

  return (
    <motion.div
      className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full"
      style={{ opacity, scale, backgroundColor }}
    />
  );
}

export default function Services() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const total = services.length;
  const anglePerItem = 360 / total;
  const totalRotation = anglePerItem * (total - 1);
  
  const rotateY = useTransform(scrollYProgress, [0, 1], [0, -totalRotation]);

  return (
    <section id="fase-3" ref={containerRef} className="relative h-[600vh] bg-[#0a0a0a]">
      <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center overflow-hidden" style={{ perspective: '1200px' }}>
        
        {/* Header - Fixed on screen */}
        <div className="absolute top-8 md:top-20 left-0 right-0 text-center z-50 pointer-events-none">
          <h3 className="text-[#6a00ff] font-mono text-lg md:text-xl mb-1 md:mb-2">Fase 3</h3>
          <h2 className="text-3xl md:text-5xl font-bold">Meus <span className="text-gradient">Serviços</span></h2>
          <p className="text-gray-500 mt-2 md:mt-4 text-sm md:text-base animate-pulse">Role para baixo para explorar</p>
        </div>

        {/* 3D Scene */}
        <motion.div 
          className="relative w-full h-full flex items-center justify-center mt-16 md:mt-0"
          style={{
            rotateY,
            z: -1000, // Push the scene back by the radius
            transformStyle: "preserve-3d",
          }}
        >
          {services.map((service, index) => (
            <ServiceCard 
              key={index} 
              service={service} 
              index={index} 
              total={total} 
              scrollYProgress={scrollYProgress} 
            />
          ))}
        </motion.div>

        {/* Progress Indicator */}
        <div className="absolute bottom-12 left-0 right-0 flex justify-center z-50 pointer-events-none">
          <div className="flex gap-2 flex-wrap justify-center max-w-[80%]">
            {services.map((_, i) => (
              <ProgressDot key={i} index={i} total={total} scrollYProgress={scrollYProgress} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

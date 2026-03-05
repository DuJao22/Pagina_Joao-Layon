import { motion } from 'motion/react';
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
  return (
    <section className="py-32 relative z-10 bg-[#0a0a0a]">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-[#6a00ff] font-mono text-xl mb-2">Fase 3</h3>
          <h2 className="text-4xl md:text-5xl font-bold">Meus <span className="text-gradient">Serviços</span></h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: (index % 4) * 0.1, duration: 0.5 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="group relative p-6 rounded-2xl bg-[#111111] border border-[#222] hover:border-[#00f5ff]/50 transition-all duration-300 overflow-hidden shadow-lg hover:shadow-[0_0_20px_rgba(0,245,255,0.1)] flex flex-col h-full"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#00f5ff]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-[#1a1a1a] border border-[#333] flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:border-[#6a00ff]/50 group-hover:rotate-3 transition-all duration-300">
                    <service.icon className="w-6 h-6 text-[#00f5ff] group-hover:text-[#6a00ff] transition-colors" />
                  </div>
                  <h3 className="text-xl font-semibold text-white leading-tight">{service.title}</h3>
                </div>
                <ul className="space-y-2 text-sm text-gray-400 flex-grow">
                  {service.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-[#6a00ff] mt-1 text-[10px]">▶</span>
                      <span className="leading-snug">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

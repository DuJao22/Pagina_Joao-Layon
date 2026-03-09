import { motion } from 'motion/react';

const demos = [
  {
    title: "Sistema de Clínica",
    desc: "Gestão completa de pacientes, prontuários eletrônicos e agendamentos com interface intuitiva e rápida.",
    color: "from-blue-500/20 to-cyan-500/20",
    code: `// API Endpoint: /api/patients
app.get('/api/patients', async (req, res) => {
  const patients = await db.patients.find({
    status: 'active',
    appointmentToday: true
  });
  return res.json(patients);
});

> Fetching patient records...
> [SUCCESS] 14 patients loaded.
> Response time: 24ms`
  },
  {
    title: "Sistema de Loja",
    desc: "Controle de vendas, gestão de estoque inteligente e relatórios financeiros em tempo real.",
    color: "from-purple-500/20 to-pink-500/20",
    code: `SELECT 
  product_name, 
  stock_quantity, 
  total_sales 
FROM inventory 
WHERE stock_quantity < 10 
ORDER BY total_sales DESC;

> Running inventory check...
> [ALERT] 3 products low on stock.
> Auto-reorder triggered.`
  },
  {
    title: "Dashboard de Dados",
    desc: "Visualização de métricas e KPIs em tempo real para tomada de decisão estratégica.",
    color: "from-yellow-500/20 to-orange-500/20",
    code: `import pandas as pd
import matplotlib.pyplot as plt

data = pd.read_csv('financial_data.csv')
kpis = data.groupby('month')['revenue'].sum()

> Calculating monthly KPIs...
> Generating real-time dashboard...
> [SUCCESS] Data visualization ready.`
  },
  {
    title: "Automação Empresarial",
    desc: "Fluxos de trabalho automatizados com Inteligência Artificial integrada para otimizar processos.",
    color: "from-emerald-500/20 to-teal-500/20",
    code: `[10:42:01] Starting automation sequence...
[10:42:05] Connecting to ERP API... [OK]
[10:42:12] Extracting daily reports... [OK]
[10:42:18] Processing data with AI model... [OK]
[10:42:25] Sending summary emails to management... [OK]
[10:42:26] Sequence completed successfully.`
  }
];

export default function Demos() {
  return (
    <section className="py-32 bg-[#0d0d0d] relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24 text-right"
        >
          <h3 className="text-[#00f5ff] font-mono text-xl mb-2">Fase 4</h3>
          <h2 className="text-4xl md:text-5xl font-bold">Meus <span className="text-gradient">Projetos</span></h2>
        </motion.div>

        <div className="space-y-32">
          {demos.map((demo, index) => (
            <div key={index} className={`flex flex-col ${index % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-16`}>
              <motion.div 
                initial={{ opacity: 0, x: index % 2 !== 0 ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className="lg:w-5/12 space-y-6 will-change-transform"
              >
                <h3 className="text-3xl md:text-4xl font-bold">{demo.title}</h3>
                <p className="text-xl text-gray-400 leading-relaxed">{demo.desc}</p>
                <button className="px-6 py-2 rounded-full border border-[#333] hover:border-[#6a00ff] hover:bg-[#6a00ff]/10 text-white transition-all">
                  Ver Detalhes
                </button>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, scale: 0.95, y: 30 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                whileHover={{ scale: 1.02 }}
                className="lg:w-7/12 w-full cursor-pointer will-change-transform"
              >
                <div className={`relative rounded-3xl p-1 bg-gradient-to-br ${demo.color}`}>
                  <div className="bg-[#111111] rounded-[22px] overflow-hidden border border-[#333] shadow-2xl h-64 md:h-80 flex flex-col">
                    <div className="h-10 bg-[#1a1a1a] border-b border-[#333] flex items-center px-4 gap-2 flex-shrink-0">
                      <div className="w-3 h-3 rounded-full bg-red-500/80" />
                      <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                      <div className="w-3 h-3 rounded-full bg-green-500/80" />
                      <div className="ml-4 text-xs text-gray-500 font-mono">system_process.exe</div>
                    </div>
                    <div className="p-6 font-mono text-sm md:text-base text-[#00f5ff] overflow-y-auto whitespace-pre-wrap flex-grow bg-[#0a0a0a]">
                      {demo.code}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

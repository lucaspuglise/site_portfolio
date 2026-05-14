import { motion } from "motion/react";
import { Database, Layout, Terminal, Bot, Cpu } from "lucide-react";

export function Skills() {
  const skills = [
    {
      title: "Python",
      description: "Desenvolvimento de scripts, automação e análise de dados.",
      icon: <Terminal size={24} />,
      color: "from-blue-500 to-yellow-500",
      delay: 0.1
    },
    {
      title: "Estruturação de BD",
      description: "Modelagem relacional, queries avançadas e otimização.",
      icon: <Database size={24} />,
      color: "from-emerald-500 to-teal-500",
      delay: 0.2
    },
    {
      title: "Tecnologias Web",
      description: "Construção de interfaces e integrações com HTML, CSS e JS.",
      icon: <Layout size={24} />,
      color: "from-orange-500 to-red-500",
      delay: 0.3
    }
  ];

  return (
    <section id="habilidades" className="py-24 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">Habilidades</h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">Tecnologias e conceitos com os quais trabalho para criar soluções eficientes e inovadoras.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: skill.delay }}
              className="bg-zinc-900/40 backdrop-blur-lg border border-white/10 rounded-3xl p-8 hover:bg-white/[0.03] transition-colors group"
            >
              <div className={`w-12 h-12 rounded-xl mb-6 flex items-center justify-center bg-gradient-to-br ${skill.color} text-white shadow-lg group-hover:scale-110 transition-transform`}>
                {skill.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{skill.title}</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">{skill.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Special AI Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="relative bg-gradient-to-r from-purple-900/40 to-blue-900/40 backdrop-blur-xl border border-purple-500/30 rounded-3xl p-8 overflow-hidden group"
        >
          <div className="absolute -right-20 -top-20 w-64 h-64 bg-purple-500/20 rounded-full blur-[60px] group-hover:bg-purple-500/30 transition-colors" />
          
          <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center gap-6">
            <div className="p-4 bg-purple-500/20 border border-purple-500/30 rounded-2xl text-purple-300">
              <Bot size={32} />
            </div>
            <div>
              <div className="flex items-center gap-3 mb-2">
                <h3 className="text-2xl font-bold text-white">Inteligência Artificial</h3>
                <span className="px-3 py-1 bg-purple-500/20 text-purple-300 text-xs font-semibold rounded-full border border-purple-500/30 flex items-center gap-1">
                  <Cpu size={12} /> Foco Principal
                </span>
              </div>
              <p className="text-zinc-300 max-w-2xl">
                Exploração e integração de <strong className="text-white">IAs Generativas</strong> e <strong className="text-white">LLMs (Large Language Models)</strong> para automação de tarefas, geração de conteúdo e criação de agentes inteligentes.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Tags */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="flex flex-wrap gap-4 mt-8 justify-center md:justify-start"
        >
          <div className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-zinc-300 text-sm flex items-center gap-2 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-green-500"></span> Ambiente Linux
          </div>
          <div className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-zinc-300 text-sm flex items-center gap-2 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-blue-500"></span> Inglês Avançado
          </div>
        </motion.div>
      </div>
    </section>
  );
}

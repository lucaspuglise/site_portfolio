import { motion } from "motion/react";
import { Github, Figma, ArrowUpRight } from "lucide-react";
// @ts-ignore
import projectImg from "../../imports/celular_citysync.jpeg";

export function Projects() {
  return (
    <section id="projetos" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">Projetos</h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">Experiências práticas e soluções desenvolvidas para problemas reais.</p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8">
          {/* Main Feature Project - CitySync */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="group relative bg-zinc-900/40 backdrop-blur-sm border border-white/10 rounded-3xl overflow-hidden hover:border-white/20 transition-all"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2">
              
              {/* Image Area (Mockup placeholder) */}
              <div className="relative h-64 lg:h-full min-h-[300px] bg-zinc-800 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-tr from-purple-900/50 to-blue-900/50 mix-blend-overlay z-10" />
                <img 
                  src="https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?q=80&w=2000&auto=format&fit=crop" 
                  alt="CitySync Dashboard" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/40 z-10" />
                
                {/* Floating Mockup UI (simulated) */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-zinc-950/80 backdrop-blur-md border border-white/10 rounded-xl z-20 p-2 shadow-2xl flex flex-col gap-2">
                  <div className="flex gap-2 mb-1 px-2 pt-1">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
                  </div>
                  <div className="flex-1 rounded-lg overflow-hidden relative">
                    <img
                      src={projectImg}
                      alt="CitySync Dashboard"
                      className="absolute inset-0 w-full h-full object-contain bg-zinc-950 mix-blend-multiply brightness-150"
                    />
                  </div>
                </div>
              </div>

              {/* Content Area */}
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 text-purple-400 text-xs font-semibold mb-6 border border-purple-500/20 w-fit">
                  DESTAQUE
                </div>
                
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 flex items-center gap-3">
                  CitySync 
                  <ArrowUpRight className="text-zinc-500 group-hover:text-white transition-colors" />
                </h3>
                
                <p className="text-zinc-400 text-lg mb-8 leading-relaxed">
                  Um aplicativo de inteligência para cidades focada no monitoramento em tempo real de tráfego e densidade populacional. Utiliza IA para prever gargalos e sugerir rotas otimizadas, melhorando a fluidez urbana.
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  <span className="px-3 py-1 text-xs text-zinc-300 bg-white/5 border border-white/10 rounded-md">Python</span>
                  <span className="px-3 py-1 text-xs text-zinc-300 bg-white/5 border border-white/10 rounded-md">Machine Learning</span>
                  <span className="px-3 py-1 text-xs text-zinc-300 bg-white/5 border border-white/10 rounded-md">PostgreSQL</span>
                  <span className="px-3 py-1 text-xs text-zinc-300 bg-white/5 border border-white/10 rounded-md">React</span>
                </div>

                <div className="flex flex-wrap items-center gap-4 mt-auto">
                  <a href="https://github.com/lucaspuglise/CitySync" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3 bg-white text-black font-semibold rounded-xl hover:bg-zinc-200 transition-colors">
                    <Github size={18} /> Ver no GitHub
                  </a>
                  <a href="https://www.figma.com/make/di6XBjKasy3GHcr1rpuwbO/Cidade-Inteligente?fullscreen=1&t=v0FR76vi19xtkDtC-1" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3 bg-white/10 text-white font-semibold rounded-xl border border-white/10 hover:bg-white/20 transition-colors">
                    <Figma size={18} /> Ver no Figma
                  </a>
                </div>
              </div>

            </div>
          </motion.div>
          
          {/* Other projects can be added here if needed */}
        </div>
      </div>
    </section>
  );
}

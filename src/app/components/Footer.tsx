import { motion } from "motion/react";
import { Mail, Phone, ArrowRight, CircleDot } from "lucide-react";

export function Footer() {
  return (
    <footer id="contato" className="relative border-t border-white/10 pt-24 pb-12 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-[1px] bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-50" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 mb-20">
          
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="md:w-1/2"
          >
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">Vamos construir algo incrível juntos.</h2>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 font-medium text-sm">
              <CircleDot size={14} className="animate-pulse" /> Disponibilidade Imediata
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:w-1/2 w-full flex flex-col gap-4"
          >
            <a 
              href="mailto:lucaspuglisedeca@gmail.com"
              className="group flex items-center justify-between p-6 bg-zinc-900/50 border border-white/10 rounded-2xl hover:bg-white/5 hover:border-white/20 transition-all"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-purple-500/20 text-purple-400 flex items-center justify-center">
                  <Mail size={20} />
                </div>
                <div>
                  <div className="text-zinc-500 text-sm mb-1">E-mail</div>
                  <div className="text-white font-medium">lucaspuglisedeca@gmail.com</div>
                </div>
              </div>
              <ArrowRight className="text-zinc-500 group-hover:text-white transition-colors" />
            </a>

            <a 
              href="tel:+5561992093452"
              className="group flex items-center justify-between p-6 bg-zinc-900/50 border border-white/10 rounded-2xl hover:bg-white/5 hover:border-white/20 transition-all"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center">
                  <Phone size={20} />
                </div>
                <div>
                  <div className="text-zinc-500 text-sm mb-1">Telefone / WhatsApp</div>
                  <div className="text-white font-medium">(61) 99209-3452</div>
                </div>
              </div>
              <ArrowRight className="text-zinc-500 group-hover:text-white transition-colors" />
            </a>
          </motion.div>

        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/5 text-zinc-500 text-sm">
          <p>© {new Date().getFullYear()} Lucas Puglise de Carvalho. Todos os direitos reservados.</p>
          <div className="flex items-center gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-white transition-colors">GitHub</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

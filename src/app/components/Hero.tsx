import { motion } from "motion/react";
import { Github, Linkedin, Mail } from "lucide-react";
// @ts-ignore
import profileImg from "../../imports/ChatGPT_Image_14_de_mai._de_2026__16_52_16.png";
// @ts-ignore
import cvFile from "../../imports/LucasPuglise2026_CV.pdf";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-12 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full flex flex-col items-center relative z-10">
        
        {/* Social Links - Fixed vertically on large screens, row on mobile */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="absolute left-6 md:left-12 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-6"
        >
          <a href="https://www.linkedin.com/in/lucaspuglise/" target="_blank" rel="noreferrer" className="p-3 bg-white/5 border border-white/10 rounded-full text-zinc-400 hover:text-purple-400 hover:border-purple-500/50 hover:bg-purple-500/10 transition-all group">
            <Linkedin size={20} className="group-hover:scale-110 transition-transform" />
          </a>
          <a href="https://github.com/lucaspuglise" target="_blank" rel="noreferrer" className="p-3 bg-white/5 border border-white/10 rounded-full text-zinc-400 hover:text-purple-400 hover:border-purple-500/50 hover:bg-purple-500/10 transition-all group">
            <Github size={20} className="group-hover:scale-110 transition-transform" />
          </a>
          <div className="w-[1px] h-24 bg-gradient-to-b from-white/20 to-transparent mx-auto mt-2" />
        </motion.div>

        {/* Profile Image with Glow */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative mb-8 group"
        >
          {/* Subtle purple aura/neon behind the image */}
          <div className="absolute inset-0 bg-purple-500 rounded-full blur-[40px] opacity-40 group-hover:opacity-60 transition-opacity duration-700" />
          <div className="absolute inset-0 bg-gradient-to-tr from-purple-600 to-blue-500 rounded-full blur-[60px] opacity-20" />
          
          <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full border border-white/10 p-2 overflow-hidden bg-zinc-900 z-10">
            <img 
              src={profileImg} 
              alt="Lucas Puglise de Carvalho" 
              className="w-full h-full object-cover rounded-full"
            />
          </div>
        </motion.div>

        {/* Headings */}
        <div className="text-center max-w-4xl">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-white mb-6 leading-tight"
          >
            Olá, eu sou <br className="md:hidden" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-purple-300 to-blue-400">
              Lucas Puglise de Carvalho
            </span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed"
          >
            Estudante de Ciência da Computação focado em <strong className="text-zinc-200 font-medium">Python</strong>, <strong className="text-zinc-200 font-medium">Banco de Dados</strong> e <strong className="text-zinc-200 font-medium">Inteligência Artificial</strong>.
          </motion.p>
        </div>

        {/* Mobile Social Links */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="flex lg:hidden gap-4 mt-8"
        >
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="p-3 bg-white/5 border border-white/10 rounded-full text-zinc-400 hover:text-white transition-colors">
            <Linkedin size={20} />
          </a>
          <a href="https://github.com" target="_blank" rel="noreferrer" className="p-3 bg-white/5 border border-white/10 rounded-full text-zinc-400 hover:text-white transition-colors">
            <Github size={20} />
          </a>
        </motion.div>

        {/* CV Download Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-10"
        >
          <a 
            href={cvFile} 
            download="LucasPuglise_CV.pdf"
            className="inline-flex items-center gap-2 px-6 py-3 bg-purple-600 hover:bg-purple-500 text-white font-semibold rounded-full shadow-[0_0_20px_rgba(168,85,247,0.4)] hover:shadow-[0_0_30px_rgba(168,85,247,0.6)] transition-all"
          >
            Baixar Currículo
          </a>
        </motion.div>
        
        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-xs uppercase tracking-widest text-zinc-500 font-medium">Role</span>
          <motion.div 
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            className="w-[1px] h-12 bg-gradient-to-b from-purple-500 to-transparent"
          />
        </motion.div>
      </div>
    </section>
  );
}

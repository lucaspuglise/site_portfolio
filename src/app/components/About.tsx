import { motion } from "motion/react";
import { User, BookOpen, Users } from "lucide-react";

export function About() {
  return (
    <section id="sobre-mim" className="py-24 relative">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-2 tracking-tight">Sobre Mim</h2>
          <div className="w-20 h-1 bg-purple-500 rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Main Text Area */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-8 prose prose-invert prose-lg"
          >
            <p className="text-zinc-300 text-lg leading-relaxed mb-6">
              Sou um entusiasta da tecnologia e <strong>estudante do 1º semestre de Ciência da Computação no CEUB</strong>. Minha jornada no desenvolvimento começou com uma curiosidade insaciável sobre como sistemas complexos são construídos, o que me levou a mergulhar nos ecossistemas de dados e inteligência artificial.
            </p>
            <p className="text-zinc-300 text-lg leading-relaxed">
              Além de linhas de código, acredito no poder da comunicação e da empatia. Atuo como <strong>Educador Social Voluntário</strong>, uma experiência que moldou profundamente meu perfil colaborativo. No voluntariado, desenvolvi a <em>escuta ativa</em> e a habilidade essencial de <strong>traduzir informações complexas de forma clara e acessível</strong> para qualquer pessoa, conectando o mundo lógico da tecnologia às necessidades humanas.
            </p>
          </motion.div>

          {/* Highlights Sidebar */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="md:col-span-4 flex flex-col gap-6"
          >
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm">
              <div className="w-10 h-10 rounded-lg bg-purple-500/20 text-purple-400 flex items-center justify-center mb-4">
                <BookOpen size={20} />
              </div>
              <h3 className="text-white font-semibold mb-2">Formação</h3>
              <p className="text-zinc-400 text-sm">Ciência da Computação (1º Semestre)<br/>Centro Universitário de Brasília (CEUB)</p>
            </div>
            
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm">
              <div className="w-10 h-10 rounded-lg bg-blue-500/20 text-blue-400 flex items-center justify-center mb-4">
                <Users size={20} />
              </div>
              <h3 className="text-white font-semibold mb-2">Perfil Colaborativo</h3>
              <p className="text-zinc-400 text-sm">Educador Social Voluntário, focado em escuta ativa e comunicação acessível.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

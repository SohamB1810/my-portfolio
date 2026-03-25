import { motion } from 'framer-motion';
import { BookOpen, ExternalLink, FileText } from 'lucide-react';
import { publications } from '../data/portfolioData';

const Publications = () => {
  return (
    <section id="publications" className="relative w-full bg-[#050505] py-32 overflow-hidden border-t border-white/5">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-red-600/[0.04] blur-[160px] rounded-full" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600/[0.03] blur-[150px] rounded-full" />
      </div>

      <div className="container mx-auto px-6 md:px-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 flex flex-col items-center text-center"
        >
          <div className="w-16 h-16 rounded-3xl bg-white/5 border border-white/10 flex items-center justify-center mb-8 shadow-2xl">
            <BookOpen className="w-8 h-8 text-white" />
          </div>
          <p className="text-[12px] font-bold tracking-[0.5em] text-white/20 uppercase mb-4 italic">Publication</p>
          <h2 className="font-display text-[clamp(3.2rem,8vw,6.5rem)] leading-[0.88] tracking-tighter uppercase text-white">
            Research <br /> <span className="text-white/30">Output</span>
          </h2>
        </motion.div>

        <div className="flex flex-col gap-10">
          {publications.map((publication) => (
            <motion.div
              key={publication.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="rounded-[40px] border border-white/10 bg-white/[0.03] backdrop-blur-2xl overflow-hidden"
            >
              <div className="grid grid-cols-1 xl:grid-cols-[1.4fr_0.9fr]">
                <div className="p-8 md:p-12 lg:p-14">
                  <div className="flex flex-wrap gap-3 mb-8">
                    <span className="px-4 py-2 rounded-full border border-white/10 text-[10px] font-black tracking-[0.25em] uppercase text-white/40">
                      {publication.journal}
                    </span>
                    <span className="px-4 py-2 rounded-full border border-white/10 text-[10px] font-black tracking-[0.25em] uppercase text-white/40">
                      {publication.citation}
                    </span>
                    <span className="px-4 py-2 rounded-full border border-white/10 text-[10px] font-black tracking-[0.25em] uppercase text-white/40">
                      Published {publication.publishedDate}
                    </span>
                  </div>

                  <h3 className="text-3xl md:text-4xl lg:text-5xl font-display text-white leading-[1.05] tracking-tight mb-6">
                    {publication.title}
                  </h3>

                  <p className="text-white/35 text-sm uppercase tracking-[0.25em] font-bold mb-6">
                    {publication.authors.join(' • ')}
                  </p>

                  <p className="text-white/60 text-base leading-relaxed max-w-4xl">
                    {publication.abstract}
                  </p>

                  <div className="mt-10 flex flex-wrap gap-4">
                    <a
                      href={publication.articleUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-6 py-4 rounded-full bg-white text-black text-sm font-black uppercase tracking-[0.15em] hover:bg-white/90 transition-colors"
                    >
                      View Article
                      <ExternalLink className="w-4 h-4" />
                    </a>
                    <a
                      href={publication.pdfUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-6 py-4 rounded-full border border-white/10 text-white/80 text-sm font-black uppercase tracking-[0.15em] hover:bg-white/10 hover:text-white transition-colors"
                    >
                      Open PDF
                      <FileText className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                <div className="border-t xl:border-t-0 xl:border-l border-white/10 bg-black/20 p-8 md:p-12">
                  <div className="rounded-[28px] border border-white/10 bg-[#0a0a0a] p-8 h-full">
                    <p className="text-[11px] font-black uppercase tracking-[0.35em] text-white/20 mb-6">Key Points</p>
                    <div className="space-y-5 mb-10">
                      {publication.highlights.map((point) => (
                        <div key={point} className="flex gap-4">
                          <div className="mt-2 w-2 h-2 rounded-full bg-red-500 shrink-0" />
                          <p className="text-white/55 leading-relaxed">{point}</p>
                        </div>
                      ))}
                    </div>

                    <div className="pt-8 border-t border-white/10">
                      <p className="text-[11px] font-black uppercase tracking-[0.35em] text-white/20 mb-4">Reference</p>
                      <p className="text-white/45 text-sm leading-relaxed">
                        Article ID: {publication.articleId}
                      </p>
                      <p className="text-white/45 text-sm leading-relaxed">
                        Source: {publication.journal}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Publications;

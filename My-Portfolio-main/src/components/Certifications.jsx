import React from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Award, ExternalLink, Sparkles } from 'lucide-react';
import { certifications } from '../data/portfolioData';

const TiltCard = ({ cert, index }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(useTransform(y, [-100, 100], [10, -10]), { stiffness: 400, damping: 30 });
  const rotateY = useSpring(useTransform(x, [-100, 100], [-10, 10]), { stiffness: 400, damping: 30 });

  function onMouseMove(event) {
    const rect = event.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set(event.clientX - centerX);
    y.set(event.clientY - centerY);
  }

  function onMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
      className="group relative flex flex-col rounded-[32px] overflow-hidden border border-white/10 bg-[#0d0d0d] transition-all duration-500 hover:border-white/20 active:scale-[0.98] cursor-pointer"
    >
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-0"
        style={{
          background: `radial-gradient(circle at 50% 50%, ${cert.glow} 0%, transparent 70%)`,
        }}
      />

      <div className="relative aspect-[16/10] overflow-hidden bg-black/40" style={{ transform: 'translateZ(20px)' }}>
        {cert.certImage ? (
          <motion.img
            src={cert.certImage}
            alt={cert.title}
            loading="lazy"
            className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105 group-hover:brightness-110"
          />
        ) : (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-white/5 to-white/[0.02] p-8">
            <div className="w-20 h-20 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-4 p-4">
              <img src={cert.logo} alt="" className="w-full h-full object-contain opacity-70" />
            </div>
            <p className="text-[10px] uppercase tracking-widest text-white/20 font-bold italic">Preview Not Available</p>
          </div>
        )}

        <div className="absolute top-4 right-4 z-20" style={{ transform: 'translateZ(30px)' }}>
          <span className="text-[10px] font-bold text-white tracking-widest uppercase py-1 px-4 border border-white/10 rounded-full bg-black/60 backdrop-blur-md shadow-lg">
            {cert.date}
          </span>
        </div>

        <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d] via-transparent to-transparent opacity-95 z-10" />
      </div>

      <div className="relative p-8 pt-0 flex-1 flex flex-col justify-between z-20" style={{ transform: 'translateZ(15px)' }}>
        <div>
          <div className="flex items-center gap-4 mb-5">
            <div className="relative w-11 h-11 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center p-2.5 group-hover:bg-white/10 transition-all duration-500 overflow-hidden shadow-2xl">
              <img src={cert.logo} alt={cert.issuer} className="w-full h-full object-contain brightness-110" />
            </div>
            <p className="text-[10px] font-bold tracking-[0.3em] text-white/30 uppercase group-hover:text-blue-400 transition-colors italic">{cert.issuer}</p>
          </div>

          <h3 className="text-xl md:text-2xl font-display font-bold text-white leading-tight mb-4 group-hover:text-blue-400 transition-colors tracking-tight">
            {cert.title}
          </h3>

          <p className="text-white/40 text-[13px] leading-relaxed line-clamp-3 group-hover:text-white/60 transition-colors">
            {cert.description}
          </p>
        </div>

        <div className="mt-8 flex gap-3">
          {cert.viewUrl ? (
            <a
              href={cert.viewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group/btn flex-1 flex items-center justify-center gap-3 py-4 rounded-2xl bg-white text-black text-xs font-bold hover:bg-white/90 transition-all duration-300 shadow-xl shadow-black/40 relative overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                Verify Credentials
                <ExternalLink className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
              </span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent -translate-x-full"
                initial={{ x: '-100%' }}
                whileHover={{ x: '100%' }}
                transition={{ duration: 0.6 }}
              />
            </a>
          ) : (
            <div className="flex-1 flex items-center justify-center py-4 rounded-2xl border border-white/10 bg-white/[0.03] text-xs font-bold uppercase tracking-[0.2em] text-white/35">
              CV-listed Certification
            </div>
          )}
        </div>
      </div>

      {cert.certImage && (
        <div className="absolute top-4 left-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Sparkles className="w-4 h-4 text-blue-400 animate-pulse" />
        </div>
      )}

      <div className="absolute inset-0 border border-white/0 group-hover:border-white/10 rounded-[32px] transition-colors pointer-events-none" />
    </motion.div>
  );
};

const Certifications = () => {
  return (
    <section id="certifications" className="relative w-full bg-[#080808] py-32 overflow-hidden border-t border-white/5">
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.03, 0.06, 0.03],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-0 -left-1/4 w-full h-full bg-blue-600/5 blur-[180px] rounded-full pointer-events-none"
      />

      <div className="container mx-auto px-6 md:px-16">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="mb-24 flex flex-col items-center text-center"
        >
          <motion.div
            initial={{ scale: 0, rotate: -20 }}
            whileInView={{ scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 200, damping: 20 }}
            className="w-16 h-16 rounded-3xl bg-white/5 border border-white/10 flex items-center justify-center mb-8 shadow-2xl shadow-blue-500/10 backdrop-blur-2xl"
          >
            <Award className="w-8 h-8 text-white" />
          </motion.div>
          <p className="text-[13px] font-bold tracking-[0.5em] text-white/20 uppercase mb-5 italic">Certificates & Badges</p>
          <h2 className="font-display text-[clamp(4rem,9vw,7.5rem)] leading-[0.85] tracking-tighter uppercase text-white">
            Verified <br /> <span className="text-white/30">Credentials</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {certifications.map((cert, index) => (
            <TiltCard key={cert.id} cert={cert} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;

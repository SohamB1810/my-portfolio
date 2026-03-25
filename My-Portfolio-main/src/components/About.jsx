import { motion } from 'framer-motion';
import { User } from 'lucide-react';
import { aboutText } from '../data/portfolioData';

const About = () => {
  const words = aboutText.split(' ');

  return (
    <section id="about" className="relative w-full bg-background py-32 md:py-40 px-8 md:px-16 overflow-hidden">
      <div className="max-w-[1200px] w-full mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 flex flex-col items-start"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ type: 'spring', stiffness: 260, damping: 20 }}
            className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6"
          >
            <User className="w-6 h-6 text-white" />
          </motion.div>
          <p className="text-[12px] font-medium tracking-[0.2em] text-[#999999] uppercase mb-3">Who I Am</p>
          <h2 className="font-display text-[clamp(2.5rem,6vw,5rem)] leading-[0.9] tracking-tighter uppercase text-white">About Me</h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.03,
              },
            },
          }}
          className="flex flex-col gap-0 items-start justify-center max-w-5xl"
        >
          <p className="text-white font-sans text-[20px] md:text-[26px] lg:text-[28px] leading-[1.45] font-normal tracking-tight flex flex-wrap gap-x-[0.3em]">
            {words.map((word, i) => (
              <motion.span
                key={i}
                variants={{
                  hidden: { opacity: 0.12, y: 8 },
                  visible: { opacity: 1, y: 0 },
                }}
                className="inline-block will-change-transform"
              >
                {word}
              </motion.span>
            ))}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

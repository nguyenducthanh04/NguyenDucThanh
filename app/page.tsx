"use client";

import Hero from '@/components/hero';
import Experience from '@/components/experience';
// import Achievements from '@/components/achievements';
import Projects from '@/components/projects';
import Contact from '@/components/contact';
import { FadeUp } from '@/components/animations';
import { motion } from 'framer-motion';
import { useTranslation } from "@/lib/language-provider";

export default function Home() {
  const { t } = useTranslation();
  
  return (
    <div className="container mx-auto px-4 py-8">
      <motion.section 
        id="home" 
        className="py-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <Hero />
      </motion.section>
      
      <FadeUp delay={0.1}>
        <section id="experience" className="py-16">
          <h2 className="text-3xl font-bold mb-10 text-center">{t.workExperience}</h2>
          <Experience />
        </section>
      </FadeUp>
      
      {/* Commented out achievements section
      <FadeUp delay={0.2}>
        <section id="achievements" className="py-16 bg-muted/50 -mx-4 px-4">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-10 text-center">Achievements & Activities</h2>
            <Achievements />
          </div>
        </section>
      </FadeUp>
      */}
      
      <FadeUp delay={0.3}>
        <section id="projects" className="py-16">
          <h2 className="text-3xl font-bold mb-10 text-center">{t.projectsTitle}</h2>
          <Projects />
        </section>
      </FadeUp>
      
      <FadeUp delay={0.4}>
        <section id="contact" className="py-16 bg-muted/50 -mx-4 px-4">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-10 text-center">{t.getInTouch}</h2>
            <Contact />
          </div>
        </section>
      </FadeUp>
    </div>
  );
}
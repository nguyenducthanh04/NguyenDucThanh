"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useTranslation } from "@/lib/language-provider";

const experiences = [
  {
    id: 1,
    company: "Tech Company Inc.",
    position: "Senior Software Developer",
    period: "Jan 2022 - Present",
    description: "Led the development of a customer-facing web application that increased user engagement by 40%. Collaborated with cross-functional teams to implement new features and improve existing functionality.",
    skills: ["React", "TypeScript", "Node.js", "AWS"]
  },
  {
    id: 2,
    company: "Digital Solutions Ltd.",
    position: "Frontend Developer",
    period: "Mar 2020 - Dec 2021",
    description: "Developed responsive web interfaces for various client projects. Implemented modern frontend practices and optimized application performance, resulting in a 25% improvement in load times.",
    skills: ["JavaScript", "React", "CSS", "Webpack"]
  },
  {
    id: 3,
    company: "Startup Innovations",
    position: "Junior Web Developer",
    period: "Jun 2018 - Feb 2020",
    description: "Assisted in the development of web applications and maintained existing codebases. Participated in code reviews and implemented UI components based on design specifications.",
    skills: ["HTML", "CSS", "JavaScript", "jQuery"]
  }
];

export default function Experience() {
  const { t } = useTranslation();
  
  return (
    <div className="space-y-8">
      {experiences.map((exp, index) => {
        const [ref, inView] = useInView({
          triggerOnce: true,
          threshold: 0.1,
        });
        
        return (
          <motion.div 
            key={exp.id} 
            className="relative pl-8 md:pl-0"
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ 
              duration: 0.5, 
              delay: index * 0.2,
              ease: "easeOut"
            }}
          >
            {/* Timeline connector */}
            {index < experiences.length - 1 && (
              <motion.div 
                className="absolute left-4 top-8 bottom-0 w-0.5 bg-border md:left-1/2"
                initial={{ height: 0 }}
                animate={inView ? { height: "100%" } : { height: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
              />
            )}
            
            <div className={`md:flex items-center ${index % 2 === 0 ? '' : 'md:flex-row-reverse'}`}>
              {/* Timeline dot */}
              <motion.div 
                className="absolute left-0 top-6 h-8 w-8 rounded-full border-4 border-background bg-primary md:relative md:left-auto md:top-auto md:mx-4"
                initial={{ scale: 0 }}
                animate={inView ? { scale: 1 } : { scale: 0 }}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.2 + 0.3,
                  type: "spring",
                  stiffness: 200
                }}
              />
              
              {/* Content */}
              <motion.div 
                className={`md:w-1/2 ${index % 2 === 0 ? 'md:text-right md:pr-8' : 'md:pl-8'}`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.2 + 0.2,
                  ease: "easeOut"
                }}
              >
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <Card>
                    <CardHeader>
                      <CardTitle>{exp.position}</CardTitle>
                      <CardDescription>{exp.company} | {exp.period}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">{exp.description}</p>
                      <div className={`flex flex-wrap gap-2 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                        {exp.skills.map((skill) => (
                          <Badge key={skill} variant="outline">{skill}</Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </motion.div>
              
              {/* Empty space for alternating layout */}
              <div className="hidden md:block md:w-1/2" />
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
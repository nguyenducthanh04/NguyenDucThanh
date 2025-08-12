"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Github, Facebook, Instagram } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useTranslation } from "@/lib/language-provider";
import Avatar from "../assets/images/avatar.jpg";

export default function Hero() {
  const { t } = useTranslation();

  const skills = [
    "JavaScript", "TypeScript", "React", "Next.js", 
    "Node.js", "Tailwind CSS", "UI/UX Design", "Git"
  ];

  return (
    <div className="flex justify-center">
    <div className="flex flex-col-reverse md:flex-row items-center gap-8 md:gap-16">
      <motion.div 
        className="flex-1 space-y-6"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div>
          <motion.h1 
            className="text-4xl md:text-5xl font-bold tracking-tight mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {t.greeting} <span className="text-green-600">{t.name}</span>
          </motion.h1>
          <motion.p 
            className="mt-2 text-xl text-muted-foreground"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            {t.role}
          </motion.p>
        </div>
        
        <motion.p 
          className="text-lg text-muted-foreground"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
         {t.bio}
        </motion.p>
        <motion.div 
          className="flex flex-wrap gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.2 }}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button asChild>
              <Link href="#contact">
                {t.contactMe} <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button variant="outline" asChild>
              <Link href="#projects">{t.viewProjects}</Link>
            </Button>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="flex items-center gap-4 pt-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.4 }}
        >
          <motion.div whileHover={{ scale: 1.2, rotate: 5 }}>
            <Link href="https://github.com/nguyenducthanh04" target="_blank" rel="noopener noreferrer">
              <Github className="h-6 w-6 text-muted-foreground hover:text-foreground transition-colors" />
            </Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.2, rotate: 5 }}>
            <Link href="https://www.facebook.com/profile.php?id=100029011241481" target="_blank" rel="noopener noreferrer">
              <Facebook className="h-6 w-6 text-muted-foreground hover:text-foreground transition-colors" />
            </Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.2, rotate: 5 }}>
            <Link href="https://www.instagram.com/duwcs.thanh/" target="_blank" rel="noopener noreferrer">
              <Instagram className="h-6 w-6 text-muted-foreground hover:text-foreground transition-colors" />
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>
      
      <motion.div
        className="relative w-48 h-48 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-primary/20"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        whileHover={{ scale: 1.05, borderColor: "hsl(var(--primary))" }}
      >
        <Image 
          src={Avatar} 
          alt="Profile" 
          fill
          className="object-cover"
          priority
        />
      </motion.div>
    </div>
    </div>
  );
}
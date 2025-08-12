"use client";

import { Award, Trophy, Medal, BookOpen, Users, Calendar } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { StaggerContainer, StaggerItem } from "@/components/animations";
import { motion } from "framer-motion";

const achievements = [
  {
    id: 1,
    title: "Best Web Application Award",
    description: "Received recognition for developing an innovative web application at the Annual Tech Conference.",
    year: "2023",
    icon: Trophy
  },
  {
    id: 2,
    title: "Certified Web Developer",
    description: "Earned professional certification in advanced web development technologies and best practices.",
    year: "2022",
    icon: Award
  },
  {
    id: 3,
    title: "Hackathon Winner",
    description: "First place in the 48-hour coding challenge, building a solution for environmental sustainability.",
    year: "2021",
    icon: Medal
  }
];

const activities = [
  {
    id: 1,
    title: "Tech Conference Speaker",
    description: "Presented on 'Modern Frontend Architecture' at the Regional Developer Conference.",
    year: "2023",
    icon: Users
  },
  {
    id: 2,
    title: "Open Source Contributor",
    description: "Active contributor to several open-source projects, focusing on UI component libraries.",
    year: "2022-Present",
    icon: BookOpen
  },
  {
    id: 3,
    title: "Coding Workshop Instructor",
    description: "Conducted monthly workshops teaching web development to beginners in the local community.",
    year: "2021-2022",
    icon: Calendar
  }
];

export default function Achievements() {
  return (
    <div className="grid gap-8 md:grid-cols-2">
      <div className="space-y-6">
        <motion.h3 
          className="text-2xl font-semibold"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Awards & Certifications
        </motion.h3>
        <StaggerContainer className="grid gap-4">
          {achievements.map((item) => {
            const Icon = item.icon;
            return (
              <StaggerItem key={item.id}>
                <motion.div
                  whileHover={{ scale: 1.03, y: -5 }}
                  transition={{ duration: 0.2 }}
                >
                  <Card>
                    <CardHeader className="flex flex-row items-center gap-4 pb-2">
                      <motion.div 
                        className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center"
                        whileHover={{ 
                          backgroundColor: "hsl(var(--primary)/0.2)",
                          rotate: 5
                        }}
                      >
                        <Icon className="h-6 w-6 text-primary" />
                      </motion.div>
                      <div>
                        <CardTitle className="text-xl">{item.title}</CardTitle>
                        <CardDescription>{item.year}</CardDescription>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{item.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
      
      <div className="space-y-6">
        <motion.h3 
          className="text-2xl font-semibold"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Activities & Involvement
        </motion.h3>
        <StaggerContainer className="grid gap-4" delay={0.2}>
          {activities.map((item) => {
            const Icon = item.icon;
            return (
              <StaggerItem key={item.id}>
                <motion.div
                  whileHover={{ scale: 1.03, y: -5 }}
                  transition={{ duration: 0.2 }}
                >
                  <Card>
                    <CardHeader className="flex flex-row items-center gap-4 pb-2">
                      <motion.div 
                        className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center"
                        whileHover={{ 
                          backgroundColor: "hsl(var(--primary)/0.2)",
                          rotate: 5
                        }}
                      >
                        <Icon className="h-6 w-6 text-primary" />
                      </motion.div>
                      <div>
                        <CardTitle className="text-xl">{item.title}</CardTitle>
                        <CardDescription>{item.year}</CardDescription>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{item.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </div>
  );
}
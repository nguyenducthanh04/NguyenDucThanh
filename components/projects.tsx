"use client";

import Image from "next/image";
import Link from "next/link";
import { ExternalLink, Github } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { StaggerContainer, StaggerItem, HoverCard } from "@/components/animations";
import { useTranslation } from "@/lib/language-provider";

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-featured online shopping platform with product catalog, cart functionality, and secure checkout process.",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3",
    technologies: ["React", "Node.js", "MongoDB", "Stripe API"],
    demoLink: "https://example.com/demo",
    githubLink: "https://github.com/yourusername/ecommerce"
  },
  {
    id: 2,
    title: "Task Management App",
    description: "A productivity application that helps users organize tasks, set priorities, and track progress with intuitive UI.",
    image: "https://images.unsplash.com/photo-1540350394557-8d14678e7f91?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3",
    technologies: ["React", "Redux", "Firebase", "Material UI"],
    demoLink: "https://example.com/demo",
    githubLink: "https://github.com/yourusername/taskmanager"
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description: "Real-time weather information application with location-based forecasts, historical data, and interactive maps.",
    image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3",
    technologies: ["JavaScript", "OpenWeather API", "Chart.js", "Leaflet"],
    demoLink: "https://example.com/demo",
    githubLink: "https://github.com/yourusername/weather"
  },
  {
    id: 4,
    title: "Portfolio Website",
    description: "A personal portfolio website showcasing projects, skills, and professional experience with a modern design.",
    image: "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3",
    technologies: ["Next.js", "Tailwind CSS", "Framer Motion", "Vercel"],
    demoLink: "https://example.com/demo",
    githubLink: "https://github.com/yourusername/portfolio"
  }
];

export default function Projects() {
  const { t } = useTranslation();
  
  return (
    <StaggerContainer className="grid gap-6 md:grid-cols-2" staggerChildren={0.15}>
      {projects.map((project) => (
        <StaggerItem key={project.id}>
          <HoverCard className="h-full">
            <Card className="overflow-hidden flex flex-col h-full">
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription className="flex flex-wrap gap-2 pt-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary">{tech}</Badge>
                  ))}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-muted-foreground">{project.description}</p>
              </CardContent>
              <CardFooter className="flex gap-2">
                <Button variant="outline" size="sm" asChild className="transition-all hover:bg-primary hover:text-primary-foreground">
                  <Link href={project.demoLink} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    {t.liveDemo}
                  </Link>
                </Button>
                <Button variant="outline" size="sm" asChild className="transition-all hover:bg-primary hover:text-primary-foreground">
                  <Link href={project.githubLink} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" />
                    {t.code}
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </HoverCard>
        </StaggerItem>
      ))}
    </StaggerContainer>
  );
}
"use client";

import Image from "next/image";
import Link from "next/link";
import { ExternalLink, Github } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { StaggerContainer, StaggerItem, HoverCard } from "@/components/animations";
import { useTranslation } from "@/lib/language-provider";
import WatchMovies from "../assets/images/watch_movies.png";
import SmartHome from "../assets/images/Smart_home.jpg";
import ManageClass from "../assets/images/Manage_Class.png";
import NewsApp from "../assets/images/news_app.jpg";

const projects = [
  {
    id: 1,
    title: "Watch Movies",
    description: "Build a website that can let people watch movies for free, updated continuously.",
    image: WatchMovies,
    technologies: ["React"],
    demoLink: "https://ndthah.vercel.app/",
    githubLink: "https://github.com/nguyenducthanh04/ndt-profile"
  },
  {
    id: 2,
    title: "SmartHome",
    description: "The smart home system integrates modern features such as opening the door by scanning the face and magnetic card, warning of gas leaks with sirens, LED lights, automatically opening windows and sending notification messages to Pushover, and automatically turning on lights with light sensors.",
    image: SmartHome,
    technologies: ["C++", "Python", "Arduino", "Pushover"],
    demoLink: "",
    githubLink: "https://github.com/nguyenducthanh04/Thiet-Ke-Nha-Thong-Minh"
  },
  {
    id: 3,
    title: "Manage Class",
    description: "Offline classroom management project.",
    image: ManageClass,
    technologies: ["JavaScript", "Express.js", "MySql", "HTML", "Bootstrap"],
    demoLink: "",
    githubLink: "https://github.com/nguyenducthanh04/Project-Thanh-Backend-k1"
  },
  {
    id: 4,
    title: "News App",
    description: "Application allows users to view news and read newspapers.",
    image: NewsApp,
    technologies: ["Flutter", "FireBase"],
    demoLink: "",
    githubLink: "https://github.com/nguyenducthanh04/news_app"
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
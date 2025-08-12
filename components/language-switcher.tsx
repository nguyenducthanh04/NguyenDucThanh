"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useLanguageStore, type Language } from "@/lib/i18n";
import { motion } from "framer-motion";

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguageStore();
  const [mounted, setMounted] = useState(false);
  
  // Only show the UI after hydration to prevent hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);
  
  if (!mounted) {
    return (
      <Button variant="ghost" size="icon" className="uppercase">
        EN
      </Button>
    );
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="uppercase">
          {language}
          <span className="sr-only">Switch language</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setLanguage("en")}>
          <motion.div
            whileHover={{ x: 5 }}
            className="flex items-center"
          >
            English
          </motion.div>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setLanguage("vi")}>
          <motion.div
            whileHover={{ x: 5 }}
            className="flex items-center"
          >
            Tiếng Việt
          </motion.div>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setLanguage("zh")}>
          <motion.div
            whileHover={{ x: 5 }}
            className="flex items-center"
          >
            繁體中文
          </motion.div>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
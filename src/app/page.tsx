"use client";

import { DynamicSubtitle } from "@/components/dynamic-subtitle";
import { DynamicTitle } from "@/components/dynamic-title";
import { ThemeToggle } from "@/components/theme/theme-toggle";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { Github, Linkedin } from "lucide-react";
import Link from "next/link";

export default function Page() {
  return (
    <div className="min-h-screen flex flex-col justify-between p-6 max-w-[1600px] m-auto">
      <div>
        <div className="flex justify-between mb-6">
          <div className="flex items-center gap-2">
            <Avatar>
              <AvatarImage src="https://avatars.githubusercontent.com/u/47341160?v=4" />
              <AvatarFallback>DP</AvatarFallback>
            </Avatar>
            <span>Oi, eu sou Davi Pessoa👋</span>
          </div>
          <ThemeToggle />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2">
          <main className="my-8 md:my-0 min-h-[120px]">
            <DynamicTitle />
            <DynamicSubtitle />
          </main>
          <aside></aside>
        </div>
      </div>

      <footer className="flex justify-between">
        <div className="flex gap-2">
          <Link
            href="https://www.linkedin.com/in/davipessoa93/"
            target="_blank"
            className="hover:text-muted-foreground"
          >
            <Linkedin className="h-5 w-5" />
          </Link>
          <Link
            href="https://github.com/davipess93"
            target="_blank"
            className="hover:text-muted-foreground"
          >
            <Github className="h-5 w-5" />
          </Link>
        </div>

        <Link
          href="https://wa.me/5586998164238?text=Oi,%20Davi!%20Vi%20seu%20portfólio%20e%20curti%20bastante!%20Bora%20conversar?"
          target="_blank"
          className="underline hover:text-muted-foreground"
        >
          Vamos trabalhar juntos?
        </Link>
      </footer>
    </div>
  );
}

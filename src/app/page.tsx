import { ThemeToggle } from "@/components/theme/theme-toggle";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Github, Linkedin } from "lucide-react";
import Link from "next/link";

export default function Page() {
  return (
    <div className="min-h-screen flex flex-col p-4">
      <div className="flex justify-between">
        <div className="flex items-center gap-2">
          <Avatar>
            <AvatarImage src="https://avatars.githubusercontent.com/u/47341160?v=4" />
            <AvatarFallback>DP</AvatarFallback>
          </Avatar>
          <span>Oi, eu sou Davi Pessoa👋</span>
        </div>
        <ThemeToggle />
      </div>

      <div className="flex-1 grid grid-cols-1 md:grid-cols-2">
        <main></main>
        <aside></aside>
      </div>

      <footer className="flex justify-between"></footer>
    </div>
  );
}

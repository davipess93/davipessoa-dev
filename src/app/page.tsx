import { ThemeToggle } from "@/components/theme/theme-toggle";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Page() {
  return (
    <div className="flex items-center justify-between p-4">
      <div className="flex items-center gap-2">
        <Avatar>
          <AvatarImage src="https://avatars.githubusercontent.com/u/47341160?v=4" />
          <AvatarFallback>DP</AvatarFallback>
        </Avatar>
        <span>Oi, eu sou Davi Pessoa👋</span>
      </div>
      <ThemeToggle />
    </div>
  );
}

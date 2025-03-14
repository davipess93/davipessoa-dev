import { DynamicSubtitle } from "@/components/dynamic-subtitle";
import { DynamicTitle } from "@/components/dynamic-title";
import { Footer } from "@/components/footer";
import { ThemeToggle } from "@/components/theme/theme-toggle";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

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

      <Footer />
    </div>
  );
}

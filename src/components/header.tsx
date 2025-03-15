import { ThemeToggle } from './theme/theme-toggle'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'

export function Header() {
  return (
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
  )
}

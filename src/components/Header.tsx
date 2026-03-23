import { Button } from "@/components/ui/button"
import { ArrowUpRight } from "lucide-react"

const CDN_BASE = "https://cdn.poehali.dev/templates/meet-jack"

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/0 backdrop-blur-sm">
      <div className="flex items-center justify-between px-6 py-4 text-transparent">
        <div className="flex items-center gap-3">
          <img src="https://cdn.poehali.dev/projects/38cebce4-482e-4638-afce-18fbedac604c/bucket/fbbef979-ee24-4d0c-b124-72c4cd41106b.jpg" alt="Сповик" width={48} height={48} className="h-12 w-12 object-contain rounded-lg" />
          <span className="text-foreground font-bold text-lg tracking-wide" style={{ fontFamily: "var(--font-montserrat)" }}>Сповик</span>
        </div>

        <div className="flex items-center gap-2">
          <a href="#contact">
            <Button
              className="bg-primary text-primary-foreground rounded-full px-6 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_hsl(var(--primary)/0.5)]"
              style={{ paddingLeft: "24px", paddingRight: "16px" }}
            >
              Попробовать викторину <ArrowUpRight className="ml-1 h-4 w-4" />
            </Button>
          </a>
        </div>
      </div>
    </header>
  )
}
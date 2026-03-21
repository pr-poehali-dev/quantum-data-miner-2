export default function HeroTextOverlay() {
  return (
    <div className="absolute top-30 md:top-48 left-8 z-10">
      <h1
        className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-wider mb-3.5 opacity-100"
        style={{
          fontFamily: "var(--font-montserrat)",
          color: "rgb(0, 0, 0)",
          WebkitTextStroke: "5px white",
          paintOrder: "stroke fill",
        }}
      >
        КВИЗУЛЯ
      </h1>
      <p className="text-foreground font-mono text-sm md:text-base max-w-sm tracking-wide lg:text-base leading-relaxed">
        Спорт в вопросах и ответах!
        <br />
        Вопросы о футболе и хоккее — это не просто факты. Это эхо стадионов, шёпот рекордов, энергия мгновений, изменивших игру. Открой для себя глубину спорта: где каждый ответ — ступень к пониманию его души.
      </p>
    </div>
  )
}
import SplineScene from "@/components/SplineScene"
import Header from "@/components/Header"
import RotatingTextAccent from "@/components/RotatingTextAccent"
import Footer from "@/components/Footer"
import HeroTextOverlay from "@/components/HeroTextOverlay"

const CDN_BASE = "https://cdn.poehali.dev/templates/meet-jack"

const Index = () => {
  return (
    <div className="w-full min-h-screen py-0 bg-background">
      <div className="max-w-[1200px] mx-auto">
        <main className="w-full relative h-[600px]">
          <Header />
          <SplineScene />
          <HeroTextOverlay />
          <RotatingTextAccent />
        </main>

        <section
          className="relative rounded-4xl py-7 mx-4 md:mx-0 w-[calc(100%-2rem)] md:w-full bg-card border border-solid border-border pb-20"
          style={{
            backgroundImage: `
              linear-gradient(var(--border) 1px, transparent 1px),
              linear-gradient(90deg, var(--border) 1px, transparent 1px)
            `,
            backgroundSize: "40px 40px",
          }}
        >
          <div className="absolute top-8 left-8 text-foreground opacity-50 text-5xl font-extralight font-sans leading-[0rem]">
            +
          </div>
          <div className="absolute top-8 right-8 text-foreground opacity-50 text-5xl font-sans leading-[0] font-extralight">
            +
          </div>
          <div className="absolute bottom-8 left-8 text-foreground opacity-50 text-5xl font-sans font-extralight">
            +
          </div>
          <div className="absolute bottom-8 right-8 text-foreground opacity-50 text-5xl font-sans font-extralight">
            +
          </div>

          <div className="px-6 md:px-40">
            <div className="flex items-center justify-center mb-3.5 md:gap-11">
              <div className="flex flex-col items-center">
                <img src={`${CDN_BASE}/jack-front.png`} alt="Макс спереди" className="w-48 h-48 md:w-56 md:h-56 object-contain" />
              </div>

              <div className="flex flex-col items-center">
                <img src={`${CDN_BASE}/jack-side.png`} alt="Макс сбоку" className="w-48 h-48 md:w-56 md:h-56 object-contain" />
              </div>

              <div className="flex flex-col items-center">
                <img src={`${CDN_BASE}/jack-back.png`} alt="Макс сзади" className="w-48 h-48 md:w-56 md:h-56 object-contain" />
              </div>
            </div>

            <div className="flex flex-col gap-2 max-w-5xl">
              <div className="flex items-center gap-4">
                <span className="text-accent font-mono text-sm">Тема</span>
                <span className="text-foreground font-mono text-sm">Футбол и Хоккей</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-accent font-mono text-sm">Формат</span>
                <span className="text-foreground font-mono text-sm">Интерактивные спортивные квизы</span>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-accent font-mono text-sm">Миссия</span>
                <span className="text-foreground font-mono text-sm">
                  Проверь, насколько хорошо ты знаешь спорт. Вопросы о легендах, матчах и рекордах — для настоящих фанатов.
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Выгоды для заказчиков — владельцев спорт-баров */}
        <section className="px-4 md:px-0 mt-6">
          <div className="rounded-4xl bg-card border border-border px-8 md:px-16 py-12">
            <p className="text-accent font-mono text-sm mb-3 tracking-widest uppercase">Для владельцев спорт-баров</p>
            <h2
              className="text-foreground text-3xl md:text-4xl font-bold mb-10 leading-tight"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              Квиз = больше гостей,<br />выше выручка
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  icon: "📈",
                  title: "Рост среднего чека",
                  desc: "Гости остаются дольше во время квиза — заказывают больше. В среднем средний чек вечера квиза выше на 30–40%.",
                },
                {
                  icon: "🔁",
                  title: "Постоянные гости",
                  desc: "Квиз превращает случайных посетителей в постоянных. Люди возвращаются каждую неделю за новыми вопросами.",
                },
                {
                  icon: "📣",
                  title: "Сарафанное радио",
                  desc: "Команды зовут друзей, делятся результатами — бар получает бесплатную рекламу через соцсети и рекомендации.",
                },
                {
                  icon: "🗓️",
                  title: "Заполненные будни",
                  desc: "Квизы легко проводить в непиковые дни. Даже пустой вторник превращается в полный зал.",
                },
                {
                  icon: "🏆",
                  title: "Уникальное событие",
                  desc: "Спортивный квиз — это повод прийти именно к вам, а не к конкурентам. Выделяйтесь на фоне обычных трансляций.",
                },
                {
                  icon: "⚙️",
                  title: "Под ключ",
                  desc: "Мы берём на себя все вопросы, сценарий и ведение. От вас — только зал и желание зарабатывать больше.",
                },
              ].map((item) => (
                <div key={item.title} className="bg-background rounded-2xl p-6 border border-border flex flex-col gap-3">
                  <span className="text-3xl">{item.icon}</span>
                  <h3 className="text-foreground font-semibold text-base" style={{ fontFamily: "var(--font-montserrat)" }}>
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground font-mono text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Польза для гостей */}
        <section className="px-4 md:px-0 mt-6 mb-6">
          <div className="rounded-4xl border border-border px-8 md:px-16 py-12"
            style={{
              backgroundImage: `linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)`,
              backgroundSize: "40px 40px",
            }}
          >
            <p className="text-accent font-mono text-sm mb-3 tracking-widest uppercase">Для гостей бара</p>
            <h2
              className="text-foreground text-3xl md:text-4xl font-bold mb-10 leading-tight"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              Докажи, что ты<br />настоящий фанат
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  icon: "⚽",
                  title: "Футбол и хоккей",
                  desc: "Вопросы о легендарных матчах, рекордах, игроках — от советской классики до современных чемпионатов.",
                },
                {
                  icon: "🤝",
                  title: "Командная игра",
                  desc: "Собирай команду с друзьями до 6 человек и соревнуйтесь с другими столиками в живом формате.",
                },
                {
                  icon: "🎁",
                  title: "Призы победителям",
                  desc: "Лучшие команды получают призы от бара — напитки, сертификаты и другие приятные бонусы.",
                },
                {
                  icon: "🧠",
                  title: "Азарт и кайф",
                  desc: "Квиз — это не просто просмотр трансляции. Живой азарт, споры за столом и настоящий командный дух.",
                },
              ].map((item) => (
                <div key={item.title} className="flex gap-5 items-start">
                  <span className="text-4xl mt-1">{item.icon}</span>
                  <div>
                    <h3 className="text-foreground font-semibold text-base mb-1" style={{ fontFamily: "var(--font-montserrat)" }}>
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground font-mono text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

      </div>
      <Footer />
    </div>
  )
}

export default Index
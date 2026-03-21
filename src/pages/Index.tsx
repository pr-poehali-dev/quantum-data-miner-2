import SplineScene from "@/components/SplineScene"
import Header from "@/components/Header"
import RotatingTextAccent from "@/components/RotatingTextAccent"
import Footer from "@/components/Footer"
import HeroTextOverlay from "@/components/HeroTextOverlay"
import { useState } from "react"

const CDN_BASE = "https://cdn.poehali.dev/templates/meet-jack"

function ContactForm() {
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSent(true)
  }

  const inputClass =
    "w-full bg-background border border-border rounded-xl px-4 py-3 text-foreground font-mono text-sm outline-none focus:border-primary transition-colors placeholder:text-muted-foreground"

  return (
    <div
      className="rounded-4xl px-8 md:px-16 py-12 border border-primary/30 relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, hsl(82 85% 50% / 0.08) 0%, hsl(0 0% 7%) 60%)",
      }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(ellipse at 80% 20%, hsl(82 85% 50% / 0.12) 0%, transparent 60%)`,
        }}
      />
      <div className="relative z-10 flex flex-col md:flex-row gap-12 items-center">
        <div className="flex-1">
          <h2
            className="text-foreground text-3xl md:text-4xl font-bold mb-4 leading-tight"
            style={{ fontFamily: "var(--font-montserrat)" }}
          >
            Хотите квиз?
          </h2>
          <p className="text-muted-foreground font-mono text-sm">Оставьте контакт — мы свяжемся и всё расскажем.</p>
        </div>

        <div className="flex-1 w-full">
          {sent ? (
            <div className="flex flex-col items-center justify-center h-full gap-4 py-6 text-center">
              <span className="text-5xl">🏆</span>
              <h3 className="text-foreground font-bold text-xl" style={{ fontFamily: "var(--font-montserrat)" }}>
                Заявка отправлена!
              </h3>
              <p className="text-muted-foreground font-mono text-sm">Мы свяжемся с вами в ближайшее время.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <input
                className={inputClass}
                placeholder="Ваше имя"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <input
                className={inputClass}
                placeholder="Телефон или Telegram"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
              <button
                type="submit"
                className="w-full py-4 rounded-xl font-bold text-base transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_30px_hsl(82_85%_50%/0.4)]"
                style={{
                  background: "linear-gradient(135deg, hsl(82 85% 55%), hsl(82 85% 40%))",
                  color: "hsl(0 0% 5%)",
                  fontFamily: "var(--font-montserrat)",
                }}
              >
                Хочу квиз →
              </button>
              <p className="text-muted-foreground font-mono text-xs text-center">
                Нажимая кнопку, вы соглашаетесь на обработку персональных данных
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}

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

            <div className="flex flex-col gap-6 max-w-5xl">
              <div>
                <p className="text-accent font-mono text-sm mb-2 tracking-widest uppercase">Миссия компании</p>
                <p className="text-foreground font-mono text-sm leading-relaxed">
                  Наша миссия — популяризировать спорт через увлекательные интерактивные форматы, вдохновлять новые поколения на достижение спортивных высот и сохранять память о великих спортсменах, значимых событиях в мире футбола и хоккея. Мы создаём квизы, которые объединяют людей разных возрастов, пробуждают интерес к спорту, показывают примеры выдающихся достижений и мотивируют стремиться к собственным рекордам.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                {[
                  { label: "Вдохновение", desc: "Зажигаем искру спортивного духа: напоминаем о великих победах прошлого и помогаем поверить в собственные силы." },
                  { label: "Образование через развлечение", desc: "Наши квизы учат, не превращаясь в уроки: факты о спорте запоминаются легко и надолго." },
                  { label: "Связь поколений", desc: "Мы объединяем опыт легенд спорта и энергию молодых талантов, создавая мост между прошлым и будущим." },
                  { label: "Доступность", desc: "Квизы подходят для любого уровня подготовки: от новичка до эксперта." },
                  { label: "Сообщество", desc: "Мы объединяем людей, которые любят спорт и ценят его историю." },
                ].map((v) => (
                  <div key={v.label} className="flex items-start gap-3">
                    <span className="text-accent mt-0.5 font-mono text-sm shrink-0">—</span>
                    <div>
                      <span className="text-accent font-mono text-sm">{v.label}. </span>
                      <span className="text-foreground font-mono text-sm">{v.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Выгоды для заказчиков — владельцев спорт-баров */}
        <section className="px-4 md:px-0 mt-6">
          <div className="rounded-4xl bg-card border border-border px-8 md:px-16 py-12">
            <p className="text-accent font-mono text-sm mb-3 tracking-widest uppercase">Для спорт-баров</p>
            <h2
              className="text-foreground text-3xl md:text-4xl font-bold mb-10 leading-tight"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              Квизуля = больше гостей,<br />выше выручка
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
                  icon: "🎯",
                  title: "Готовые квизы + тест",
                  desc: "У нас уже есть готовые квизы по футболу и хоккею. Попробуйте бесплатно в тестовом периоде — без обязательств.",
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
            <p className="text-accent font-mono text-sm mb-3 tracking-widest uppercase">Для участников квизов</p>
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
                  desc: "Собирай команду с друзьями и соревнуйтесь в живом формате.",
                },
                {
                  icon: "🎁",
                  title: "Призы победителям",
                  desc: "Самые умные и находчивые получают призы — напитки, сертификаты, сувениры и другие приятные бонусы.",
                },
                {
                  icon: "🧠",
                  title: "Азарт и кайф",
                  desc: "Квиз — для бойцов! Каждый вопрос — мини‑матч, каждая дискуссия — тактический разбор, каждый верный ответ — шаг к победе. Здесь нет места пассивности: только живой азарт, умственная нагрузка и вкус заслуженного триумфа.",
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

        {/* Форма заявки */}
        {/* Цены */}
        <section className="px-4 md:px-0 mt-6">
          <div className="rounded-4xl bg-card border border-border px-8 md:px-16 py-12">
            <p className="text-accent font-mono text-sm mb-3 tracking-widest uppercase">Стоимость</p>
            <h2
              className="text-foreground text-3xl md:text-4xl font-bold mb-10 leading-tight"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              Выберите свой формат
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Готовые квизы */}
              <div className="bg-background rounded-2xl p-8 border border-primary/40 flex flex-col gap-4 relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-primary text-primary-foreground font-mono text-xs px-4 py-1 rounded-bl-xl font-bold">
                  Хит
                </div>
                <span className="text-4xl">🎯</span>
                <h3 className="text-foreground font-bold text-xl" style={{ fontFamily: "var(--font-montserrat)" }}>
                  Готовый квиз
                </h3>
                <div className="flex items-end gap-2">
                  <span className="text-primary font-bold text-4xl" style={{ fontFamily: "var(--font-montserrat)" }}>от 500 ₽</span>
                </div>
                <p className="text-muted-foreground font-mono text-sm leading-relaxed">
                  Готовые квизы по футболу и хоккею — можно запустить уже сегодня. Тестовый период доступен бесплатно.
                </p>
                <ul className="space-y-2 mt-2">
                  {["Квизы по футболу и хоккею", "Быстрый старт — за 1 день", "Тестовый период бесплатно"].map((f) => (
                    <li key={f} className="flex items-center gap-2 text-foreground font-mono text-sm">
                      <span className="text-primary">✓</span> {f}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Квиз под заказ */}
              <div className="bg-background rounded-2xl p-8 border border-border flex flex-col gap-4">
                <span className="text-4xl">✏️</span>
                <h3 className="text-foreground font-bold text-xl" style={{ fontFamily: "var(--font-montserrat)" }}>
                  Квиз под заказ
                </h3>
                <div className="flex items-end gap-2">
                  <span className="text-foreground font-bold text-4xl" style={{ fontFamily: "var(--font-montserrat)" }}>Индивидуально</span>
                </div>
                <p className="text-muted-foreground font-mono text-sm leading-relaxed">
                  Создадим квиз под вашу тему, аудиторию и формат. Стоимость рассчитывается индивидуально после консультации.
                </p>
                <ul className="space-y-2 mt-2">
                  {["Любая тема и формат", "Уникальные вопросы", "Персональный расчёт стоимости"].map((f) => (
                    <li key={f} className="flex items-center gap-2 text-foreground font-mono text-sm">
                      <span className="text-primary">✓</span> {f}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="px-4 md:px-0 mt-6 mb-6">
          <ContactForm />
        </section>

      </div>
      <Footer />
    </div>
  )
}

export default Index
const features = [
  {
    title: '安裝即上手',
    desc: '不用寫程式、不用裝一堆工具，跟著步驟五分鐘完成安裝，馬上開始用。',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-7 w-7" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v9m0 0-3.5-3.5M12 13.5l3.5-3.5M5 16.5v1a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-1" />
      </svg>
    ),
  },
  {
    title: 'Prompt 設計',
    desc: '學會怎麼跟 AI 說話，用對的方式問問題，得到更準確、更有用的答案。',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-7 w-7" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 10h.01M12 10h.01M16 10h.01M21 12a9 9 0 1 1-4.06-7.516L21 3l-1.29 4.774A8.96 8.96 0 0 1 21 12Z" />
      </svg>
    ),
  },
  {
    title: 'AI 記憶系統',
    desc: '讓 AI 記住你的偏好與過去的對話脈絡，越用越懂你，不用每次重講一遍。',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-7 w-7" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 4.5A4.5 4.5 0 0 0 4.5 9v0A2.5 2.5 0 0 0 3 11.28v0A2.5 2.5 0 0 0 4.5 13.5v0A4.5 4.5 0 0 0 9 18M9 4.5A4.5 4.5 0 0 1 13.5 9v0a2.5 2.5 0 0 1 1.5 2.28v0A2.5 2.5 0 0 1 13.5 13.5v0A4.5 4.5 0 0 1 9 18M9 4.5v13.5" />
      </svg>
    ),
  },
  {
    title: '資安意識',
    desc: '了解使用 AI 工具時該注意的資訊安全與隱私風險，用得安心又安全。',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-7 w-7" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3.5 4.5 6.5v5c0 4.5 3.2 7.6 7.5 9 4.3-1.4 7.5-4.5 7.5-9v-5L12 3.5Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="m9.5 12 1.75 1.75L14.75 10" />
      </svg>
    ),
  },
]

function App() {
  return (
    <div className="min-h-screen bg-[#05060a] text-slate-200 antialiased selection:bg-fuchsia-500/30">
      {/* ambient glow background */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -top-40 left-1/2 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-fuchsia-600/25 blur-[120px]" />
        <div className="absolute top-1/3 -left-40 h-[28rem] w-[28rem] rounded-full bg-indigo-600/20 blur-[120px]" />
        <div className="absolute bottom-0 right-0 h-[28rem] w-[28rem] rounded-full bg-cyan-500/10 blur-[120px]" />
      </div>

      <div className="relative">
        {/* Nav */}
        <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-fuchsia-500 to-indigo-500" />
            <span className="text-sm font-semibold tracking-wide text-white">AI 概論初級班</span>
          </div>
          <span className="hidden rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs text-slate-300 sm:block">
            demo-site
          </span>
        </header>

        {/* Hero */}
        <section className="mx-auto flex max-w-4xl flex-col items-center px-6 pt-20 pb-24 text-center sm:pt-28">
          <span className="mb-6 inline-flex animate-fade-in-up items-center gap-2 rounded-full border border-fuchsia-400/20 bg-fuchsia-400/10 px-4 py-1.5 text-xs font-medium text-fuchsia-200">
            公司內訓 · AI 素養課程
          </span>
          <h1 className="animate-fade-in-up text-4xl font-bold tracking-tight text-white [animation-delay:0.1s] sm:text-6xl">
            AI 概論初級班
          </h1>
          <p className="mt-6 max-w-2xl animate-fade-in-up text-lg text-slate-400 [animation-delay:0.2s] sm:text-xl">
            用 AI 工具提升每個人的工作效率
          </p>
          <div className="mt-10 flex animate-fade-in-up flex-wrap items-center justify-center gap-4 [animation-delay:0.3s]">
            <a
              href="#about"
              className="rounded-full bg-gradient-to-r from-fuchsia-500 to-indigo-500 px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-fuchsia-500/25 transition hover:shadow-fuchsia-500/40 hover:scale-[1.03]"
            >
              了解課程內容
            </a>
            <a
              href="#features"
              className="rounded-full border border-white/15 px-7 py-3 text-sm font-semibold text-slate-200 transition hover:border-white/30 hover:bg-white/5"
            >
              課程亮點
            </a>
          </div>
        </section>

        {/* About */}
        <section id="about" className="mx-auto max-w-4xl px-6 py-20 text-center">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-fuchsia-300">關於課程</h2>
          <p className="mx-auto mt-4 max-w-2xl text-2xl font-medium leading-relaxed text-white sm:text-3xl">
            這是一堂讓公司每個人都能用 AI 工具的課
          </p>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-slate-400">
            不需要技術背景，從安裝、提問技巧到資安觀念，一步步帶你把 AI
            工具融入日常工作，讓效率真正提升。
          </p>
        </section>

        {/* Feature cards */}
        <section id="features" className="mx-auto max-w-6xl px-6 py-12">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((f, i) => (
              <div
                key={f.title}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-left transition duration-300 hover:-translate-y-1 hover:border-fuchsia-400/30 hover:bg-white/[0.06]"
                style={{ animationDelay: `${0.1 * i}s` }}
              >
                <div className="absolute inset-0 -z-10 opacity-0 transition duration-300 group-hover:opacity-100 bg-gradient-to-br from-fuchsia-500/10 to-indigo-500/10" />
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-fuchsia-500/20 to-indigo-500/20 text-fuchsia-300">
                  {f.icon}
                </div>
                <h3 className="text-base font-semibold text-white">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">{f.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="mx-auto mt-16 max-w-6xl border-t border-white/10 px-6 py-8 text-center">
          <p className="text-sm text-slate-500">Powered by Claude Code — 從零到上線只花了 10 分鐘</p>
        </footer>
      </div>
    </div>
  )
}

export default App

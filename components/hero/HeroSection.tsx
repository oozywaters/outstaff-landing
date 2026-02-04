import SectionContainer from '@/components/shared/SectionContainer';

export default function HeroSection() {
  return (
    <SectionContainer
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      fullWidth
    >
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 via-transparent to-blue-500/5" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-900/10 via-transparent to-transparent" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 md:px-12 max-w-5xl text-center">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 leading-tight">
          <span className="gradient-text">Elite Level Services</span>
        </h1>

        <p className="text-2xl md:text-3xl text-zinc-300 mb-4 font-medium">
          Ваш партнёр в цифровой трансформации
        </p>

        <p className="text-xl md:text-2xl text-amber-400 mb-8 font-medium">
          Аутстафф. Разработка. Консалтинг.
        </p>

        <p className="text-lg md:text-xl text-zinc-400 max-w-3xl mx-auto mb-12 leading-relaxed">
          Предоставляем высококвалифицированных специалистов и комплексные решения
          для масштабирования вашего бизнеса
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="#contact"
            className="px-8 py-4 rounded-full font-medium text-lg transition-all duration-300 hover:scale-105 bg-amber-500 hover:bg-amber-400 text-black shadow-lg shadow-amber-500/20"
          >
            Обсудить проект
          </a>
          <a
            href="#services"
            className="px-8 py-4 rounded-full font-medium text-lg transition-all duration-300 hover:scale-105 border-2 border-zinc-700 hover:border-amber-400 text-zinc-50 hover:text-amber-400"
          >
            Наши услуги
          </a>
        </div>
      </div>
    </SectionContainer>
  );
}

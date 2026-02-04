'use client';

import CTAButton from './CTAButton';
import SectionContainer from '../shared/SectionContainer';

export default function HeroSection() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToServices = () => {
    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
  };

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
          <CTAButton onClick={scrollToContact}>
            Обсудить проект
          </CTAButton>
          <CTAButton variant="secondary" onClick={scrollToServices}>
            Наши услуги
          </CTAButton>
        </div>
      </div>
    </SectionContainer>
  );
}

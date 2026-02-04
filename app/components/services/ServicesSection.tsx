import SectionContainer from '../shared/SectionContainer';
import ServiceCard from './ServiceCard';

export default function ServicesSection() {
  const services = [
    {
      number: 1,
      title: "Аутстафф по модели T&M",
      description: "Предоставляем высококвалифицированных разработчиков, дизайнеров и специалистов для усиления вашей команды. Гибкая модель оплаты по времени и материалам.",
      features: [
        "Быстрый подбор специалистов",
        "Гибкая шкала оплаты",
        "Полная интеграция в вашу команду"
      ]
    },
    {
      number: 2,
      title: "Разработка ПО под ключ",
      description: "Полный цикл создания программного обеспечения от идеи до запуска. Проектирование, разработка, тестирование и поддержка современных цифровых продуктов.",
      features: [
        "Фиксированная цена и сроки",
        "Современные технологии",
        "Гарантия качества"
      ]
    },
    {
      number: 3,
      title: "IT и Digital консалтинг",
      description: "Всесторонний консалтинг по информационным технологиям, цифровой трансформации и разработке стратегии развития цифровых продуктов.",
      features: [
        "Стратегический анализ",
        "Технологический аудит",
        "Roadmap разработки"
      ]
    }
  ];

  return (
    <SectionContainer id="services" className="bg-gradient-to-b from-black via-zinc-950 to-black">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Наши <span className="text-amber-400">услуги</span>
        </h2>
        <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
          Комплексные решения для вашего бизнеса
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {services.map((service) => (
          <ServiceCard key={service.number} {...service} />
        ))}
      </div>
    </SectionContainer>
  );
}

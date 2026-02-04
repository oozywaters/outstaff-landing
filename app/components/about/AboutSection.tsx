import SectionContainer from '../shared/SectionContainer';
import BenefitItem from './BenefitItem';

export default function AboutSection() {
  const benefits = [
    {
      title: "Опытная команда",
      description: "Senior специалисты с опытом работы в крупных международных проектах",
      icon: "⭐"
    },
    {
      title: "Проверенные методологии",
      description: "Agile, Scrum, DevOps — используем лучшие практики индустрии",
      icon: "⚡"
    },
    {
      title: "Прозрачность",
      description: "Полная отчётность, регулярные статус-апдейты, открытая коммуникация",
      icon: "🎯"
    },
    {
      title: "Результат",
      description: "Фокус на бизнес-метриках и реальной ценности для вашей компании",
      icon: "📈"
    }
  ];

  return (
    <SectionContainer id="about" className="bg-black">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Почему выбирают <span className="text-amber-400">нас</span>
          </h2>
          <p className="text-xl text-zinc-400 max-w-3xl mx-auto leading-relaxed">
            Мы — команда профессионалов с многолетним опытом в разработке и консалтинге.
            Наша цель — помочь вашему бизнесу достичь новых высот через качественные цифровые решения.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {benefits.map((benefit, index) => (
            <BenefitItem key={index} {...benefit} />
          ))}
        </div>
      </div>
    </SectionContainer>
  );
}

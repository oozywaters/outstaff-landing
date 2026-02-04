import SectionContainer from '../shared/SectionContainer';
import ContactForm from './ContactForm';

export default function ContactSection() {
  const contactMethods = [
    {
      type: "email",
      label: "Email",
      value: "info@elitelevel.services",
      icon: "✉",
      href: "mailto:info@elitelevel.services"
    },
    {
      type: "telegram",
      label: "Telegram",
      value: "@elitelevel",
      icon: "✈",
      href: "https://t.me/elitelevel"
    }
  ];

  return (
    <SectionContainer id="contact" className="bg-gradient-to-b from-black via-zinc-950 to-black">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Готовы <span className="text-amber-400">начать?</span>
          </h2>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
            Свяжитесь с нами для обсуждения вашего проекта.
            Мы ответим в течение 24 часов.
          </p>
        </div>

        {/* Contact Methods */}
        <div className="flex flex-col sm:flex-row justify-center gap-6 mb-12">
          {contactMethods.map((method) => (
            <a
              key={method.type}
              href={method.href}
              className="flex items-center space-x-3 px-6 py-4 bg-zinc-900/50 border border-zinc-800 rounded-xl hover:border-amber-400/50 transition-all group"
            >
              <span className="text-2xl">{method.icon}</span>
              <div className="text-left">
                <div className="text-sm text-zinc-500">{method.label}</div>
                <div className="text-zinc-50 group-hover:text-amber-400 transition-colors">
                  {method.value}
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Contact Form */}
        <div className="bg-zinc-900/30 border border-zinc-800 rounded-2xl p-8 md:p-12">
          <ContactForm />
        </div>
      </div>
    </SectionContainer>
  );
}

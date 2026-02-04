import SectionContainer from '@/components/shared/SectionContainer';

export default function ContactSection() {
  const contactMethods = [
    {
      type: "email",
      label: "Email",
      value: "info@elitelevel.services",
      href: "mailto:info@elitelevel.services"
    },
    {
      type: "telegram",
      label: "Telegram",
      value: "@elitelevel",
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
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12 max-w-2xl mx-auto">
          {contactMethods.map((method) => (
            <a
              key={method.type}
              href={method.href}
              target={method.type === 'telegram' ? '_blank' : undefined}
              rel={method.type === 'telegram' ? 'noopener noreferrer' : undefined}
              className="group relative p-6 bg-zinc-900/30 border border-zinc-800 rounded-xl hover:border-amber-400/50 transition-all hover:bg-zinc-900/50"
            >
              <div className="text-sm font-medium text-zinc-500 mb-2">{method.label}</div>
              <div className="text-lg font-medium text-zinc-50 group-hover:text-amber-400 transition-colors">
                {method.value}
              </div>
              <div className="absolute top-6 right-6 text-amber-400/20 group-hover:text-amber-400/40 transition-colors">
                →
              </div>
            </a>
          ))}
        </div>

        {/* Contact Form */}
        {/* <div className="bg-zinc-900/30 border border-zinc-800 rounded-2xl p-8 md:p-12">
          <ContactForm />
        </div> */}
      </div>
    </SectionContainer>
  );
}

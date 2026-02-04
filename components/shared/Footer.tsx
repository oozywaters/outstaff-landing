'use client';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-zinc-800 bg-black">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo & Description */}
          <div>
            <button
              onClick={() => scrollToSection('hero')}
              className="text-xl font-bold mb-4 hover:text-amber-400 transition-colors text-left"
            >
              Elite Level <span className="text-amber-400">Services</span>
            </button>
            <p className="text-zinc-400 text-sm">
              Ваш партнёр в цифровой трансформации
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-zinc-50 font-semibold mb-4">Услуги</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() => scrollToSection('services')}
                  className="text-zinc-400 hover:text-amber-400 transition-colors"
                >
                  Аутстафф по T&M
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('services')}
                  className="text-zinc-400 hover:text-amber-400 transition-colors"
                >
                  Разработка под ключ
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('services')}
                  className="text-zinc-400 hover:text-amber-400 transition-colors"
                >
                  IT-консалтинг
                </button>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-zinc-50 font-semibold mb-4">Контакты</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="mailto:info@elitelevel.services"
                  className="text-zinc-400 hover:text-amber-400 transition-colors"
                >
                  info@elitelevel.services
                </a>
              </li>
              <li>
                <a
                  href="https://t.me/elitelevel"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-400 hover:text-amber-400 transition-colors"
                >
                  @elitelevel
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-zinc-800 mt-12 pt-8 text-center text-sm text-zinc-500">
          © {currentYear} Elite Level Services. Все права защищены.
        </div>
      </div>
    </footer>
  );
}

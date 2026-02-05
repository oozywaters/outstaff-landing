export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-zinc-800 bg-black">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo & Description */}
          <div>
            <a
              href="#hero"
              className="text-xl font-bold mb-4 hover:text-amber-400 transition-colors inline-block"
            >
              Elite Level <span className="text-amber-400">Services</span>
            </a>
            <p className="text-zinc-400 text-sm">
              Ваш партнёр в цифровой трансформации
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-zinc-50 font-semibold mb-4">Услуги</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#services"
                  className="text-zinc-400 hover:text-amber-400 transition-colors"
                >
                  Аутстафф по T&M
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-zinc-400 hover:text-amber-400 transition-colors"
                >
                  Разработка под ключ
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-zinc-400 hover:text-amber-400 transition-colors"
                >
                  IT-консалтинг
                </a>
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
              <li className="text-zinc-400 pt-2">
                Район Сарыарка,<br />
                Проспект Абая,<br />
                здание 24/1
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

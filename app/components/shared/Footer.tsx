export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-zinc-800 bg-black">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo & Description */}
          <div>
            <h3 className="text-xl font-bold mb-4">
              Elite Level <span className="text-amber-400">Services</span>
            </h3>
            <p className="text-zinc-400 text-sm">
              Ваш партнёр в цифровой трансформации
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-zinc-50 font-semibold mb-4">Услуги</h4>
            <ul className="space-y-2 text-sm text-zinc-400">
              <li>Аутстафф по T&M</li>
              <li>Разработка под ключ</li>
              <li>IT-консалтинг</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-zinc-50 font-semibold mb-4">Контакты</h4>
            <ul className="space-y-2 text-sm text-zinc-400">
              <li>info@elitelevel.services</li>
              <li>@elitelevel</li>
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

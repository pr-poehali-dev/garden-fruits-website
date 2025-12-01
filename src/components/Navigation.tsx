interface NavigationProps {
  scrollToSection: (section: string) => void;
}

const Navigation = ({ scrollToSection }: NavigationProps) => {
  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-2xl">🍇</span>
            <h1 className="text-2xl font-bold text-primary">Садовод</h1>
          </div>
          <div className="hidden md:flex items-center gap-6">
            <button onClick={() => scrollToSection('home')} className="text-sm font-medium hover:text-primary transition-colors">
              Главная
            </button>
            <button onClick={() => scrollToSection('varieties')} className="text-sm font-medium hover:text-primary transition-colors">
              Сорта
            </button>
            <button onClick={() => scrollToSection('gallery')} className="text-sm font-medium hover:text-primary transition-colors">
              Галерея
            </button>
            <button onClick={() => scrollToSection('about')} className="text-sm font-medium hover:text-primary transition-colors">
              О культурах
            </button>
            <button onClick={() => scrollToSection('care')} className="text-sm font-medium hover:text-primary transition-colors">
              Уход
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-sm font-medium hover:text-primary transition-colors">
              Контакты
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;

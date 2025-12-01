import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import Icon from '@/components/ui/icon';

interface NavigationProps {
  scrollToSection: (section: string) => void;
}

const Navigation = ({ scrollToSection }: NavigationProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleMobileNavClick = (section: string) => {
    scrollToSection(section);
    setMobileMenuOpen(false);
  };

  const menuItems = [
    { id: 'home', label: 'Главная', icon: 'Home' },
    { id: 'varieties', label: 'Сорта', icon: 'Apple' },
    { id: 'gallery', label: 'Галерея', icon: 'Image' },
    { id: 'about', label: 'О культурах', icon: 'BookOpen' },
    { id: 'care', label: 'Уход', icon: 'Sprout' },
    { id: 'contact', label: 'Контакты', icon: 'Mail' }
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-2xl">🍇</span>
            <h1 className="text-2xl font-bold text-primary">Садовод</h1>
          </div>
          
          <div className="hidden md:flex items-center gap-6">
            {menuItems.map(item => (
              <button 
                key={item.id}
                onClick={() => scrollToSection(item.id)} 
                className="text-sm font-medium hover:text-primary transition-colors"
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="md:hidden">
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Icon name="Menu" size={24} />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px]">
                <SheetHeader>
                  <SheetTitle className="flex items-center gap-2 text-left">
                    <span className="text-2xl">🍇</span>
                    <span>Меню</span>
                  </SheetTitle>
                </SheetHeader>
                <div className="flex flex-col gap-4 mt-8">
                  {menuItems.map(item => (
                    <button
                      key={item.id}
                      onClick={() => handleMobileNavClick(item.id)}
                      className="flex items-center gap-3 text-left p-3 rounded-lg hover:bg-accent transition-colors"
                    >
                      <Icon name={item.icon as any} size={20} className="text-primary" />
                      <span className="font-medium">{item.label}</span>
                    </button>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;

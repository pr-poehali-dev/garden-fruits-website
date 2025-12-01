import { useState } from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import Navigation from '@/components/Navigation';
import VarietiesCatalog from '@/components/VarietiesCatalog';
import AboutAndCare from '@/components/AboutAndCare';
import ContactSection from '@/components/ContactSection';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const varieties = [
    {
      id: 1,
      name: 'Кишмиш Лучистый',
      type: 'grape' as const,
      image: '🍇',
      description: 'Среднеспелый бессемянный сорт с крупными розовыми ягодами',
      characteristics: {
        'Срок созревания': '125-130 дней',
        'Морозостойкость': '-21°C',
        'Урожайность': 'Высокая',
        'Вкус': 'Сладкий, мускатный'
      }
    },
    {
      id: 2,
      name: 'Аркадия',
      type: 'grape' as const,
      image: '🍇',
      description: 'Ранний столовый сорт с крупными белыми ягодами',
      characteristics: {
        'Срок созревания': '115-125 дней',
        'Морозостойкость': '-21°C',
        'Урожайность': 'Очень высокая',
        'Вкус': 'Гармоничный, сладкий'
      }
    },
    {
      id: 3,
      name: 'Антоновка',
      type: 'apple' as const,
      image: '🍏',
      description: 'Старинный русский сорт с кисло-сладкими ароматными плодами',
      characteristics: {
        'Срок созревания': 'Сентябрь-октябрь',
        'Морозостойкость': '-40°C',
        'Урожайность': 'Высокая',
        'Вкус': 'Кисло-сладкий'
      }
    },
    {
      id: 4,
      name: 'Мельба',
      type: 'apple' as const,
      image: '🍎',
      description: 'Летний сорт с красивыми красно-полосатыми плодами',
      characteristics: {
        'Срок созревания': 'Конец июля',
        'Морозостойкость': '-35°C',
        'Урожайность': 'Средняя',
        'Вкус': 'Сладкий с карамельным ароматом'
      }
    },
    {
      id: 5,
      name: 'Молдова',
      type: 'grape' as const,
      image: '🍇',
      description: 'Поздний сорт с темно-фиолетовыми крупными ягодами',
      characteristics: {
        'Срок созревания': '155-160 дней',
        'Морозостойкость': '-23°C',
        'Урожайность': 'Высокая',
        'Вкус': 'Простой, приятный'
      }
    },
    {
      id: 6,
      name: 'Белый налив',
      type: 'apple' as const,
      image: '🍏',
      description: 'Ранний летний сорт с нежной белой мякотью',
      characteristics: {
        'Срок созревания': 'Июль-август',
        'Морозостойкость': '-40°C',
        'Урожайность': 'Высокая',
        'Вкус': 'Нежный, кисло-сладкий'
      }
    }
  ];

  const galleryImages = [
    { id: 1, emoji: '🍇', alt: 'Виноградная лоза' },
    { id: 2, emoji: '🍎', alt: 'Яблоневый сад' },
    { id: 3, emoji: '🍏', alt: 'Зеленые яблоки' },
    { id: 4, emoji: '🍇', alt: 'Гроздь винограда' },
    { id: 5, emoji: '🌿', alt: 'Листья винограда' },
    { id: 6, emoji: '🍎', alt: 'Красные яблоки' }
  ];

  const scrollToSection = (section: string) => {
    setActiveSection(section);
    const element = document.getElementById(section);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation scrollToSection={scrollToSection} />

      <section id="home" className="py-20 bg-gradient-to-b from-accent to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex justify-center gap-4 text-6xl mb-8 animate-fade-in">
              <span>🍇</span>
              <span>🍎</span>
              <span>🍏</span>
            </div>
            <h2 className="text-5xl font-bold mb-6 text-primary">
              Виноград и яблоки
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Профессиональный опыт выращивания. Лучшие сорта для вашего сада.
            </p>
            <Button onClick={() => scrollToSection('varieties')} size="lg" className="gap-2">
              Смотреть каталог
              <Icon name="ChevronRight" size={20} />
            </Button>
          </div>
        </div>
      </section>

      <VarietiesCatalog varieties={varieties} />

      <section id="gallery" className="py-20 bg-accent/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">Галерея</h2>
          <p className="text-center text-muted-foreground mb-12">
            Фотографии из нашего сада
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {galleryImages.map((img) => (
              <div 
                key={img.id}
                className="aspect-square bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow flex items-center justify-center text-8xl hover:scale-105 transition-transform cursor-pointer"
              >
                {img.emoji}
              </div>
            ))}
          </div>
        </div>
      </section>

      <AboutAndCare />

      <ContactSection />

      <footer className="bg-primary text-primary-foreground py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="text-2xl">🍇</span>
            <span className="font-bold text-xl">Садовод</span>
          </div>
          <p className="text-sm opacity-90">
            © 2024 Виноград и яблоки. Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;

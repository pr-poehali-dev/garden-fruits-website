import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [filterType, setFilterType] = useState('all');

  const varieties = [
    {
      id: 1,
      name: 'Кишмиш Лучистый',
      type: 'grape',
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
      type: 'grape',
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
      type: 'apple',
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
      type: 'apple',
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
      type: 'grape',
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
      type: 'apple',
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

  const filteredVarieties = filterType === 'all' 
    ? varieties 
    : varieties.filter(v => v.type === filterType);

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

      <section id="varieties" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">Каталог сортов</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Подборка проверенных сортов винограда и яблок с подробными характеристиками
          </p>

          <div className="flex justify-center gap-4 mb-12">
            <Button 
              variant={filterType === 'all' ? 'default' : 'outline'}
              onClick={() => setFilterType('all')}
              className="gap-2"
            >
              <Icon name="List" size={18} />
              Все сорта
            </Button>
            <Button 
              variant={filterType === 'grape' ? 'default' : 'outline'}
              onClick={() => setFilterType('grape')}
              className="gap-2"
            >
              🍇 Виноград
            </Button>
            <Button 
              variant={filterType === 'apple' ? 'default' : 'outline'}
              onClick={() => setFilterType('apple')}
              className="gap-2"
            >
              🍎 Яблоки
            </Button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredVarieties.map((variety) => (
              <Card key={variety.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="text-6xl mb-4 text-center">{variety.image}</div>
                  <CardTitle className="text-center">{variety.name}</CardTitle>
                  <CardDescription className="text-center">
                    <Badge variant="secondary" className="mt-2">
                      {variety.type === 'grape' ? 'Виноград' : 'Яблоко'}
                    </Badge>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    {variety.description}
                  </p>
                  <div className="space-y-2">
                    {Object.entries(variety.characteristics).map(([key, value]) => (
                      <div key={key} className="flex justify-between text-sm">
                        <span className="text-muted-foreground">{key}:</span>
                        <span className="font-medium">{value}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

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

      <section id="about" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">О культурах</h2>
          <div className="max-w-4xl mx-auto">
            <Tabs defaultValue="grape" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-8">
                <TabsTrigger value="grape" className="gap-2">
                  🍇 Виноград
                </TabsTrigger>
                <TabsTrigger value="apple" className="gap-2">
                  🍎 Яблоки
                </TabsTrigger>
              </TabsList>
              <TabsContent value="grape">
                <Card>
                  <CardHeader>
                    <CardTitle>Виноград в саду</CardTitle>
                    <CardDescription>
                      Универсальная культура для любого участка
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p>
                      Виноград — одна из древнейших культур, выращиваемых человеком. 
                      Современные сорта адаптированы к различным климатическим условиям 
                      и могут успешно плодоносить даже в средней полосе России.
                    </p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <h4 className="font-semibold flex items-center gap-2">
                          <Icon name="Sun" size={18} className="text-primary" />
                          Преимущества
                        </h4>
                        <ul className="text-sm space-y-1 text-muted-foreground ml-6">
                          <li>• Высокая урожайность</li>
                          <li>• Декоративность лозы</li>
                          <li>• Разнообразие сортов</li>
                          <li>• Долгий срок плодоношения</li>
                        </ul>
                      </div>
                      <div className="space-y-2">
                        <h4 className="font-semibold flex items-center gap-2">
                          <Icon name="Sprout" size={18} className="text-primary" />
                          Условия выращивания
                        </h4>
                        <ul className="text-sm space-y-1 text-muted-foreground ml-6">
                          <li>• Солнечное место</li>
                          <li>• Защита от ветра</li>
                          <li>• Хороший дренаж</li>
                          <li>• Опора для лозы</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="apple">
                <Card>
                  <CardHeader>
                    <CardTitle>Яблони в саду</CardTitle>
                    <CardDescription>
                      Основа плодового сада
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p>
                      Яблоня — самая распространенная плодовая культура в России. 
                      Неприхотливость, высокая зимостойкость и разнообразие сортов 
                      делают яблоню идеальной для любого сада.
                    </p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <h4 className="font-semibold flex items-center gap-2">
                          <Icon name="Award" size={18} className="text-primary" />
                          Преимущества
                        </h4>
                        <ul className="text-sm space-y-1 text-muted-foreground ml-6">
                          <li>• Высокая морозостойкость</li>
                          <li>• Долговечность деревьев</li>
                          <li>• Лежкость плодов</li>
                          <li>• Универсальность использования</li>
                        </ul>
                      </div>
                      <div className="space-y-2">
                        <h4 className="font-semibold flex items-center gap-2">
                          <Icon name="TreeDeciduous" size={18} className="text-primary" />
                          Условия выращивания
                        </h4>
                        <ul className="text-sm space-y-1 text-muted-foreground ml-6">
                          <li>• Открытое место</li>
                          <li>• Умеренный полив</li>
                          <li>• Регулярная обрезка</li>
                          <li>• Профилактика болезней</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      <section id="care" className="py-20 bg-accent/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">Уход за растениями</h2>
          <p className="text-center text-muted-foreground mb-12">
            Основные агротехнические приемы
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <Card className="text-center">
              <CardHeader>
                <div className="text-4xl mb-2 mx-auto">
                  <Icon name="Droplets" size={48} className="text-primary mx-auto" />
                </div>
                <CardTitle className="text-lg">Полив</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Регулярный полив в период роста и созревания. Особенно важен в засушливые периоды.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="text-4xl mb-2">
                  <Icon name="Scissors" size={48} className="text-primary mx-auto" />
                </div>
                <CardTitle className="text-lg">Обрезка</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Формирующая и санитарная обрезка для правильного развития и урожайности.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="text-4xl mb-2">
                  <Icon name="Leaf" size={48} className="text-primary mx-auto" />
                </div>
                <CardTitle className="text-lg">Подкормка</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Внесение органических и минеральных удобрений весной и осенью.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="text-4xl mb-2">
                  <Icon name="Shield" size={48} className="text-primary mx-auto" />
                </div>
                <CardTitle className="text-lg">Защита</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Профилактическая обработка от болезней и вредителей в течение сезона.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-4">Контакты</h2>
            <p className="text-center text-muted-foreground mb-12">
              Есть вопросы? Свяжитесь со мной
            </p>
            <Card>
              <CardHeader>
                <CardTitle>Написать сообщение</CardTitle>
                <CardDescription>
                  Отвечу на любые вопросы о выращивании винограда и яблок
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Имя</label>
                    <Input placeholder="Ваше имя" />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Email</label>
                    <Input type="email" placeholder="your@email.com" />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Сообщение</label>
                    <Textarea placeholder="Ваш вопрос или сообщение..." rows={5} />
                  </div>
                  <Button type="submit" className="w-full gap-2">
                    <Icon name="Send" size={18} />
                    Отправить сообщение
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

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

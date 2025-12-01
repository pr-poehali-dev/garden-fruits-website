import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

const AboutAndCare = () => {
  return (
    <>
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
    </>
  );
};

export default AboutAndCare;

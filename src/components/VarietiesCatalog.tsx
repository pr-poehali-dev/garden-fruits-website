import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Checkbox } from '@/components/ui/checkbox';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import Icon from '@/components/ui/icon';

interface Variety {
  id: number;
  name: string;
  type: 'grape' | 'apple';
  image: string;
  description: string;
  characteristics: {
    [key: string]: string;
  };
}

interface VarietiesCatalogProps {
  varieties: Variety[];
}

const VarietiesCatalog = ({ varieties }: VarietiesCatalogProps) => {
  const [filterType, setFilterType] = useState('all');
  const [selectedVarieties, setSelectedVarieties] = useState<number[]>([]);
  const [compareDialogOpen, setCompareDialogOpen] = useState(false);

  const filteredVarieties = filterType === 'all' 
    ? varieties 
    : varieties.filter(v => v.type === filterType);

  const toggleVarietySelection = (id: number) => {
    setSelectedVarieties(prev => 
      prev.includes(id) 
        ? prev.filter(vid => vid !== id)
        : [...prev, id]
    );
  };

  const selectedVarietiesData = varieties.filter(v => selectedVarieties.includes(v.id));
  const allCharacteristicKeys = selectedVarietiesData.length > 0
    ? Object.keys(selectedVarietiesData[0].characteristics)
    : [];

  return (
    <section id="varieties" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4">Каталог сортов</h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Подборка проверенных сортов винограда и яблок с подробными характеристиками
        </p>

        <div className="flex flex-col items-center gap-4 mb-12">
          <div className="flex justify-center gap-4">
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
          
          {selectedVarieties.length > 0 && (
            <Dialog open={compareDialogOpen} onOpenChange={setCompareDialogOpen}>
              <DialogTrigger asChild>
                <Button variant="default" className="gap-2">
                  <Icon name="GitCompare" size={18} />
                  Сравнить выбранные ({selectedVarieties.length})
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle>Сравнение сортов</DialogTitle>
                  <DialogDescription>
                    Сравните характеристики выбранных сортов
                  </DialogDescription>
                </DialogHeader>
                <div className="mt-4">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="w-[200px]">Характеристика</TableHead>
                        {selectedVarietiesData.map(variety => (
                          <TableHead key={variety.id} className="text-center">
                            <div className="flex flex-col items-center gap-2">
                              <span className="text-3xl">{variety.image}</span>
                              <span className="font-semibold">{variety.name}</span>
                              <Badge variant="secondary" className="text-xs">
                                {variety.type === 'grape' ? 'Виноград' : 'Яблоко'}
                              </Badge>
                            </div>
                          </TableHead>
                        ))}
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell className="font-medium">Описание</TableCell>
                        {selectedVarietiesData.map(variety => (
                          <TableCell key={variety.id} className="text-sm text-center">
                            {variety.description}
                          </TableCell>
                        ))}
                      </TableRow>
                      {allCharacteristicKeys.map(key => (
                        <TableRow key={key}>
                          <TableCell className="font-medium">{key}</TableCell>
                          {selectedVarietiesData.map(variety => (
                            <TableCell key={variety.id} className="text-center">
                              {variety.characteristics[key]}
                            </TableCell>
                          ))}
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
                <div className="flex justify-end gap-2 mt-4">
                  <Button 
                    variant="outline" 
                    onClick={() => setSelectedVarieties([])}
                  >
                    Очистить выбор
                  </Button>
                  <Button onClick={() => setCompareDialogOpen(false)}>
                    Закрыть
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
          )}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredVarieties.map((variety) => (
            <Card key={variety.id} className="hover:shadow-lg transition-shadow relative">
              <div className="absolute top-4 right-4 z-10">
                <Checkbox 
                  checked={selectedVarieties.includes(variety.id)}
                  onCheckedChange={() => toggleVarietySelection(variety.id)}
                  className="h-5 w-5"
                />
              </div>
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
  );
};

export default VarietiesCatalog;

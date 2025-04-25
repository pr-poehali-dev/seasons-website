
import { Link } from "react-router-dom";
import MainLayout from "@/components/layout/MainLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const seasons = [
  {
    id: "spring",
    title: "Весна",
    description: "Время пробуждения природы и первых цветов",
    image: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?q=80&w=1200&auto=format",
    color: "bg-[#F2FCE2]"
  },
  {
    id: "summer",
    title: "Лето",
    description: "Пора тепла, солнца и ярких красок",
    image: "https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?q=80&w=1200&auto=format",
    color: "bg-[#FEF7CD]"
  },
  {
    id: "autumn",
    title: "Осень",
    description: "Сезон золотых листьев и уютных вечеров",
    image: "https://images.unsplash.com/photo-1507371341162-763b5e419408?q=80&w=1200&auto=format",
    color: "bg-[#FEC6A1]"
  },
  {
    id: "winter",
    title: "Зима",
    description: "Время снега, льда и волшебных праздников",
    image: "https://images.unsplash.com/photo-1491002052546-bf38f186af56?q=80&w=1200&auto=format",
    color: "bg-[#E5DEFF]"
  }
];

const Index = () => {
  return (
    <MainLayout>
      <div className="container max-w-7xl mx-auto py-16 px-4">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6 text-[#1A1F2C]">Времена года</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Откройте для себя особенности и красоту каждого времени года. Узнайте о природных 
            явлениях, традициях и интересных фактах, связанных с разными сезонами.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {seasons.map((season) => (
            <Link key={season.id} to={`/${season.id}`} className="hover-scale">
              <Card className={`overflow-hidden h-full ${season.color} border-none shadow-lg`}>
                <div className="h-64 overflow-hidden">
                  <img 
                    src={season.image} 
                    alt={season.title} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold mb-2">{season.title}</h2>
                  <p className="text-gray-700 mb-4">{season.description}</p>
                  <Button className="bg-[#9b87f5] hover:bg-[#7E69AB]">
                    Узнать больше
                  </Button>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </MainLayout>
  );
};

export default Index;


import MainLayout from "@/components/layout/MainLayout";

const Spring = () => {
  return (
    <MainLayout>
      <div className="w-full bg-[#F2FCE2]">
        <div 
          className="h-96 bg-cover bg-center" 
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1490750967868-88aa4486c946?q=80&w=1920&auto=format')" }}
        >
          <div className="h-full w-full bg-black/30 flex items-center justify-center">
            <h1 className="text-6xl font-bold text-white animate-fade-in">Весна</h1>
          </div>
        </div>

        <div className="container max-w-4xl mx-auto py-16 px-4">
          <div className="bg-white rounded-lg shadow-xl p-8 mb-12">
            <h2 className="text-3xl font-bold mb-6 text-[#7E69AB]">Особенности весны</h2>
            <p className="text-lg text-gray-700 mb-6">
              Весна — время пробуждения природы после долгой зимы. Первые цветы, молодая зелень, 
              прилет птиц и теплое солнце создают особую атмосферу обновления и надежды.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
              <div className="bg-[#F2FCE2] p-6 rounded-lg shadow">
                <h3 className="text-xl font-semibold mb-3">Март</h3>
                <p>Начало весны, таяние снега и первые проталины</p>
              </div>
              <div className="bg-[#F2FCE2] p-6 rounded-lg shadow">
                <h3 className="text-xl font-semibold mb-3">Апрель</h3>
                <p>Цветение первых растений, появление листьев на деревьях</p>
              </div>
              <div className="bg-[#F2FCE2] p-6 rounded-lg shadow">
                <h3 className="text-xl font-semibold mb-3">Май</h3>
                <p>Расцвет природы, буйство зелени и ароматов цветов</p>
              </div>
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-6 text-[#7E69AB]">Весенние праздники</h2>
            <ul className="list-disc pl-6 text-lg text-gray-700">
              <li className="mb-2">8 марта — Международный женский день</li>
              <li className="mb-2">1 мая — Праздник весны и труда</li>
              <li className="mb-2">9 мая — День Победы</li>
              <li>Православная Пасха — подвижный праздник весны</li>
            </ul>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Spring;

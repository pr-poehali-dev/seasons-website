
import { Link } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import React from "react";

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col bg-[#F1F0FB]">
      <header className="py-4 px-6 border-b shadow-sm bg-white">
        <div className="container max-w-7xl mx-auto flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold text-primary">
            Времена года
          </Link>
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link to="/spring" className={navigationMenuTriggerStyle()}>
                    Весна
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link to="/summer" className={navigationMenuTriggerStyle()}>
                    Лето
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link to="/autumn" className={navigationMenuTriggerStyle()}>
                    Осень
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link to="/winter" className={navigationMenuTriggerStyle()}>
                    Зима
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </header>
      <main className="flex-1">
        {children}
      </main>
      <footer className="py-6 px-6 border-t bg-white">
        <div className="container max-w-7xl mx-auto text-center text-gray-500">
          <p>© 2024 Времена года. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default MainLayout;

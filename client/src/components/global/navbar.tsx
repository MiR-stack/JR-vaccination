import { Menu, Syringe } from "lucide-react";
import { Button } from "../ui/button";
import Menus from "./menus";
import { useState } from "react";

// TODO: create menus for mobile

function Navbar() {
  const [mobileMenu, setMobileMenu] = useState<boolean>(false);

  const handleOpen = () => {
    setMobileMenu(true);
  };

  const handleClose = () => {
    setMobileMenu(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-sm">
      <div className="container max-w-screen-xxl mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex gap-3">
          <Menu className="sm:hidden cursor-pointer" onClick={handleOpen} />
          <Menus mobile={{ isOpen: mobileMenu, close: handleClose }} />
          <a className="flex items-center justify-center" href="/">
            <Syringe className="h-6 w-6 mr-2 text-primary" />
            <span className="font-bold text-xl">Vaccination</span>
          </a>
        </div>
        <div className="flex items-center gap-4">
          <Menus />
          <Button asChild size="sm">
            <a href="/register">Register</a>
          </Button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;

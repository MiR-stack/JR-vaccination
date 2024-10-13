import { Syringe } from "lucide-react";
import { Button } from "../ui/button";

function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-sm">
      <div className="container max-w-screen-xxl mx-auto flex h-16 items-center justify-between px-4">
        <a className="flex items-center justify-center" href="/">
          <Syringe className="h-6 w-6 mr-2 text-primary" />
          <span className="font-bold text-xl">Vaccination</span>
        </a>
        <div className="flex items-center gap-4">
          <nav className="hidden md:flex space-x-4">
            <a
              className="text-sm font-medium hover:text-primary transition-colors"
              href="/"
            >
              Home
            </a>
            <a
              className="text-sm font-medium hover:text-primary transition-colors"
              href="/centers"
            >
              Centers
            </a>
            <a
              className="text-sm font-medium hover:text-primary transition-colors"
              href="/search"
            >
              Status
            </a>
          </nav>
          <Button asChild size="sm">
            <a href="/register">Register</a>
          </Button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;

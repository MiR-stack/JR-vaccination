function Footer() {
  return (
    <footer className="border-t bg-white/80 backdrop-blur-sm">
      <div className="container max-w-screen-xxl flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 mx-auto">
        <p className="text-xs text-gray-500">
          © 2024 Vaccination. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <a className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </a>
          <a className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </a>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;

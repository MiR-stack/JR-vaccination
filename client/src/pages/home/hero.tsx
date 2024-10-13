import { Button } from "@/components/ui/button";

function Hero() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gray-100">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
              Register for Your COVID-19 Vaccine
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
              Quick, easy, and secure. Protect yourself and your community by
              registering for the COVID-19 vaccine today.
            </p>
          </div>
          <div className="space-x-4">
            <Button size="lg" className="transition-transform hover:scale-105">
              <a href="/register">Register Now</a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="transition-transform hover:scale-105"
            >
              <a href="search">Check Status</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;

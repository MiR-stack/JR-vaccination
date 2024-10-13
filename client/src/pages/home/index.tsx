import Centers from "./centers";
import Contact from "./contact";
import Faq from "./faq";
import Hero from "./hero";

function index() {
  return (
    <main className="flex-1">
      <Hero />
      <Centers />
      <Faq />
      <Contact />
    </main>
  );
}

export default index;

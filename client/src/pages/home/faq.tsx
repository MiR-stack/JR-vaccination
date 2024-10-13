import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";

function Faq() {
  return (
    <section id="faq" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
      <div className="container px-4 md:px-6 mx-auto">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">
          Frequently Asked Questions
        </h2>
        <Accordion
          type="single"
          collapsible
          className="w-full max-w-3xl mx-auto"
        >
          {[
            {
              question: "How do I register for the vaccine?",
              answer:
                "You can register for the vaccine by clicking the 'Register Now' button at the top of this page. You'll need to provide some basic information and choose a vaccination center.",
            },
            {
              question: "Is the COVID-19 vaccine safe?",
              answer:
                "Yes, the COVID-19 vaccines have been thoroughly tested and proven to be safe and effective. They have undergone rigorous clinical trials and continue to be monitored for safety.",
            },
            {
              question: "What should I bring to my vaccination appointment?",
              answer:
                "Please bring a valid form of identification (such as your National ID card), your appointment confirmation, and wear a mask. If you have any medical conditions, bring a list of your current medications.",
            },
          ].map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index + 1}`}
              className="border-b border-gray-200 "
            >
              <AccordionTrigger className="text-left hover:text-primary transition-colors py-5 w-full flex justify-between font-semibold">
                {faq.question}
                <ChevronDown />
              </AccordionTrigger>
              <AccordionContent className="text-gray-500 pb-5">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

export default Faq;

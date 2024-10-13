import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone } from "lucide-react";

function Contact() {
  return (
    <section id="contact" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container max-w-screen-xxl px-4 md:px-6 mx-auto">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">
          Contact Us
        </h2>
        <div className="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
          {[
            {
              title: "Phone Support",
              icon: Phone,
              content: "Call us at: +1 (555) 123-4567",
              subContent: "Available Monday to Friday, 9AM - 5PM",
            },
            {
              title: "Email Support",
              icon: Mail,
              content: "Email us at: support@vaccinereg.com",
              subContent: "We aim to respond within 24 hours",
            },
          ].map((contact, index) => (
            <Card
              key={index}
              className="transition-all hover:shadow-lg bg-white/50 backdrop-blur-sm"
            >
              <CardHeader>
                <CardTitle className="flex items-center">
                  <contact.icon className="mr-2 h-5 w-5 text-primary" />
                  {contact.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>{contact.content}</p>
                <p className="mt-2 text-sm text-gray-500">
                  {contact.subContent}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Contact;

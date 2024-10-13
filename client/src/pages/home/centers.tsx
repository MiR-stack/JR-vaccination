import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getCenters } from "@/utils/center";
import getFormatedDate from "@/utils/getFormatedDate";
import { ChevronRight, MapPin } from "lucide-react";
import { useEffect, useState } from "react";

interface centerType {
  name: string;
  location: string;
  openTime: string;
  availableDate: Date;
}

function Centers() {
  const [centers, setCenters] = useState<centerType[]>([]);

  useEffect(() => {
    (async () => {
      const Centers = await getCenters({ pageSize: 3 });
      setCenters(Centers.data);
    })();
  }, []);

  return (
    <section id="centers" className="w-full py-12 md:py-24 lg:py-32 capitalize">
      <div className="container max-w-screen-xxl px-4 md:px-6 mx-auto">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8 text-center">
          Vaccine Centers
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {centers.map((center, index) => (
            <Card
              key={index}
              className="transition-all hover:shadow-lg bg-white/50 backdrop-blur-sm"
            >
              <CardHeader>
                <CardTitle className="text-xl">{center.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className=" items-center">
                  <span className="font-semibold">location:</span>
                  <MapPin className="mr-2 ml-1 h-4 w-4 text-primary inline-block" />
                  {center.location}
                </p>
                <p className="mt-2">
                  <span className="font-semibold">Open:</span> {center.openTime}
                </p>
                <p className="mt-2 font-semibold text-primary">
                  Next Available:{" "}
                  {getFormatedDate(new Date(center.availableDate))}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Button
            asChild
            size="lg"
            className="transition-transform hover:scale-105"
          >
            <a href="/centers" className="inline-flex items-center">
              View All Centers
              <ChevronRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}

export default Centers;

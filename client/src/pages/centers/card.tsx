import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import getFormatedDate from "@/utils/getFormatedDate";
import { CalendarIcon, ClockIcon, MapPinIcon } from "lucide-react";

export interface CenterType {
  id: string;
  name: string;
  location: string;
  openTime: string;
  availableDate: string;
}

function CenterCard({ center }: { center: CenterType }) {
  return (
    <Card key={center.id}>
      <CardHeader>
        <CardTitle className="capitalize text-xl">{center.name}</CardTitle>
      </CardHeader>
      <CardContent className="capitalize">
        <div className="space-y-2">
          <div className="items-center">
            <span className="font-semibold">Location:</span>
            <MapPinIcon className="w-4 h-4 mr-1 ml-2 inline-block" />
            <span>{center.location}</span>
          </div>
          <div className="flex items-center">
            <span className="font-semibold">Open:</span>
            <ClockIcon className="w-4 h-4 mr-1 ml-2" />
            <span>{center.openTime}</span>
          </div>
          <div className="flex items-center">
            <span className="font-semibold">Next Available: </span>
            <CalendarIcon className="w-4 h-4 mr-1 ml-2" />
            {getFormatedDate(new Date(center.availableDate))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default CenterCard;

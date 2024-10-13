import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import getFormatedDate from "@/utils/getFormatedDate";

export interface StatusType {
  isRegistered: boolean;
  status?: string;
  date?: Date;
  center?: string;
  openTime?: string;
  name?: string;
  location?: string;
  serial?: string;
}

function StatusCard({
  status,
  date,
  center,
  isRegistered,
  openTime,
  name,
  location,
  serial,
}: StatusType) {
  return (
    <Card className="max-w-md mx-auto mt-8">
      <CardHeader>
        <CardTitle className="text-xl font-bold capitalize">{name}</CardTitle>
      </CardHeader>
      <CardContent>
        {isRegistered ? (
          <div className="space-y-2 capitalize">
            <p>
              <span className="font-medium">Status: </span>
              {status}
            </p>
            <p>
              <span className="font-medium">Appointment Date: </span>
              {date && getFormatedDate(new Date(date))}
            </p>
            <p>
              <span className="font-medium">serial: </span>
              {serial}
            </p>
            <p>
              <span className="font-medium">Vaccination Center: </span>
              {center}
            </p>
            <p>
              <span className="font-medium">Open: </span>
              {openTime}
            </p>
            <p>
              <span className="font-medium">Location: </span>
              {location}
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            <p className="text-red-500">Not registered</p>
            <p>You are not currently registered for vaccination.</p>
            <Button asChild>
              <a href="/register">Register Now</a>
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
}

export default StatusCard;

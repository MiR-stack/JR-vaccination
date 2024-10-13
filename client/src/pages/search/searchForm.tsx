import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import { Search } from "lucide-react";
import { ChangeEvent, useState } from "react";

function SearchForm({ submit }: { submit: (nid: string) => void }) {
  const [nid, setNid] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNid(e.target.value);
  };

  const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    submit(nid);
  };

  return (
    <Card className="max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">
          Check Your Vaccination Status
        </CardTitle>
        <CardDescription>
          Enter your National ID (NID) to view your current status
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="nid">National ID (NID)</Label>
            <Input
              id="nid"
              placeholder="Enter your NID"
              value={nid}
              onChange={handleChange}
              required
            />
          </div>
          <Button type="submit" className="w-full">
            <Search className="mr-2 h-4 w-4" />
            Check Status
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}

export default SearchForm;

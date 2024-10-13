import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SearchIcon } from "lucide-react";
import { ChangeEvent, useState } from "react";

function Header({ search }: { search: (searchTerm: string) => void }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    search(searchTerm);
  };
  return (
    <>
      <h1 className="text-3xl font-bold mb-6">Available Vaccine Centers</h1>
      <form onSubmit={handleSearch} className="relative mb-6">
        <Input
          type="text"
          placeholder="Search by center name or location"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="pr-10"
        />
        <Button
          type="submit"
          variant="ghost"
          className="absolute right-0 top-0 h-full px-3"
          aria-label="Search"
        >
          <SearchIcon className="h-4 w-4" />
        </Button>
      </form>
    </>
  );
}

export default Header;

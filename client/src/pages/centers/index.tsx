import Header from "./header";
import { useEffect, useState } from "react";
import CenterCard, { CenterType } from "./card";
import { getCenters } from "@/utils/center";

function Centers() {
  const [centers, setCenters] = useState<null | CenterType[]>([]);

  useEffect(() => {
    (async () => {
      const Centers = await getCenters({ pageSize: 6 });

      setCenters(Centers.data);
    })();
  }, []);

  const search = async (searchTerm: string) => {
    const Centers = await getCenters({ searchTerm });
    setCenters(Centers.data);
  };

  return (
    <div className="container mx-auto p-4 flex-1">
      <Header search={search} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {centers && centers.map((center) => <CenterCard center={center} />)}
      </div>
    </div>
  );
}

export default Centers;

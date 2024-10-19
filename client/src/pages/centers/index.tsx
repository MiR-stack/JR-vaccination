import Header from "./header";
import { useEffect, useState } from "react";
import CenterCard, { CenterType } from "./card";
import { getCenters } from "@/utils/center";
import Pagination from "@/components/shared/pagination";
import usePagination from "@/hooks/usePagination";

interface MetaType {
  totalPage: number;
  total: number;
}

const PageSize = 6;

function Centers() {
  const [centers, setCenters] = useState<null | CenterType[]>([]);
  const [meta, setMeta] = useState<MetaType>();

  const { page, nextPage, prevPage, handlePage } = usePagination({
    totalPage: meta?.totalPage || 1,
  });

  useEffect(() => {
    (async () => {
      const Centers = await getCenters({ pageSize: PageSize, page });

      setCenters(Centers.data);
      setMeta(Centers.meta);
    })();
  }, [page]);

  const search = async (searchTerm: string) => {
    handlePage(1);
    const Centers = await getCenters({ searchTerm, page, pageSize: PageSize });
    setCenters(Centers.data);
    setMeta(Centers.meta);
  };

  console.log(meta);

  return (
    <div className="container mx-auto p-4 flex-1">
      <Header search={search} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {centers &&
          centers.map((center) => (
            <CenterCard key={center.name} center={center} />
          ))}
      </div>
      <Pagination
        currentPage={page}
        totalPage={meta?.totalPage || 1}
        setPage={handlePage}
        prevPage={prevPage}
        nextPage={nextPage}
      />
    </div>
  );
}

export default Centers;

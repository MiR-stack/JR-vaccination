import { useState } from "react";

function usePagination({ totalPage }: { totalPage: number }) {
  const [page, setPage] = useState<number>(1);

  const handlePage = (page: number) => {
    setPage(page);
  };

  const prevPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const nextPage = () => {
    if (page < totalPage) {
      setPage(page + 1);
    }
  };

  return { page, handlePage, nextPage, prevPage };
}

export default usePagination;

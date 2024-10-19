import { ChevronLeft, ChevronRight, Ellipsis } from "lucide-react";
import { Button } from "../ui/button";

interface paginationProps {
  currentPage: number;
  totalPage: number;
  limit?: number;
  setPage: (page: number) => void;
  prevPage: () => void;
  nextPage: () => void;
}

function Pagination({
  currentPage,
  totalPage,
  limit = 5,
  setPage,
  prevPage,
  nextPage,
}: paginationProps) {
  if (totalPage < 2) return;

  if (totalPage < limit) {
    limit = totalPage;
  }

  const middleNumber = Math.floor(limit / 2);
  let itemNumber = currentPage - middleNumber;
  if (itemNumber < 1) {
    itemNumber = 1;
  } else if (itemNumber + limit - 1 >= totalPage) {
    itemNumber = totalPage - limit + 1;
  }

  const isEnd = currentPage + middleNumber >= totalPage;
  return (
    <div className={`flex items-center justify-center py-5`}>
      <Button className="mr-1" variant={"outline"} onClick={prevPage}>
        <ChevronLeft />
      </Button>
      {Array(limit)
        .fill("")
        .map((_, index) => {
          const pageNumber = index + itemNumber;
          return (
            <Button
              variant={pageNumber === currentPage ? "outline" : "ghost"}
              key={pageNumber}
              onClick={() => setPage(pageNumber)}
            >
              {pageNumber}
            </Button>
          );
        })}
      {totalPage > limit && !isEnd && <Ellipsis />}
      <Button className="ml-1" variant={"outline"} onClick={nextPage}>
        <ChevronRight />
      </Button>
    </div>
  );
}

export default Pagination;

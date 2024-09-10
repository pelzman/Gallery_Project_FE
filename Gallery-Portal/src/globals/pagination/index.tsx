

type DataProp = {
  totalCount: number;
  items: any[];
};

interface PaginationProps {
  data: DataProp;
  currentPage: number;
  onPageChange: (page: number) => void;
  hasNext: boolean;
  hasPrevious: boolean;
  pageSize: number;
}

const Pagination = ({
  data,
  currentPage = 1,
  onPageChange,
  hasNext,
  hasPrevious,
  pageSize = 10,
}: PaginationProps) => {
  const totalItems = data?.totalCount || 0;
  const totalPage = Math.ceil(totalItems / pageSize) || 0;

  const handleNextPage = () => {
    if (currentPage < totalPage) onPageChange(currentPage + 1);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) onPageChange(currentPage - 1);
  };

  const handlePageClick = (page: number) => {
    onPageChange(page);
  };

  const getPaginationRange = () => {
    const range: (number | string)[] = [];
    const showPages = 0;
    const leftPages = Math.max(2, currentPage - showPages);
    const rightPages = Math.min(totalPage - 1, currentPage + showPages);

    range.push(1, 2);

    if (leftPages > 3) {
      range.push('...');
    }

    for (let i = leftPages; i <= rightPages; i++) {
      range.push(i);
    }

    if (rightPages < totalPage - 2) {
      range.push('...');
    }

    range.push(totalPage - 1, totalPage);

    return [...new Set(range)].filter(
      (page) => Number(page) > 0 && Number(page) <= totalPage,
    );
  };

  return (
    <div className="flex w-[100%] flex-row items-center h-[100%] justify-between self-center mr-auto ml-auto relative">
      <span className="text-[12px]">
        Showing {1 + (currentPage - 1) * pageSize} -{' '}
        {(currentPage - 1) * pageSize + data?.items?.length || 0} of{' '}
        {totalItems} total entries
      </span>
      <div className="flex justify-center items-center gap-x-[10px]">
        <button
          className={`w-[43px] h-[20px] ${!hasPrevious ? 'bg-slate-300 cursor-not-allowed' : 'bg-[#1E49E2]'} text-white rounded-md text-[10px]`}
          onClick={handlePrevPage}
          disabled={!hasPrevious}
        >
          Prev
        </button>

        {getPaginationRange().map((page, index) => (
          <button
            key={index}
            className={`w-[31px] text-[10px] h-[20px] ${page === currentPage ? 'bg-slate-300 cursor-not-allowed' : 'bg-[#1E49E2]'} text-white rounded-md`}
            onClick={() => typeof page === 'number' && handlePageClick(page)}
            disabled={typeof page !== 'number'}
          >
            {page}
          </button>
        ))}

        <button
          className={`w-[43px] h-[20px] text-[10px] ${!hasNext ? 'bg-slate-300 cursor-not-allowed' : 'bg-[#1E49E2]'} text-white rounded-md`}
          onClick={handleNextPage}
          disabled={!hasNext}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Pagination;

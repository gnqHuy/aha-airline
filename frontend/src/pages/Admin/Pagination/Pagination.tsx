import React from "react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
  const handlePageClick = (page: number) => {
    if (page >= 0 && page < totalPages) {
      onPageChange(page);
    }
  };

  const renderPageNumbers = () => {
    const pages = [];
    const maxVisiblePages = 10;

    if (totalPages <= maxVisiblePages) {
      // Hiển thị tất cả các trang nếu totalPages <= 10
      for (let i = 0; i < totalPages; i++) {
        pages.push(
          <button
            key={i}
            onClick={() => handlePageClick(i)}
            className={`mx-1 px-3 py-1 border rounded ${
              i === currentPage ? "bg-blue-500 text-white" : "bg-white text-black"
            }`}
          >
            {i + 1}
          </button>
        );
      }
    } else {
      // Rút gọn nếu totalPages > 10
      const startPage = Math.max(0, currentPage - 2);
      const endPage = Math.min(totalPages - 1, currentPage + 2);

      if (startPage > 0) {
        pages.push(
          <button
            key="start"
            onClick={() => handlePageClick(0)}
            className="mx-1 px-3 py-1 border rounded bg-white text-black"
          >
            1
          </button>
        );
        if (startPage > 1) {
          pages.push(<span key="dots-start" className="mx-1">...</span>);
        }
      }

      for (let i = startPage; i <= endPage; i++) {
        pages.push(
          <button
            key={i}
            onClick={() => handlePageClick(i)}
            className={`mx-1 px-3 py-1 border rounded ${
              i === currentPage ? "bg-blue-500 text-white" : "bg-white text-black"
            }`}
          >
            {i + 1}
          </button>
        );
      }

      if (endPage < totalPages - 1) {
        if (endPage < totalPages - 2) {
          pages.push(<span key="dots-end" className="mx-1">...</span>);
        }
        pages.push(
          <button
            key="end"
            onClick={() => handlePageClick(totalPages - 1)}
            className="mx-1 px-3 py-1 border rounded bg-white text-black"
          >
            {totalPages}
          </button>
        );
      }
    }

    return pages;
  };

  return (
    <div className="flex items-center justify-center mt-4">
      <button
        onClick={() => handlePageClick(0)}
        disabled={currentPage === 0}
        className="mx-1 px-3 py-1 border rounded"
      >
        «
      </button>
      <button
        onClick={() => handlePageClick(currentPage - 1)}
        disabled={currentPage === 0}
        className="mx-1 px-3 py-1 border rounded"
      >
        ‹
      </button>

      {renderPageNumbers()}

      <button
        onClick={() => handlePageClick(currentPage + 1)}
        disabled={currentPage === totalPages - 1}
        className="mx-1 px-3 py-1 border rounded"
      >
        ›
      </button>
      <button
        onClick={() => handlePageClick(totalPages - 1)}
        disabled={currentPage === totalPages - 1}
        className="mx-1 px-3 py-1 border rounded"
      >
        »
      </button>
    </div>
  );
};

export default Pagination;

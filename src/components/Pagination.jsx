import { useState } from "react";

const Pagination = ({ items, itemsPerPage }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(items.length / itemsPerPage);

  const currentItems = items.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handlePrev = () => {
    setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    setCurrentPage(currentPage + 1);
  };
  return (
    <section className="pagination__wrapper">
      <ul className="pagination__items">
        {currentItems.map((item, index) => (
          <li key={`Item-${index}`}>{item}</li>
        ))}
      </ul>
      <section className="pagination__items--list">
        <button
          className="pagination__page-btn"
          onClick={() => handlePrev()}
          disabled={currentPage === 1}
        >
          Prev
        </button>

        {[...Array(totalPages)].map((_, index) => (
          //convert number to array for looping
          <button
            key={`btn-${index}`}
            className={`pagination__page-btn ${
              currentPage === index + 1 ? "active" : ""
            }`}
            onClick={() => handlePageChange(index + 1)}
          >
            {index + 1}
          </button>
        ))}

        <button
          className="pagination__page-btn"
          onClick={() => handleNext()}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </section>
    </section>
  );
};

export default Pagination;

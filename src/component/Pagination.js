import React from "react";

const Pagination = ({ postPerPage, totoalPosts, paginated }) => {
  const pageNumber = [];
  for (let i = 1; i <= Math.ceil(totoalPosts / postPerPage); i++) {
    pageNumber.push(i);
  }

  return (
    <nav>
      <ul className="pagination">
        {pageNumber.map(number => (
          <li key={number} className="page-item">
            <a
              className="page-link"
              href="!#"
              onClick={() => paginated(number)}
            >
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;

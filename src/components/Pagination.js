import React from "react";

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];

  const pages = totalPosts/postsPerPage;

  for (let i = 1; i <= pages; i++) {
    pageNumbers.push(i);
  }

  return (
    <div>
      <nav>
        <ul className="pagination">
          {pageNumbers.map((number, index) => (
            <li className="page-item" key={index}>
              <a onClick={() => paginate(number)} href="!#" className="page-link">
                {number}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;

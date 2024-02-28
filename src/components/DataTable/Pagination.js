import React from 'react';
import { usePagination, DOTS } from './usePagination';

const Pagination = props => {
  const {
    onPageChange,
    onPageSizeChange,   // pagesize change added
    totalCount,
    siblingCount = 1,
    currentPage,
    pageSize,
  } = props;
  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize
  });

  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  let lastPage = paginationRange[paginationRange.length - 1];
  return (
    <>
     {/* change Page size  */}
      <div className="float-left" style={{marginTop:10}}>
        {/* <span>Page Size:</span> */}
        <select
          className="form-control form-control-sm "
          value={pageSize}
          onChange={(e) => {
            onPageSizeChange(Number(e.target.value));
            onPageChange(1);
          }}
        >
          {[10, 25, 50, 100].map((size) => (
            <option key={size} value={size}>
              {size}
            </option>
          ))}
        </select>
      </div>
      <ul className="float-right pagination-content">
        <li
          className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}
          onClick={() => currentPage !== 1 && onPrevious()}
        >
          <div className="page-link" style={{ fontSize: 24 }} aria-label="Previous">
            <span aria-hidden="true">&laquo;</span>
            <span className="sr-only">Previous</span>
          </div>
        </li>
        {paginationRange.map((pageNumber, index) => {
          if (pageNumber === DOTS) {
            return <li key={index} className="page-item dots">&#8230;</li>;
          }

          return (
            <li
              key={index}
              style={{ marginTop: 4 }}
              className={`page-item ${pageNumber === currentPage ? 'active' : ''}`}
              onClick={() => onPageChange(pageNumber)}
            >
              <a className="page-link"> {pageNumber}</a>
            </li>
          );
        })}
        <li
          className={`page-item ${currentPage === lastPage ? 'disabled' : ''} `}
          onClick={() => currentPage !== lastPage && onNext()}
        >
          <div className="page-link" style={{ fontSize: 24 }} aria-label="Next">
            <span aria-hidden="true">&raquo;</span>
            <span className="sr-only">Next</span>
          </div>
        </li>
      </ul>
    </>
  );
};

export default Pagination;

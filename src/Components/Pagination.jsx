import React from 'react'

const Pagination = ({pageIndex, currentPage, setCurrentPage, handlePageinationHigher, handlePageinationLower, FaAngleLeft, FaAngleRight}) => {
  return (
    <div className="paginationDiv">
            <FaAngleLeft onClick={handlePageinationLower} />
            {pageIndex.map((i) => (
              <div
                className={`box ${currentPage === i && "glow"}`}
                key={i}
                onClick={() => setCurrentPage(i)}
              ></div>
            ))}
            <FaAngleRight onClick={handlePageinationHigher} />
          </div>
  )
}

export default Pagination
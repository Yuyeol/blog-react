import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  .page {
    font-size: 20px;
    color: lightgray;
    display: flex;
    justify-content: center;
    align-items: center;
    span {
      padding: 0 10px;
      cursor: pointer;
    }
    .bold {
      font-weight: 600;
      color: grey;
    }
  }
`;

const Pagination = ({ currentPage, postsPerPage, postsNum, paginate }) => {
  const pageNums = [];

  for (let i = 1; i <= Math.ceil(postsNum / postsPerPage); i++) {
    pageNums.push(i);
  }
  return (
    <Container>
      {pageNums.map((pageNum) => (
        <div className="page" key={pageNum} onClick={() => paginate(pageNum)}>
          <span className={pageNum === currentPage ? "bold" : "normal"}>
            {pageNum}
          </span>
        </div>
      ))}
    </Container>
  );
};

export default Pagination;

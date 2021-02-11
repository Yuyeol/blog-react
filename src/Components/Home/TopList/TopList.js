import Pagination from "Components/Pagination/Pagination";
import React, { useRef, useState } from "react";
import styled from "styled-components";
import { PINK } from "styles";
import TopListItem from "./TopListItem";

const Container = styled.div`
  margin-top: 10px;
  border-top: 1px solid ${PINK};
`;

const TopList = ({ list }) => {
  // 페이지 계산공식
  const [currentPage, setCurrentPagen] = useState(1);
  const postsPerPage = useRef(5);
  const indexOfLastPost = currentPage * postsPerPage.current;
  const indexOfFirstPost = indexOfLastPost - postsPerPage.current;
  const reverseList = [...list.reverse()];
  const currentList = reverseList.slice(indexOfFirstPost, indexOfLastPost);
  const paginate = (pageNum) => {
    setCurrentPagen(pageNum);
  };
  return (
    <Container>
      {currentList.map((l) => (
        <TopListItem key={l.id} post={l} />
      ))}
      <Pagination
        postsPerPage={postsPerPage.current}
        postsNum={list.length}
        paginate={paginate}
        currentPage={currentPage}
      />
    </Container>
  );
};

export default TopList;

import Pagination from "Components/Pagination/Pagination";
import { useContextState } from "context";
import React, { useRef, useState } from "react";
import { withRouter } from "react-router-dom";
import styled from "styled-components";
import { PINK } from "styles";
import TopListItem from "./TopListItem";

const Container = styled.div`
  margin-top: 10px;
  border-top: 1px solid ${PINK};
  .list {
    border-bottom: 1px solid ${PINK};
  }
`;

const TopList = ({
  list,
  match: {
    params: { id },
  },
}) => {
  // 페이지 계산공식
  const [currentPage, setCurrentPagen] = useState(1);
  const postsPerPage = useRef(5);
  const indexOfLastPost = currentPage * postsPerPage.current;
  const indexOfFirstPost = indexOfLastPost - postsPerPage.current;
  const currentList = list.slice(indexOfFirstPost, indexOfLastPost);
  const paginate = (pageNum) => {
    setCurrentPagen(pageNum);
  };
  // 카테고리별 포스트 필터링
  const { posts } = useContextState();
  const filterPosts = posts.filter((p) => id === p.category);
  return (
    <Container>
      <div className="list">
        {filterPosts.length === 0
          ? currentList.map((l) => <TopListItem key={l.id} post={l} />)
          : filterPosts.map((l) => <TopListItem key={l.id} post={l} />)}
      </div>
      <Pagination
        postsPerPage={postsPerPage.current}
        postsNum={list.length}
        paginate={paginate}
        currentPage={currentPage}
      />
    </Container>
  );
};

export default withRouter(TopList);

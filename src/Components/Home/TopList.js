import { useContextState } from "context";
import React from "react";
import { withRouter } from "react-router-dom";
import styled from "styled-components";
import { BLACK, PINK } from "styles";

const Container = styled.div`
  padding: 10px 20px;
  font-size: 20px;
  border: 2px solid ${PINK};
  width: 100%;
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
  div {
    align-items: center;
    display: flex;
  }
  .openMenu {
    color: grey;
    cursor: pointer;
    &:hover {
      color: ${BLACK};
      transition: background-color 0.2s ease-in-out;
    }
  }
`;
const MenuTitle = styled.div`
  margin-right: 8px;
`;
const PostNum = styled.div`
  font-size: 18px;
  color: grey;
`;

const TopList = ({
  match: {
    path,
    params: { id },
  },
}) => {
  const { posts, saved } = useContextState();
  const filterPosts = posts.filter((p) => id === p.category);
  return (
    <Container>
      <div>
        <MenuTitle>
          {path === "/"
            ? "전체보기"
            : path === "/saved"
            ? "임시 저장함"
            : `${id}`}
        </MenuTitle>
        <PostNum>
          {path === "/"
            ? posts.length
            : path === "/saved"
            ? saved.length
            : path.includes("post")
            ? filterPosts.length
            : null}
          개의 글
        </PostNum>
      </div>
      <div className="openMenu">목록열기</div>
    </Container>
  );
};

export default withRouter(TopList);

import { useContextState } from "context";
import React, { useState } from "react";
import { AiFillCaretDown } from "react-icons/ai";
import { withRouter } from "react-router-dom";
import styled from "styled-components";
import { BLACK, PINK } from "styles";
import TopList from "./TopList";

const Container = styled.div`
  border: 2px solid ${PINK};
  margin-bottom: 10px;
  padding: 10px 20px;
  .bar {
    font-size: 20px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    div {
      align-items: center;
      display: flex;
    }
    .first-column {
      .menu-title {
        margin-right: 8px;
      }
      .post-num {
        font-size: 18px;
        color: grey;
      }
    }
    .second-column {
      color: grey;
      cursor: pointer;
      svg {
        margin-left: 5px;
        font-size: 0.9rem;
      }
      &:hover {
        color: ${BLACK};
        transition: color 0.2s ease-in-out;
      }
    }
  }
`;

const TopListBar = ({
  match: {
    path,
    params: { id },
  },
}) => {
  const { posts, saved } = useContextState();
  const filterPosts = posts.filter((p) => id === p.category);
  const [toggleList, setToggleList] = useState(false);
  const handleList = () => {
    setToggleList(!toggleList);
  };
  return (
    <Container>
      <div className="bar">
        <div className="first-column">
          <div className="menu-title">
            {path === "/"
              ? "전체보기"
              : path === "/saved"
              ? "임시 저장함"
              : `${id}`}
          </div>
          <div className="post-num">
            {path === "/"
              ? posts.length
              : path === "/saved"
              ? saved.length
              : path.includes("post")
              ? filterPosts.length
              : null}
            개의 글
          </div>
        </div>
        <div className="second-column" onClick={handleList}>
          목록열기
          <AiFillCaretDown />
        </div>
      </div>
      {toggleList && (
        <TopList
          list={path === "/" ? posts : path === "/saved" ? saved : "null"}
        />
      )}
    </Container>
  );
};

export default withRouter(TopListBar);

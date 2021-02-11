import BlankBoard from "Components/Post/BlankBoard";
import Post from "Components/Post/Post";
import { useContextState } from "context";
import React, { useRef, useState } from "react";
import styled from "styled-components";
import Category from "Components/Home/Category/Category";
import Pagination from "Components/Pagination/Pagination";
import MenuBar from "Components/TopMenu/MenuBar";
import TopListBar from "Components/Home/TopList/TopListBar";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Main = styled.div`
  padding: 0px 15px;
  background-color: white;
  display: flex;
  position: relative;
  background-color: white;
  width: 1000px;
  height: 100%;
`;
const PostBox = styled.div`
  width: 100%;
  height: 100%;
`;

const Saved = () => {
  const { saved } = useContextState();
  // 페이지 계산공식
  const [currentPage, setCurrentPagen] = useState(1);
  const postsPerPage = useRef(3);
  const indexOfLastPost = currentPage * postsPerPage.current;
  const indexOfFirstPost = indexOfLastPost - postsPerPage.current;
  const currentSaved = saved.reverse().slice(indexOfFirstPost, indexOfLastPost);
  const paginate = (pageNum) => {
    setCurrentPagen(pageNum);
  };
  return (
    <Container>
      <MenuBar />
      <Main>
        <Category />
        <PostBox>
          <TopListBar />
          {saved.length === 0 ? (
            <BlankBoard />
          ) : (
            currentSaved.map((s) => <Post key={s.id} saved={s} />)
          )}
          {saved.length > 0 && (
            <Pagination
              postsPerPage={postsPerPage.current}
              postsNum={saved.length}
              paginate={paginate}
              currentPage={currentPage}
            />
          )}
        </PostBox>
      </Main>
    </Container>
  );
};

export default Saved;

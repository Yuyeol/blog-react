import MenuHeader from "Components/Home/MenuHeader";
import BlankBoard from "Components/Post/BlankBoard";
import Post from "Components/Post/Post";
import { useContextState } from "context";
import React from "react";
import styled from "styled-components";
import TopList from "Components/Home/TopList";
import Category from "Components/Home/Category/Category";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Main = styled.div`
  padding: 0 15px;
  background-color: white;
  display: flex;
  position: relative;
  width: 1000px;
  background-color: white;
`;
const PostBox = styled.div`
  width: 100%;
  height: 100%;
`;

const Saved = () => {
  const { saved } = useContextState();
  return (
    <Container>
      <MenuHeader />
      <Main>
        <Category />
        <PostBox>
          <TopList />
          {saved.length === 0 ? (
            <BlankBoard />
          ) : (
            saved.map((s) => <Post key={s.id} saved={s} />)
          )}
        </PostBox>
      </Main>
    </Container>
  );
};

export default Saved;

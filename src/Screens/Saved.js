import MenuHeader from "Components/Home/MenuHeader";
import Category from "Components/Home/Category";
import BlankBoard from "Components/Post/BlankBoard";
import Post from "Components/Post/Post";
import { useContextState } from "context";
import React from "react";
import styled from "styled-components";
import TopList from "Components/Home/TopList";

const Container = styled.div`
  margin: 0px 140px;
  padding: 0 10px;
  background-color: white;
  display: flex;
  position: relative;
  background-color: white;
`;
const PostBox = styled.div`
  width: 100%;
  height: 100%;
`;

const Saved = () => {
  const { saved } = useContextState();
  return (
    <>
      <MenuHeader />
      <Container>
        <Category />
        <PostBox>
          <TopList />
          {saved.length === 0 ? (
            <BlankBoard />
          ) : (
            saved.map((s) => <Post key={s.id} saved={s} />)
          )}
        </PostBox>
      </Container>
    </>
  );
};

export default Saved;

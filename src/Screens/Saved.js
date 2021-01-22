import MenuHeader from "Components/Header/MenuHeader";
import Category from "Components/Home/Category";
import BlankBoard from "Components/Post/BlankBoard";
import Post from "Components/Post/Post";
import { useContextState } from "context";
import React from "react";
import styled from "styled-components";
import { PINK } from "styles";

const Container = styled.div`
  margin: 0px 140px;
  padding: 0 10px;
  background-color: white;
  display: flex;
  position: relative;
  background-color: white;
`;

const MenuBar = styled.div`
  padding: 10px 20px;
  font-size: 20px;
  border: 2px solid ${PINK};
  width: 100%;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
`;
const MenuTitle = styled.div`
  margin-right: 8px;
`;
const PostNum = styled.div`
  font-size: 18px;
  color: grey;
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
          <MenuBar>
            <MenuTitle>임시 저장함</MenuTitle>
            <PostNum>{saved.length}개의 글</PostNum>
          </MenuBar>

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

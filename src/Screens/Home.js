import styled from "styled-components";
// import BlankBoard from "Components/Home/BlankBoard";
import { useContextState } from "context";
import Category from "Components/Home/Category";
import Post from "Components/Post/Post";
import BlankBoard from "Components/Post/BlankBoard";
import MenuHeader from "Components/Header/MenuHeader";

const Container = styled.div`
  margin: 0px 140px;
  padding: 0px 10px;
  background-color: white;
  display: flex;
  position: relative;
  background-color: white;
`;

const PostBox = styled.div`
  width: 100%;
  height: 100%;
`;

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  const { posts } = useContextState();
  return (
    <>
      <MenuHeader />
      <Container>
        <Category />
        <PostBox>
          {posts.length === 0 ? (
            <BlankBoard />
          ) : (
            posts.map((p) => <Post key={p.id} post={p} />)
          )}
        </PostBox>
      </Container>
    </>
  );
};

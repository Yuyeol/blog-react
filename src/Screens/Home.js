import styled from "styled-components";
// import BlankBoard from "Components/Home/BlankBoard";
import { useState } from "context";
import BlankBoard from "Components/Home/Post/BlankBoard";
import PostL from "Components/Home/Post/PostL";
import Category from "Components/Home/Category";

const Container = styled.div`
  margin: 0px 140px;
  padding: 85px 10px 0 10px;
  background-color: white;
  display: flex;
  position: relative;
  background-color: white;
`;

const PostBox = styled.div`
  width: 100%;
  height: 100vh;
`;

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  const { posts } = useState();
  return (
    <Container>
      {/* <RedLine></RedLine> */}
      <Category />
      <PostBox>
        {posts.length === 0 ? (
          <BlankBoard />
        ) : (
          posts.map((post) => (
            <PostL
              key={post.id}
              id={post.id}
              title={post.title}
              contents={post.contents}
              imgURL={post.imgURL}
              date={post.date}
              like={post.like}
              comments={post.comments}
            />
          ))
        )}
      </PostBox>
    </Container>
  );
};

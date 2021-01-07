import styled from "styled-components";
// import BlankBoard from "Components/Home/BlankBoard";
import Profile from "Components/Home/Profile";
import PostL from "Components/Home/PostL";
import Category from "Components/Home/Category";
import { useState } from "context";

const Container = styled.div`
  margin: 100px 400px 0px 400px;
`;

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  const { posts } = useState();
  return (
    <Container>
      <Profile />
      <Category />
      {/* <BlankBoard /> */}
      {posts.map((post) => (
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
      ))}
    </Container>
  );
};

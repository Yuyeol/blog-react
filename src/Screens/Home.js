import styled from "styled-components";
// import BlankBoard from "Components/Home/BlankBoard";
import PostL from "Components/Home/PostL";
import { useState } from "context";
import BlankBoard from "Components/Home/BlankBoard";
import LeftBar from "Components/Home/LeftBar";
import { RED } from "styles";

const Container = styled.div`
  height: 100vh;
  margin: 0px 140px;
  padding: 85px 10px 0 10px;
  background-color: white;
  display: flex;
  position: relative;
`;
const RedLine = styled.div`
  right: 0px;
  top: 85px;
  position: absolute;
  width: 100%;
  height: 3px;
  background-color: ${RED};
`;

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  const { posts } = useState();
  return (
    <Container>
      {/* <RedLine></RedLine> */}
      <LeftBar />
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
    </Container>
  );
};

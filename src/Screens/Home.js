import styled from "styled-components";
// import BlankBoard from "Components/Home/BlankBoard";
import Category from "Components/Home/Category";
import Post from "Components/Home/Post";
import Profile from "Components/Home/Profile";

const Container = styled.div`
  margin: 100px 400px 0px 400px;
`;

// eslint-disable-next-line import/no-anonymous-default-export
export default () => (
  <Container>
    <Profile />
    <Category />
    {/* <BlankBoard /> */}
    <Post />
    <Post />
  </Container>
);

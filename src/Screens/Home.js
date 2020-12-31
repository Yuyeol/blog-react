import Category from "Components/Category";
import Profile from "Components/Profile";
import styled from "styled-components";

const Container = styled.div`
  margin: 100px 200px 0px 200px;
`;

// eslint-disable-next-line import/no-anonymous-default-export
export default () => (
  <Container>
    <Profile />
    <Category />
  </Container>
);

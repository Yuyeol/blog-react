import { useState } from "context";
import styled from "styled-components";
import Profile from "./Profile";
import WriteBtn from "./WriteBtn";

const Container = styled.div`
  position: absolute;
  left: 100px;
  top: 100px;
  width: 300px;
  padding: 0px 40px;
`;
const Write = styled.div`
  margin: 15px 0;
  display: flex;
  justify-content: center;
`;
const WriteBox = styled.div`
  width: 200px;
  font-size: 20px;
`;

const List = styled.div`
  font-size: 16px;
`;
const Title = styled.div`
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 10px;
  padding-bottom: 10px;
  border-bottom: 1.5px solid rgba(16, 24, 32, 0.15);
`;
const Item = styled.div``;
// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  const { posts } = useState();
  return (
    <Container>
      <Profile />
      <Write>
        {posts.length > 0 && (
          <WriteBox>
            <WriteBtn />
          </WriteBox>
        )}
      </Write>
      <List>
        <Title>카테고리</Title>
        <Item>전체보기 (0)</Item>
      </List>
    </Container>
  );
};

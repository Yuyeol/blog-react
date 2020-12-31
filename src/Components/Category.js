import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  position: fixed;
  left: 0;
  width: 200px;
  padding: 10px 20px;
  font-size: 20px;
`;
const WriteBox = styled.div`
  margin: 15px 0;
`;
const Write = styled.div`
  text-align: center;
  color: white;
  background-color: rgb(33, 201, 152);
  padding: 10px 0px;
  border-radius: 10px;
  font-weight: 600;
`;
const List = styled.ul``;
const Item = styled.li``;
const SLink = styled(Link)``;

// eslint-disable-next-line import/no-anonymous-default-export
export default () => (
  <Container>
    <WriteBox>
      <SLink to="/Write">
        <Write>새 글 쓰기</Write>
      </SLink>
    </WriteBox>
    <List>
      <Item>전체보기 (0)</Item>
    </List>
  </Container>
);

import styled from "styled-components";
import WriteBtn from "./WriteBtn";

const Container = styled.div`
  position: fixed;
  left: 0;
  width: 400px;
  padding: 10px 40px;
  font-size: 24px;
`;
const Write = styled.div`
  margin: 15px 0;
  display: flex;
  justify-content: center;
`;
const WriteBox = styled.div`
  width: 200px;
`;

const List = styled.ul``;
const Title = styled.div`
  font-size: 30px;
  font-weight: 600;
  margin-bottom: 10px;
  padding-bottom: 10px;
  border-bottom: 1.5px solid rgba(16, 24, 32, 0.15);
`;
const Item = styled.li``;
// eslint-disable-next-line import/no-anonymous-default-export
export default () => (
  <Container>
    <Write>
      <WriteBox>
        {/* BlankBoard일 때는 버튼 숨기자 */}
        <WriteBtn />
      </WriteBox>
    </Write>
    <List>
      <Title>카테고리</Title>
      <Item>전체보기 (0)</Item>
    </List>
  </Container>
);

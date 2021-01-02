import styled from "styled-components";
import WriteBtn from "./WriteBtn";

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
const List = styled.ul``;
const Item = styled.li``;
// eslint-disable-next-line import/no-anonymous-default-export
export default () => (
  <Container>
    <WriteBox>
      {/* BlankBoard일 때는 버튼 숨기자 */}
      <WriteBtn />
    </WriteBox>
    <List>
      <Item>전체보기 (0)</Item>
    </List>
  </Container>
);

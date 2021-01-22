import { useContextState } from "context";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";
import Profile from "./Profile";
import WriteBtn from "./WriteBtn";

const Container = styled.div`
  width: 300px;
  height: 100vh;
  padding-right: 10px;
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
  border-bottom: 1.5px solid #9a161f;
`;
const Item = styled.div`
  cursor: pointer;
`;
const SavedLink = styled(Link)``;

const Category = ({ match: { path } }) => {
  const { posts, saved } = useContextState();
  return (
    <Container>
      <Profile />
      <Write>
        {posts.length > 0 && !path === "/saved" && (
          <WriteBox>
            <WriteBtn />
          </WriteBox>
        )}
      </Write>
      <List>
        <Title>카테고리</Title>
        <Item>전체보기 ({posts.length})</Item>
        <SavedLink to="/saved">
          <Item>임시 저장함 ({saved.length})</Item>
        </SavedLink>
      </List>
    </Container>
  );
};
export default withRouter(Category);

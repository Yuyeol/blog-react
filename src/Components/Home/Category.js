import { useContextState } from "context";
import {
  RiFolderLine,
  RiFoldersLine,
  RiFolderWarningLine,
} from "react-icons/ri";
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
  svg {
    padding-top: 3px;
  }
`;
const Title = styled.div`
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 10px;
  padding-bottom: 10px;
  border-bottom: 1.5px solid #9a161f;
`;
const ListLink = styled(Link)`
  display: block;
  line-height: 1.5;
  font-weight: ${(props) => (props.selected ? "600" : "400")};
  &:hover {
    font-weight: 600;
  }
`;

const Category = ({
  match: {
    url,
    params: { id },
  },
}) => {
  const { categories, posts, saved } = useContextState();
  const filterPosts = posts.filter((p) => id === p.category);

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
        <ListLink to="/" selected={url === "/"}>
          <RiFoldersLine />
          전체보기 ({posts.length})
        </ListLink>
        {categories.map((category) => (
          <ListLink
            to={`/post/${category}`}
            key={category}
            selected={url === `/post/${category}`}
          >
            <RiFolderLine />
            {category}({filterPosts.length})
          </ListLink>
        ))}
        <ListLink to="/saved" selected={url === "/saved"}>
          <RiFolderWarningLine />
          임시 저장함 ({saved.length})
        </ListLink>
      </List>
    </Container>
  );
};
export default withRouter(Category);

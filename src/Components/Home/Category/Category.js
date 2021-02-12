import { useContextState } from "context";
import { useEffect, useRef, useState } from "react";
import {
  RiFolderLine,
  RiFoldersLine,
  RiFolderWarningLine,
} from "react-icons/ri";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";
import { BLACK, PINK } from "styles";
import Profile from "../Profile";
import WriteBtn from "../WriteBtn";
import EditCategory from "./EditCategory";

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
  display: flex;
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 10px;
  padding-bottom: 10px;
  border-bottom: 1.5px solid #9a161f;
  div {
    display: flex;
    align-items: center;
  }
  div:last-child {
    margin-left: 5px;
    font-size: 14px;
    background: ${PINK};
    box-shadow: 1.5px 1.5px 1.5px rgba(84, 84, 86, 0.15);

    color: ${BLACK};
    border-radius: 7px;
    padding: 0 5px;
    margin-top: 5px;
    cursor: pointer;
  }
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
  const { categories, posts } = useContextState();
  // 에디트 모달
  const [editOpen, setEditOpen] = useState(false);
  const edit = useRef(null);
  const modal = useRef(null);
  const toggleEdit = () => {
    setEditOpen(!editOpen);
  };
  const handleClickOutside = ({ target }) => {
    if (
      modal.current &&
      !modal.current.contains(target) &&
      edit.current &&
      !edit.current.contains(target)
    )
      setEditOpen(false);
  };
  useEffect(() => {
    window.addEventListener("click", handleClickOutside);
    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, []);
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
        <Title>
          <div>카테고리</div>
          <div onClick={toggleEdit} ref={edit}>
            수정
          </div>
        </Title>
        {editOpen && (
          <div ref={modal}>
            <EditCategory />
          </div>
        )}
        <ListLink to="/" selected={url === "/"}>
          <RiFoldersLine />
          전체보기
        </ListLink>
        {categories.map((category) => (
          <ListLink
            to={`/post/${category.item}`}
            key={category.id}
            selected={url === `/post/${category.item}`}
          >
            <RiFolderLine />
            {category.item}
          </ListLink>
        ))}
        <ListLink to="/saved" selected={url === "/saved"}>
          <RiFolderWarningLine />
          임시 저장함
        </ListLink>
      </List>
    </Container>
  );
};
export default withRouter(Category);

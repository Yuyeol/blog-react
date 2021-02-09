import styled from "styled-components";
import "codemirror/lib/codemirror.css";
import "@toast-ui/editor/dist/toastui-editor.css";
import { Editor } from "@toast-ui/react-editor";
import { useEffect, useRef, useState } from "react";
import { useContextDispatch, useContextState } from "context";
import { CREATE, COMPLETE, SAVE, UPDATE } from "reducer";
import { BLACK } from "styles";
import { AiFillCaretDown } from "react-icons/ai";
import WriteHeader from "Components/Write/WriteHeader";
import SelectCategories from "Components/Write/SelectCategories";

const Container = styled.div`
  padding: 100px;
  z-index: -1;
  background-color: white;
`;
const TitleBox = styled.div`
  display: flex;
  align-items: center;
`;
const Categories = styled.div`
  font-size: 24px;
  font-weight: 600;
  padding-bottom: 2px;
  color: grey;
  &:hover {
    color: ${BLACK};
    transition: color 0.5s ease;
  }
  svg {
    padding-top: 6px;
  }
`;
const Title = styled.input`
  font-size: 24px;
  font-weight: 600;
  border: none;
  margin: 15px 0;
  flex: 1;
  &:focus {
    outline: none;
  }
`;
const Bar = styled.div`
  font-size: 28px;
  color: lightgrey;
  padding-bottom: 2px;
  margin: 0 7px;
`;
const Write = ({
  match: {
    params: { id },
  },
}) => {
  const { posts, saved, categories } = useContextState();
  const dispatch = useContextDispatch();
  const editorRef = useRef(null);

  // 수정하기에 해당되는 포스트 가져오기
  const findPost = posts.find((p) => p.id === id);
  const findSaved = saved.find((s) => s.id === id);
  const findCategory = categories.find((c) =>
    findPost
      ? c.item === findPost.category
      : findSaved
      ? c.item === findSaved.category
      : null
  );
  // const findSavedCategory = categories.find(
  //   (c) => c.item === findSaved.category
  // );

  //포스트 종류 구분하여 데이터 받아오기 : title
  const [title, setTitle] = useState(
    findPost ? findPost.title : findSaved ? findSaved.title : ""
  );
  //포스트 종류 구분하여 데이터 받아오기 : contents
  const [contents, setContents] = useState(
    findPost ? findPost.contents : findSaved ? findSaved.contents : ""
  );

  const [category, setCategory] = useState(
    findPost ? findPost.category : findSaved ? findSaved.category : ""
  );

  // 발행하기 버튼
  const handleSubmit = () => {
    if (findPost) {
      // Update Post
      dispatch({
        type: UPDATE,
        payload: {
          id,
          title,
          contents,
          like: findPost.like,
          comments: findPost.comments,
          category,
        },
      });
    } else {
      // Publish Saved
      if (findSaved) {
        dispatch({
          type: COMPLETE,
          payload: { id, title, contents, category },
        });
        // Publish Post
      } else {
        dispatch({
          type: CREATE,
          payload: { title, contents, category },
        });
      }
    }
  };
  // 임시저장 버튼
  const handleSave = () => {
    // Create SAVE
    if (findSaved) {
      dispatch({
        type: SAVE,
        payload: { title, contents, id, category },
      });
      // Update SAVE
    } else {
      dispatch({
        type: SAVE,
        payload: { title, contents, category },
      });
    }
  };

  // 입력시 스테이트에 저장
  const handleTitle = ({ target: { value } }) => {
    setTitle(value);
  };
  const handleContents = () => {
    const contents = editorRef.current.getInstance().getHtml();
    setContents(contents);
  };
  const handleCategory = ({ target: { innerText } }) => {
    setCategory(innerText);
  };

  // 카테고리 셀렉트박스 모달
  const [categoryOpen, setCategoryOpen] = useState(false);
  const categoriesRef = useRef(null);
  const toggleCategories = () => {
    setCategoryOpen(!categoryOpen);
  };
  const handleClickOutside = ({ target }) => {
    if (categoriesRef.current && !categoriesRef.current.contains(target))
      setCategoryOpen(false);
  };
  useEffect(() => {
    window.addEventListener("click", handleClickOutside);
    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <Container>
      <WriteHeader
        handleSubmit={handleSubmit}
        handleSave={handleSave}
        findPost={findPost}
      />
      <TitleBox>
        <Categories onClick={toggleCategories} ref={categoriesRef}>
          {category ? category : "카테고리"}
          <AiFillCaretDown />
        </Categories>
        {categoryOpen && <SelectCategories handleCategory={handleCategory} />}

        <Bar>I</Bar>
        <Title placeholder="제목" onChange={handleTitle} value={title} />
      </TitleBox>
      <Editor
        previewStyle="vertical"
        height="70vh"
        initialEditType="wysiwyg"
        initialValue={contents}
        placeholder="본문"
        onChange={handleContents}
        ref={editorRef}
      />
    </Container>
  );
};

export default Write;

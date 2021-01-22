import styled from "styled-components";
import "codemirror/lib/codemirror.css";
import "@toast-ui/editor/dist/toastui-editor.css";
import { Editor } from "@toast-ui/react-editor";
import { useRef, useState } from "react";
import { useContextDispatch, useContextState } from "context";
import WriteHeader from "Components/Header/WriteHeader";
import { CREATE, COMPLETE, SAVE, UPDATE } from "reducer";

const Container = styled.div`
  padding: 100px;
  z-index: -1;
  background-color: white;
`;
const Title = styled.input`
  font-size: 24px;
  font-weight: 600;
  border: none;
  margin: 15px 0;
`;

const Write = ({
  match: {
    params: { id },
  },
}) => {
  const { posts, saved } = useContextState();
  const dispatch = useContextDispatch();
  const editorRef = useRef(null);

  // 수정하기에 해당되는 포스트 가져오기
  const findPost = posts.find((p) => p.id === id);
  const findSaved = saved.find((s) => s.id === id);

  //포스트 종류 구분하여 데이터 받아오기 : title
  const [title, setTitle] = useState(
    findPost ? findPost.title : findSaved ? findSaved.title : ""
  );
  //포스트 종류 구분하여 데이터 받아오기 : contents
  const [contents, setContents] = useState(
    findPost ? findPost.contents : findSaved ? findSaved.contents : ""
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
        },
      });
    } else {
      // Create Post
      if (findSaved) {
        console.log("dsafwef");
        dispatch({ type: COMPLETE, payload: { id, title, contents } });
      } else {
        dispatch({
          type: CREATE,
          payload: { title, contents },
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
        payload: { title, contents, id },
      });
    } else {
      dispatch({
        type: SAVE,
        payload: { title, contents },
      });
    }
  };

  const handleTitle = (e) => {
    const title = e.target.value;
    setTitle(title);
  };
  const handleContents = () => {
    const contents = editorRef.current.getInstance().getHtml();
    setContents(contents);
  };

  return (
    <Container>
      <WriteHeader
        handleSubmit={handleSubmit}
        handleSave={handleSave}
        findPost={findPost}
      />
      <Title placeholder="제목" onChange={handleTitle} value={title} />
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

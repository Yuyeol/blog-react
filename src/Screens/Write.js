import styled from "styled-components";
import "codemirror/lib/codemirror.css";
import "@toast-ui/editor/dist/toastui-editor.css";
import { Editor } from "@toast-ui/react-editor";
import { useRef, useState } from "react";
import { useContextDispatch, useContextState } from "context";
import { CREATE, UPDATE } from "actions";
import WriteHeader from "Components/Header/WriteHeader";

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
  const { posts } = useContextState();
  const findPost = posts.find((post) => post.id === id);

  const [title, setTitle] = useState(findPost ? findPost.title : "");
  const [contents, setContents] = useState(findPost ? findPost.contents : "");
  const dispatch = useContextDispatch();
  const editorRef = useRef(null);
  const handleSubmit = () => {
    if (findPost) {
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
      dispatch({
        type: CREATE,
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
        buttonName={findPost ? "수정하기" : "발행하기"}
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

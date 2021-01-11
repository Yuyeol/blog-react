import styled from "styled-components";
import "codemirror/lib/codemirror.css";
import "@toast-ui/editor/dist/toastui-editor.css";
import { Editor } from "@toast-ui/react-editor";
import { useRef, useState } from "react";
import { useDispatch } from "context";
import WriteHeader from "Components/WriteHeader";
import { CREATE } from "actions";

const Container = styled.div`
  margin: 100px;
  z-index: -1;
`;
const Title = styled.input`
  font-size: 32px;
  font-weight: 600;
  border: none;
  margin: 15px 0;
`;

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  // const [title, setTitle] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");
  const dispatch = useDispatch();
  const editorRef = useRef(null);
  const handleSubmit = () => {
    dispatch({
      type: CREATE,
      payload: { title, contents },
    });
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
      <WriteHeader handleSubmit={handleSubmit} />
      <Title placeholder="제목" onChange={handleTitle} />
      <Editor
        previewStyle="vertical"
        height="70vh"
        initialEditType="wysiwyg"
        placeholder="글쓰기"
        onChange={handleContents}
        ref={editorRef}
      />
    </Container>
  );
};

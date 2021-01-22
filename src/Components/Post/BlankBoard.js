import WriteBtn from "Components/Home/WriteBtn";
import { useContextState } from "context";
import { AiFillFolderOpen } from "react-icons/ai";
import { withRouter } from "react-router-dom";
import styled from "styled-components";
import { PINK, RED } from "styles";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  border: 2px solid #f4efea;
`;
const TextBox = styled.div`
  text-align: center;
  svg {
    font-size: 200px;
    color: ${PINK};
  }
`;
const BigText = styled.div`
  font-size: 32px;
  color: #9a161f;
`;
const Text = styled.div`
  font-size: 24px;
  margin-top: 10px;
`;
const WriteBox = styled.div`
  margin: 20px 0;
  width: 250px;
  font-size: 28px;
`;

const BlankBoard = ({ match: { path } }) => {
  return (
    <Container>
      <TextBox>
        <AiFillFolderOpen />
        <BigText>
          {path === "/"
            ? "아직 작성된 글이 없습니다."
            : "아직 저장된 글이 없습니다."}
        </BigText>
        {path === "/" ? (
          <Text>
            문득 스치는 생각이나 기분, 일기 등 다양한 이야기로
            <br /> 나만의 공간을 채워보세요!
          </Text>
        ) : (
          <Text>
            작성중인 글을 임시저장하는 기능을
            <br /> 필요에 따라 활용해 보세요!
          </Text>
        )}
      </TextBox>
      {path === "/" && (
        <WriteBox>
          <WriteBtn />
        </WriteBox>
      )}
    </Container>
  );
};

export default withRouter(BlankBoard);

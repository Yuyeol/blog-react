import styled from "styled-components";
import WriteBtn from "./WriteBtn";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 500px;
  border: 2px solid #f4efea;
`;
const TextBox = styled.div`
  text-align: center;
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

// eslint-disable-next-line import/no-anonymous-default-export
export default () => (
  <Container>
    <TextBox>
      <BigText>아직 작성된 글이 없습니다.</BigText>
      <Text>
        문득 스치는 생각이나 기분, 일기 등 다양한 이야기로
        <br /> 나만의 공간을 채워보세요!
      </Text>
    </TextBox>
    <WriteBox>
      <WriteBtn />
    </WriteBox>
  </Container>
);

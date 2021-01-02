import styled from "styled-components";
import WriteBtn from "./WriteBtn";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 500px;
`;
const TextBox = styled.div`
  text-align: center;
`;
const BigText = styled.div`
  font-size: 36px;
  color: #1a7a4c;
`;
const Text = styled.div`
  font-size: 28px;
  margin-top: 10px;
`;
const WriteBox = styled.div`
  margin: 15px 0;
  width: 300px;
  font-size: 36px;
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

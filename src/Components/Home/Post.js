import styled from "styled-components";

const Container = styled.div`
  padding: 50px 0;
  border-bottom: 1.5px solid rgba(16, 24, 32, 0.15);
`;
const PictureBox = styled.div``;
const Picture = styled.img`
  width: 100%;
`;
const Title = styled.div`
  font-weight: 600;
  font-size: 40px;
  margin: 15px 0;
`;
const Contents = styled.div`
  font-size: 24px;
  line-height: 1.5;
`;
const StatusBox = styled.div`
  margin-top: 15px;
  display: flex;
`;
const Date = styled.div``;
const Like = styled.div``;
const Comments = styled.div``;
const Dot = styled.div`
  padding: 0 8px;
`;

// eslint-disable-next-line import/no-anonymous-default-export
export default () => (
  <Container>
    <PictureBox>
      <Picture src="https://postfiles.pstatic.net/MjAyMTAxMDRfMTYx/MDAxNjA5NzQ3NTY4OTYy.HGoHVtVfo3EF5VJJaxTO2w40BkHhmq2msClcmLnEtAsg.EOMyy5P1sU4Mul7jx-Z2Q-0uZs74Sjq3e7oxi0OM5Qgg.PNG.uy23/%EC%A0%9C%EB%AA%A9-%EC%97%86%EC%9D%8C-1.png?type=w773" />
    </PictureBox>
    <Title>이것은 배경화면 로고이다.</Title>
    <Contents>
      포토샵으로 만들었다
      <br />
      그렇다
    </Contents>
    <StatusBox>
      <Date>2020년 1월 4일</Date>
      <Dot>•</Dot>
      <Like>좋아요 3개</Like>
      <Dot>•</Dot>
      <Comments>댓글 1개</Comments>
    </StatusBox>
  </Container>
);

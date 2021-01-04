import { Link } from "react-router-dom";
import styled from "styled-components";

const Profile = styled.div`
  display: flex;
  padding: 40px 0;
  border-bottom: 1.5px solid rgba(16, 24, 32, 0.15);
`;
const PictureBox = styled.div`
  margin-right: 50px;
`;
const Picture = styled.img`
  width: 150px;
  border-radius: 50%;
`;
const InfoColumn = styled.div`
  display: flex;
  flex-direction: column;
`;
const NicknameBox = styled.div`
  display: flex;
  align-items: center;
`;
const Nickname = styled.div`
  font-size: 25px;
  margin-right: 20px;
`;
const EditProfile = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4px 8px;
  border-radius: 10px;
  font-weight: 600;
  border: 3px solid rgba(16, 24, 32, 0.15);
`;
const StatusBox = styled.div`
  display: flex;
  margin: 15px 0;
`;
const Status = styled.div`
  margin-right: 10px;
  text-align: center;
`;
const StatusItem = styled.div`
  font-weight: 600;
  margin-bottom: 5px;
`;
const StatusValue = styled.div``;
const Intro = styled.div``;
const SLink = styled(Link)``;

// eslint-disable-next-line import/no-anonymous-default-export
export default () => (
  <Profile>
    <PictureBox>
      <Picture src="https://media.vlpt.us/images/juy23/profile/ed48f224-7e9f-4eb8-9dbc-e5d857fd3b66/social.png?w=120" />
    </PictureBox>
    <InfoColumn>
      <NicknameBox>
        <Nickname>URE</Nickname>
        <SLink to="/settings">
          <EditProfile>설정</EditProfile>
        </SLink>
      </NicknameBox>
      <StatusBox>
        <Status>
          <StatusItem>게시글</StatusItem>
          <StatusValue>5</StatusValue>
        </Status>
        <Status>
          <StatusItem>일 방문자</StatusItem>
          <StatusValue>1</StatusValue>
        </Status>
        <Status>
          <StatusItem>총 방문자</StatusItem>
          <StatusValue>17</StatusValue>
        </Status>
      </StatusBox>
      <Intro>
        URE의 블로그입니다.
        <br />
        URE의 블로그입니다.
        <br />
        ...더보기 기능 추가
      </Intro>
    </InfoColumn>
  </Profile>
);

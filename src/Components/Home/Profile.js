import { Link } from "react-router-dom";
import styled from "styled-components";

const Profile = styled.div`
  border-bottom: 1.5px solid rgba(16, 24, 32, 0.15);
`;
const PictureBox = styled.div`
  display: flex;
  justify-content: center;
`;
const Picture = styled.img`
  width: 220px;
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

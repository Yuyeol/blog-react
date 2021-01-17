import { ImCog } from "react-icons/im";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { PROFILE } from "styles";

const Profile = styled.div`
  border-bottom: 1.5px solid #f4efea;
  border: 2px solid #f4efea;
`;
const PictureBox = styled.div`
  display: flex;
  justify-content: center;
  padding: 15px;
`;
const Picture = styled.img`
  width: 190px;
`;
const Info = styled.div`
  padding: 0 10px;
`;
const NicknameBox = styled.div`
  display: flex;
  align-items: center;
`;
const Nickname = styled.div`
  font-size: 25px;
  margin-right: 10px;
`;
const EditProfile = styled.div`
  color: grey;
  display: flex;
  padding-top: 4px;
`;
const Intro = styled.div`
  line-height: 1.5;
  padding: 10px 0;
`;
const SLink = styled(Link)``;

// eslint-disable-next-line import/no-anonymous-default-export
export default () => (
  <Profile>
    <PictureBox>
      <Picture src={PROFILE} />
    </PictureBox>
    <Info>
      <NicknameBox>
        <Nickname>URE</Nickname>
        <SLink to="/settings">
          <EditProfile>
            <ImCog />
          </EditProfile>
        </SLink>
      </NicknameBox>
      <Intro>
        URE의 블로그입니다.
        <br />
        URE의 블로그입니다.
        <br />
        ...더보기 기능 추가
      </Intro>
    </Info>
  </Profile>
);

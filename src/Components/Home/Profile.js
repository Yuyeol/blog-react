import { ImCog } from "react-icons/im";
import { Link } from "react-router-dom";
import styled from "styled-components";
import profileImg from "Assets/profile.jpg";
import { BLACK } from "styles";

const Profile = styled.div`
  border-bottom: 1.5px solid #f4efea;
  border: 2px solid #f4efea;
`;
const PictureBox = styled.div`
  display: flex;
  justify-content: center;
  padding: 10px;
  .picture {
    width: 100%;
  }
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
  svg {
    &:hover {
      color: ${BLACK};
      transition: background-color 0.2s ease-in-out;
    }
  }
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
      <img className="picture" src={profileImg} alt="PROFILE" />
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

import { ImCog } from "react-icons/im";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { BLACK } from "styles";
import { useContextState } from "context";

const Container = styled.div`
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

const Profile = () => {
  const { profile } = useContextState();

  return (
    <Container>
      <PictureBox>
        <img className="picture" src={profile.profileImg} alt="PROFILE" />
      </PictureBox>
      <Info>
        <NicknameBox>
          <Nickname>{profile.nickName}</Nickname>
          <SLink to="/settings">
            <EditProfile>
              <ImCog />
            </EditProfile>
          </SLink>
        </NicknameBox>
        <Intro>{profile.introduce}</Intro>
      </Info>
    </Container>
  );
};

export default Profile;

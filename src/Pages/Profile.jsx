import styled from "styled-components";

const MainContainer = styled.div`
      height: 70vh;
      display: block;
      margin-left: 47vw;
`;

const ProfilePicture = styled.div`
      width: 150px;
      height: 150px;
      background-color: gray;
      border-radius: 50%;
      margin-top: 10vh;
`;

const ProfileName = styled.div`
      margin-left: 40px;
      font-weight: 700;
`;

const Profile = () => {
  return (
    <MainContainer>
           <ProfilePicture></ProfilePicture>
           <ProfileName>John Doe</ProfileName>
    </MainContainer>
  )
}

export default Profile
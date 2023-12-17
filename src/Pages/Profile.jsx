import styled from "styled-components";

const MainContainer = styled.div`
      height: 80vh;
`;

const profilePicture = styled.div`
      width: 150px;
      height: 150px;
      background-color: gray;
      border-radius: 50%;
`;

const profileName = styled.div`
      
`;

const Profile = () => {
  return (
    <MainContainer>
           <profilePicture>pfp</profilePicture>
           <profileName>John Doe</profileName>
    </MainContainer>
  )
}

export default Profile
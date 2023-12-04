import styled from 'styled-components';

const MainContainer = styled.div`
      height: 100vh;
      display: grid;
`;

const MainTitle = styled.div`
     font-weight: 800;
     font-size: 3rem;
     text-align: center;
     padding-top: 10vh;
`;

const ButtonContainer = styled.div`
     display: flex;
     margin-left: 45vw;
`;
const BountiesButton = styled.div`
      color: black;
      background-color: darkgray;
      cursor: pointer;

      width: 5vw;
      height: 4vh;
`;

const ProfileButton = styled.div`
      padding-left: 4vw;
      color: black;
      background-color: darkgray;
      cursor: pointer;

      width: 5vw;
      height: 4vh;
`;

const Home = () => {
  return (
    <MainContainer>
           <MainTitle>Welcome</MainTitle>
           <ButtonContainer>
               <BountiesButton>Bounties</BountiesButton>
               <ProfileButton>Profile</ProfileButton>
           </ButtonContainer>
             
    </MainContainer>
  )
}

export default Home
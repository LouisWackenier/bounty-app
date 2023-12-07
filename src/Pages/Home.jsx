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
     margin-left: 38vw;
     text-align: center;
`;
const BountiesButton = styled.div`
      color: black;
      background-color: darkgray;
      cursor: pointer;
      
      padding-top: 10px;
      width: 150px;
      height: 40px;
      border-radius: 5px;

      &:hover {
            background-color: white;
      }
`;

const ProfileButton = styled.div`
      color: black;
      background-color: darkgray;
      cursor: pointer;
      margin-left: 5vw;

      padding-top: 10px;
      width: 150px;
      height: 40px;
      border-radius: 5px;

      &:hover {
            background-color: white;
      }
`;

const SubTitle = styled.div`
       font-size: 3vh;
       text-align: center;
`;

const Home = () => {
  return (
    <MainContainer>
           <MainTitle>Welcome</MainTitle>
           <SubTitle>Get your bounties here</SubTitle>
           <ButtonContainer>
               <BountiesButton>Bounties</BountiesButton>
               <ProfileButton>Profile</ProfileButton>
           </ButtonContainer>
    </MainContainer>
  )
}

export default Home
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


const BountiesButton = styled.div`
      height: 100px;
      width: 300px;
      background-color: darkgray;
      cursor: pointer;
`;

const ProfileButton = styled.div`
      padding: 100px 100px 50px 100px;
      background-color: darkgray;
      cursor: pointer;
      text-align: center;
`;

const Home = () => {
  return (
    <MainContainer>
           <MainTitle>Welcome</MainTitle>
             <BountiesButton>Bounties</BountiesButton>
             <ProfileButton>Profile</ProfileButton>
    </MainContainer>
  )
}

export default Home
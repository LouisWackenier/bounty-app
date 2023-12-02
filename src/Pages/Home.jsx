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
      cursor: pointer;
      text-align: center;
      display: block;
`;

const ProfileButton = styled.div`
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
import styled from 'styled-components';

const MainContainer = styled.div`
        
`;

const MainTitle = styled.div`
     font-weight: 800;
     font-size: 3rem;
     text-align: center;
     padding-top: 10vh;
`;

const Home = () => {
  return (
    <MainContainer>
           <MainTitle>This is going to be the home page</MainTitle>
    </MainContainer>
  )
}

export default Home
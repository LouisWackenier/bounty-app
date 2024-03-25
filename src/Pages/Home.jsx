import styled from 'styled-components';

//REACT ROUTER DOM
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <MainContainer>
           <MainTitle>Welcome</MainTitle>
           <SubTitle>Claim/Collect your bounties here</SubTitle>
           <ButtonContainer>
               <Link to="BountySection"><BountiesButton>Bounties</BountiesButton></Link>
               <Link to="Profile"><ProfileButton>Profile</ProfileButton></Link>
           </ButtonContainer>
    </MainContainer>
  )
}

export default Home

const MainContainer = styled.div`
      height: 80vh;
      display: grid;
`;

const MainTitle = styled.div`
     font-weight: 800;
     font-size: 3rem;
     text-align: center;
     padding-top: 5vh;
`;

const ButtonContainer = styled.div`
     display: flex;
     margin-left: 38vw;
     text-align: center;
     font-weight: 1000;
`;
const BountiesButton = styled.div`
      color: black;
      background-color: darkgray;
      border: 3px solid darkblue;
      cursor: pointer;
      
      padding-top: 10px;
      width: 150px;
      height: 40px;
      border-radius: 5px;

      transition: background-color 0.5s;
      transition: color 0.5s;
      transition: border 0.5s;

      &:hover {
            background-color: white;
            color: gray;
            border: 3px solid white;
      }
`;

const ProfileButton = styled.div`
      color: black;
      background-color: darkgray;
      border: 3px solid darkblue;
      cursor: pointer;
      margin-left: 5vw;

      padding-top: 10px;
      width: 150px;
      height: 40px;
      border-radius: 5px;

      transition: background-color 0.5s;
      transition: color 0.5s;
      transition: border 0.5s;

      &:hover {
            background-color: white;
            color: gray;
            border: 3px solid white;
      }
`;

const SubTitle = styled.div`
       font-size: 3vh;
       text-align: center;
`;
import styled from "styled-components";

const MainContainer = styled.div`
      height: 80vh;
`;

const BountyContainer = styled.div`
      width: 250px;
      height: 300px;
      background-color: gray;

      margin-left: 5vw;
      margin-top: 5vh;


`;

const BountySection = () => {
  return (
    <MainContainer>
         {/*Bounty comes here*/}   
         <BountyContainer>

         </BountyContainer>
    </MainContainer>
  )
}

export default BountySection
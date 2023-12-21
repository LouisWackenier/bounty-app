import styled from "styled-components";

const MainContainer = styled.div`
      height: 80vh;
`;

const BountyContainer = styled.div`
      width: 250px;
      height: 300px;

      margin-left: 8vw;
      margin-top: 2vh;
      text-align: center;
`;

const BountyPrice = styled.div`

      background-color: gray;
      color: black;
      font-weight: 700;
`;

const BountyPicture = styled.div`
      width: 250px;
      height: 150px; 
      padding-top: 100px; 

      background-color: gray;
      color: black;
      font-weight: 500;
`;

const BountyPriceSelect = styled.div`
      height: 40px;

      background-color: gray;
      color: black;
      font-weight: 700;
`;

const BountySection = () => {
  return (
    <MainContainer>
         {/*Bounty comes here*/}   
         <BountyContainer>
               <BountyPicture>Image goes here</BountyPicture>
               <BountyPrice>100</BountyPrice>
               <BountyPriceSelect>Select the bounty price</BountyPriceSelect>
         </BountyContainer>
         {/*Bounty comes here*/}   
         <BountyContainer>
               <BountyPicture>Image goes here</BountyPicture>
               <BountyPrice>100</BountyPrice>
               <BountyPriceSelect>Select the bounty price</BountyPriceSelect>
         </BountyContainer>
    </MainContainer>
  )
}

export default BountySection
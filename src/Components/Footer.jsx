import styled from 'styled-components';

const MainContainer = styled.div`
    display: flex;
    position: fixed;
    bottom: 0%;
    width: 100vw;
    background-color: transparent;
    background-color: black;
`;

const FooterText = styled.h3`
    justify-content: flex-end;
    background-color: transparent;
`;

const Footer = () => {
  return (
    <MainContainer>
          <FooterText>Louis Wackenier@All rights reserved 2023</FooterText>
    </MainContainer>
  )
}

export default Footer
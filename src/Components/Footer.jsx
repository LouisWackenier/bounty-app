import styled from 'styled-components';

const MainContainer = styled.div`
    display: flex;
`;

const FooterText = styled.h3`
    justify-content: flex-end;
`;

const Footer = () => {
  return (
    <MainContainer>
          <FooterText>Louis Wackenier@All rights reserved 2023</FooterText>
    </MainContainer>
  )
}

export default Footer
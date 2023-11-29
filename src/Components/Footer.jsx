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
          <FooterText>Footer comes here</FooterText>
    </MainContainer>
  )
}

export default Footer
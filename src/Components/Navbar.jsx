import styled from "styled-components";

const MainContainer = styled.div`
       width: 100vw;
       height: 10vh;
`;

const NavbarButton = styled.div``;

const LoginButton = styled.div``;



const Navbar = () => {
  return (
    <div>
        <MainContainer>
                    <NavbarButton>Home</NavbarButton>
                    <NavbarButton>Bounties</NavbarButton>
                    <LoginButton>Login</LoginButton>
        </MainContainer>
    </div>
  )
}

export default Navbar
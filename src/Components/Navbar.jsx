import styled from "styled-components";

const MainContainer = styled.div`
       width: 100%;
       height: 10vh;

       display: grid;
       grid-template-columns: 1fr 1fr 1fr;
       text-align: center;

       font-size: larger;
       font-weight: bold;
`;

const NavbarButton = styled.div`
    &:hover {
      cursor: pointer;
      text-decoration: underline;
  }

`;

const LoginButton = styled.div`
   &:hover {
      cursor: pointer;
      text-decoration: underline;
  }
`;



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
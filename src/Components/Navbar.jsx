import styled from "styled-components";

//REACT ROUTER DOM
import { Link } from 'react-router-dom';

const MainContainer = styled.div`
       background-color: #7a7a7a;
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
                <Link to="/">
                   <NavbarButton>Home</NavbarButton>
                </Link>
                <Link to="BountySection">
                   <NavbarButton>Bounties</NavbarButton>
                </Link>
                <Link to="Login">
                  <LoginButton>Login</LoginButton>
                </Link>
        </MainContainer>
    </div>
  )
}

export default Navbar
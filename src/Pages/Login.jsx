import styled from "styled-components";

const MainContainer  = styled.div`
         height: 50vh;
`;

const FormContainer = styled.div`
    margin-left: 45vw;
    margin-top: 30vh;
`;

const FormPassword = styled.form`

`;

const FormUsername = styled.form`

`;

const FormEmail = styled.form`

`;

const Login = () => {
  return (
    <MainContainer>
        <FormContainer>
             <FormEmail>Email</FormEmail>
             <FormUsername>Username</FormUsername>
             <FormPassword>Password</FormPassword>
        </FormContainer>
    </MainContainer>
  )
}

export default Login
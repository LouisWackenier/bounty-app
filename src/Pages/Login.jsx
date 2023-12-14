import styled from "styled-components";

const MainContainer  = styled.div`
         height: 50vh;
`;

const FormContainer = styled.div`
    margin-left: 45vw;
    margin-top: 30vh;
`;

const FormPassword = styled.form`
      margin-top: 2vh;
      border: 2px solid white;
      border-radius: 10px;
      width: 300px;
      padding: 1vh;
`;

const FormUsername = styled.form`
      margin-top: 2vh;
      border: 2px solid white;
      border-radius: 10px;
      width: 300px;
      padding: 1vh;
`;

const FormEmail = styled.form`
      margin-top: 2vh;
      border: 2px solid white;
      border-radius: 10px;
      width: 300px;
      padding: 1vh;
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
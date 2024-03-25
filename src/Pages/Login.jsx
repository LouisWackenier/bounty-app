import styled from "styled-components";

const MainContainer  = styled.div`
         height: 50vh;
`;

const FormContainer = styled.div`
    margin-left: 45vw;
    margin-top: 30vh;
`;

const Context = styled.div`
    
`;

const FormPassword = styled.form`
      margin-top: 2vh;
      border: 2px solid white;
      border-radius: 10px;
      width: 300px;
      padding: 1vh;

      &:hover {
            border-radius: 20px;
      }
`;

const FormUsername = styled.form`
      margin-top: 2vh;
      border: 2px solid white;
      border-radius: 10px;
      width: 300px;
      padding: 1vh;

      &:hover {
            border-radius: 20px;
      }
`;

const FormEmail = styled.form`
      margin-top: 2vh;
      border: 2px solid white;
      border-radius: 10px;
      width: 300px;
      padding: 1vh; 

      &:hover {
            border-radius: 20px;
      }
`;

const Login = () => {
  return (
    <MainContainer>
        <FormContainer>
              <FormEmail>Email</FormEmail>
              <Context>Please give your Email</Context>
                  <FormUsername>Username</FormUsername>
                  <Context>Please give your username</Context>
             <FormPassword>Password</FormPassword>
             <Context>Please give your password</Context>
        </FormContainer>
    </MainContainer>
  )
}

export default Login
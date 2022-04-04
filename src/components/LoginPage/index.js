import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import logomark from "../../assets/logomark.png";

export default function LoginPage() {
  const [email, setEmail] = useState([]);
  const [password, setPassword] = useState([]);
  const navigate = useNavigate();
  const [userData,setUserData]=useState([]);

  function loginRequest() {
    const loginData = {
      email: email,
      password: password
    };
    const request = axios.post(
      "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login",
      loginData
    );
    request.then(({data}) => {
      console.log(data);
      setUserData(data);
      //console.log(userData);
      navigate("/hoje")
    });

    request.catch((problem) => {
      //console.log(problem.response);
      alert(`Ocorreu uma falha no login. ${problem.response.data.message}`);
    });
  
  }
  console.log(userData); //não presta dentro de loginRequest;
  
  return (
    <LoginPageContainer>
      <LogomarkImage src={logomark} alt="logomark" />
      <Logotype>TrackIt</Logotype>
      <Input
        type="email"
        placeholder="email"
        onChange={(event) => setEmail(event.target.value)}
      />
      <Input
        type="password"
        placeholder="senha"
        onChange={(event) => setPassword(event.target.value)}
      />
      <Button onClick={() => loginRequest()}>Entrar</Button>
      <StyledLink to="/cadastro">Não tem uma conta? Cadastre-se!</StyledLink>
    </LoginPageContainer>
  );
}

const LoginPageContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  padding-top: 68px;
`;
const LogomarkImage = styled.img`
  width: 180px;
`;
const Logotype = styled.div`
  font-family: "Playball", cursive;
  font-style: normal;
  font-size: 68.982px;
  color: #126ba5;
  margin-bottom: 32.62px;
`;
const Input = styled.input`
  width: 303px;
  height: 45px;
  font-size: 19.976px;
  padding-left: 11px;
  margin-bottom: 6px;
`;
const Button = styled.button`
  background: #52b6ff;
  width: 303px;
  height: 45px;
  background-color: #52b6ff;
  border-radius: 4.63636px;
  font-size: 20.976px;
  color: white;
  margin-bottom: 25px;
`;
const StyledLink = styled(Link)`
  /* Perguntar o porquê dessa sintaxe styled(Link), diferente das outras */
  font-family: "Lexend Deca", sans-serif;
  font-size: 13.976px;
  color: #52b6ff;
`;

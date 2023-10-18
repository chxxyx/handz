import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import * as Style from '../style/components/user.sign';

function SignUp() {
  const [email, setEmail] = useState('');
  const [nickname, setNickname] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); 

  const handleSignUp = () => {
    const userData = { email, nickname, password };
    const userDataString = JSON.stringify(userData);
    document.cookie = `sessionToken=${userDataString}; path=/`;
    alert('회원가입 성공!');
    navigate('/user/signin'); 
  }

  return (
    <div>
      <Style.SignSection>
        <Style.SignBox>
          <Style.SignForm>
            <Style.SignInput placeholder='email' value={email} onChange={(e) => setEmail(e.target.value)}></Style.SignInput>
            <Style.SignInput placeholder='nickname' value={nickname} onChange={(e) => setNickname(e.target.value)}></Style.SignInput>
            <Style.SignInput placeholder='password' type="password" value={password} onChange={(e) => setPassword(e.target.value)}></Style.SignInput>
            <Style.SignFormBtn onClick={handleSignUp}>signup</Style.SignFormBtn>
          </Style.SignForm>
        </Style.SignBox>
      </Style.SignSection>
    </div>
  );
}

export default SignUp;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import * as Style from '../style/components/user.sign';

function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); 

  const handleSignIn = () => {

    alert('로그인 성공!');
    // window.location.href = '/'; 
    navigate('/');
    window.location.href = '/'; // 로그아웃 후 홈페이지로 이동
  }

  return (
    <div>
      <Style.SignSection>
        <Style.SignBox>
          <Style.SignForm>
            <Style.SignInput placeholder='email' value={email} onChange={(e) => setEmail(e.target.value)}></Style.SignInput>
            <Style.SignInput placeholder='password' type="password" value={password} onChange={(e) => setPassword(e.target.value)}></Style.SignInput>
            <Style.SignFormBtn  onClick={handleSignIn}>signin</Style.SignFormBtn>
          </Style.SignForm>
        </Style.SignBox>
      </Style.SignSection>
    </div>
  );
}

export default SignIn;
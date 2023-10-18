import React from 'react';
import { Link } from "react-router-dom";
import logo from '../img/logo.png';
import * as Style from '../style/main/header.style'; // 스타일 불러오기

const Header = () => {
  const sessionToken = document.cookie.split('; ').find(cookie => cookie.startsWith('sessionToken='));
  console.log(sessionToken)
  const isLoggedIn = sessionToken ? true : false;

  const handleSignOut = () => {
    // 로그아웃 로직 - 세션 토큰 삭제
    document.cookie = 'sessionToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/';
    window.location.href = '/'; // 로그아웃 후 홈페이지로 이동
  };

  return (
    <>
      <Style.header>
        <Style.header_logo_box>
          <Style.home_text>
            <Style.header_a to='/'>
              <Style.logo src={logo} alt="Logo" />
            </Style.header_a>
          </Style.home_text>
        </Style.header_logo_box>
      
          {isLoggedIn ? (
              <Style.right>
                <Style.signin onClick={handleSignOut}>SignOut</Style.signin>
              <Style.signup to={`/user/info/:userId`}>My Card</Style.signup>
              </Style.right>
          ) : (
            <Style.right>
              <Style.signin to='/user/signin'>SignIn</Style.signin>
              <Style.signup to='/user/signup'>SignUp</Style.signup>
            </Style.right>
          )}
        
      </Style.header>
    </>
  );
};

export default Header;
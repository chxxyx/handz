import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const header = styled.div`
  display: flex;
  width: 100%;
  height: 60px;
  align-items: center;
  justify-content: space-between;
`;
export const home_text = styled.div`
  font-style: none;
  font-size: x-large;
  font-weight: 800;
  color: black;
  display: flex;
  align-items: center; /* 세로 가운데 정렬을 위한 스타일 */
`;

export const logo = styled.img`
  width: 110px;
  height: auto;
  margin-right: 10px;
`;

export const right = styled.div`
  display: flex;
  align-items: center;
`;

export const signup = styled(Link)`
 text-decoration: none;
  cursor: pointer;
  margin: 5px;
  color: white;
  font-weight: 200;
`;

export const signin = styled(Link)`
  margin: 5px;
  text-decoration: none;
  cursor: pointer;
  color: white;
  font-weight: 200;
`;

export const mypage = styled(Link)`
  margin: 5px;
  text-decoration: none;
  cursor: pointer;
  color: white;
  font-weight: 200;
  margin: 30px;
`;

export const header_a = styled(Link)`
  text-decoration: none;
  cursor: pointer;
  color: black;
`;

export const title = styled.div`
  font-weight: 200;
`;

export const header_logo_box = styled.div`
  display: flex;
  align-items: center;
  height: 60px;
`;

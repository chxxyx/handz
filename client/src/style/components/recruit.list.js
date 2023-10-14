import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const recruit_list_section = styled.div`
  padding: 20px 50px 50px 50px;
`

export const recruit_list = styled.div`
  margin: 50px 80px 0 80px;
  padding: 20px 50px 50px 50px;
  height: 100%;
  background-color: white;
  border-radius: 20px;
  height: 100%;
`

export const recruit_list_a = styled(Link)`
  text-decoration: none;
  color: gray;
`

export const recruit_fe_link = styled.div`
  color: #4a4a4a;
  margin-left: 20px;
  font-size: x-large;
`
export const recruit_title_box = styled.div`
  display: flex;
  align-items: center; /* 세로 가운데 정렬 */
  
`
export const sort_title = styled.div`
  font-size: 40px;
  font-weight: 800;
  height: 100%; /* 높이 일치 */
`

export const recruit_button = styled(Link)`
  text-decoration: none;
  padding: 10px 20px;
  background: #848CF1;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-left: auto;
  font-weight: 200;

  &:hover {
    background-color: white;
    color: #4E41CB;
    border: 1px solid #848CF1;
  }
`;

// list 


export const recruit_list_box = styled.div`
  display: flex;
  justify-content: space-around; /* 수평 가운데 정렬 */
  align-items: center; /* 수직 가운데 정렬 */
`

export const list_card = styled.div`
  width: 300px;
  height: 400px;
  border-radius: 10px;
  border: 1px solid darkgray;
  text-align: center;
  margin-top: 30px;
`

export const card_img = styled.img`
  width: auto;
  height: 200px;
  border-radius: 10px;
`

export const card_btn = styled.div`
 display: flex; /* 추가 */
  flex-direction: column; /* 추가 */
  align-items: center; /* 추가 */
  margin-top: 30px;
`;

export const card_btn_a = styled(Link)`
  text-decoration: none;
  padding: 10px 20px;
  background-color: #848CF1;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 200;
  width: 200px;

  &:hover {
    background-color: white;
    color: #848CF1;
    border: 1px solid #848CF1;
  }
`;
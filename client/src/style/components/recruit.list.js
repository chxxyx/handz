import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const recruit_list_section = styled.div`
  /* padding: 20px 50px 50px 50px; */
  padding: 0 50px 50px 50px;
`

export const recruit_list = styled.div`
  /* margin: 50px 10px 0 10px;
  padding: 20px 50px 50px 50px;
  height: 100%;
  background-color: white;
  border-radius: 20px;
  height: 100%; */
  display: flex;
  flex-direction: column;
  /* justify-content: space-between; */
  margin: 50px 80px 0 80px;
  padding: 30px 50px 50px 50px;
  height: 100%;
  background-color: white;
  border-radius: 20px;
  /* border: 1px solid #3E2BB7; */
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
  background: linear-gradient(to left, rgb(132, 140, 241, 0.9), rgb(198, 148, 201, 0.6));
  background-color: #848CF1;
  color: white;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  margin-left: auto;
  font-weight: 200;

  /* &:hover {
    background-color: white;
    color: #4E41CB;
    border: 1px solid #848CF1;
  } */
`;

// list 

export const recruit_list_box = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center; /* 수평 가운데 정렬 */
  align-items: center; /* 수직 가운데 정렬 */
  padding: 0;
`

export const list_page_btn = styled.img`
  /* margin: 0 10px 0 10px; */
  /* font-size: medium; */
  /* font-weight: 100; */
  width: 20px;
  height: auto;
  cursor: pointer;
  color: black;
`

export const list_page_btnBox = styled.div`
 width: 30px;
 height: 30px;
`


export const list_card = styled.div`
  width: 250px;
  height: 400px;
  border-radius: 10px;
  border: 1px solid lightgray;
  /* background-color: white; */
  background: rgb(204, 180, 255, 0.1);
  /* background-color: #848CF1; */
  text-align: center;
  margin: 30px;
  object-fit: cover;
`

export const card_img = styled.img`
  width: 100%;
  height: 170px;
  object-fit: cover;
  border-top-left-radius: 9px;
  border-top-right-radius: 9px;
  border-bottom: 1px solid lightgray;
`

export const card_btn = styled.div`
 display: flex; /* 추가 */
  flex-direction: column; /* 추가 */
  align-items: center; /* 추가 */
  margin-top: 10px;
`;

export const card_btn_a = styled(Link)`
  text-decoration: none;
  padding: 10px 20px;
  background: linear-gradient(to left, rgb(132, 140, 241, 0.9), rgb(198, 148, 201, 0.6));
  background-color: #848CF1;
  color: white;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  font-weight: 200;
  width: 160px;

  /* &:hover {
    background-color: white;
    color: #848CF1;
    border: 1px solid #848CF1;
  } */
`;

export const stack_div = styled.div`
  margin-left: auto;
  /* border: 0.5px solid gray;
  border-radius: 10px; */
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-top: 5px;
  padding: 0;

`

export const stack_ul = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-wrap: wrap;
  margin-left: auto;
  margin: 0;
  padding: 0 5px 0 5px;
  /* margin: 10px 10px; */
`

export const stack_li = styled.li`
  margin: 2px;
  border-radius: 18px;
  /* border: 1px #848CF1 solid; */
  padding: 6px 15px;
  font-size: 13px;
  background: linear-gradient(to left, rgb(132, 140, 241, 0.5), rgb(198, 148, 201, 0.8));
  background-color: #848CF1;
  color: white;
`
export const card_title_name = styled.div`
  font-size: 20px;
  margin-top: 10px;
  font-weight: 900;
`

export const card_date = styled.div`
  color: gray;
  margin-top: 5px;
`
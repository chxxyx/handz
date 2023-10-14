import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const main_btn_box = styled.div`
  display: flex;
  justify-content: center; /* 수평 가운데 정렬 */
  align-items: center; /* 수직 가운데 정렬 */
  /* border: 1px black solid; */
`;
export const main_be_btn = styled(Link)`
    width: 276px;
    height: 60px;
    border-radius: 50px;
    border: 0.5px solid white;
    display: flex;
    justify-content: center; /* 수평 가운데 정렬 */
    align-items: center; /* 수직 가운데 정렬 */
    margin: 30px;
    cursor: pointer;
    text-decoration: none;
    font-weight: 900;
    font-size: x-large;
    color: white;
    background: linear-gradient(to left, #5A569A, #5A569A, #7C69B3, #B087FF);
    /* background-color: #848CF1; */
`

export const main_fe_btn = styled(Link)`
    width: 276px;
    height: 60px;
    border-radius: 50px;
    border: 0.5px solid white;
    display: flex;
    justify-content: center; /* 수평 가운데 정렬 */
    align-items: center; /* 수직 가운데 정렬 */
    margin: 30px;
    cursor: pointer;
    text-decoration: none;
    font-weight: 900;
    font-size: x-large;
    color:  white;
    background: linear-gradient(to left, #5A569A, #5A569A, #7C69B3, #B087FF);
`

export const main_section = styled.div`
  display: flex;
  justify-content: center; /* 수평 가운데 정렬 */
  align-items: center; /* 수직 가운데 정렬 */
  /* border: 1px black solid; */
  text-align: center;
  height: 500px;
`

export const main_box = styled.div`
  position: relative;
  /* background: linear-gradient(to left, #4E41CB, #C694C9); */
    width: 1000px;
    height: 100%; /* main_section에 높이를 맞추기 위해 100%로 설정 */

`

export const main_img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`
export const main_title_box = styled.div`
    position: absolute;
    top: 78%;
    left: 40%;
    z-index: 1;
`
export const main_title = styled.div`
    font-size: large;
    font-weight: 100;
    color: white;
`

export const main_name = styled.div`
    font-size: xx-large;
    margin-top: 10px;
    font-weight: 900;
    color: white;
`
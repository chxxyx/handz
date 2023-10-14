import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const detail_section = styled.div`
  padding: 0 50px 50px 50px;
`;

export const detail = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 50px 80px 0 80px;
  padding: 50px;
  height: 100%;
  background-color: white;
  border-radius: 20px;
  border: 1px solid #3E2BB7;
  position: relative; /* Added to allow modal positioning */
`;

export const detail_colum_first = styled.div`
  width: 500px;
  height: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const detail_img = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 4px;
  border: lightgray 0.1px solid;
`;

export const detail_btn = styled.div`
  padding: 10px 20px;
  background-color: #848CF1;
  border: white 0.1px solid;
  border-radius: 4px;
  cursor: pointer;
  font-size: x-large;
  font-weight: 100;
  margin-top: 30px;
  width: 90%;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: white;
  &:hover {
    background-color: white;
    color: #848CF1;
    border: 1px solid #848CF1;
  }
`;

export const member_list = styled(Link)`
  padding: 10px 20px;
  background-color: white;
  border: #848CF1 0.1px solid;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 200;
  margin-top: 20px;
  width: 90%;
  height: 40px;
  display: flex;
  /* justify-content: center; */
  align-items: center;
  text-align: center;
  justify-content: left;
`;
export const member_list_ul = styled.ul`
  list-style: none;
  display: flex;
  margin-left: 0;

`
export const member_list_li = styled.li`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 1px #848CF1 solid;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-left: 0;
`

export const member_list_img = styled.img`
  width: 80%;
  height: auto;
  `
export const detail_colum_second = styled.div`
  width: 500px;
  height: 100%;
  padding: 0;
  text-align: center;
  border: 0.1px solid lightgray;
  border-radius: 4px;
`;

export const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

export const ModalContent = styled.div`
    width: 300px;
  padding: 20px;
  border-radius: 8px;
  /* box-shadow: 0 0 10px rgba(0, 0, 0, 0.3); */
  text-align: center;
`;

export const ModalImg = styled.img`
    width: 100%;
    height: auto;
`
export const Modaltext = styled.div`
    color: white;
    font-weight: 800;
    
`
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const detail_section = styled.div`
  padding: 0 50px 50px 50px;
`;

export const detail = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: space-between; */
  margin: 50px 80px 0 80px;
  padding: 50px;
  height: 100%;
  background-color: white;
  border-radius: 20px;
  /* border: 1px solid #3E2BB7; */
  position: relative; /* Added to allow modal positioning */
`;

export const detail_pro_name = styled.div`
 font-size: 40px;
  font-weight: 800;
  margin-bottom: 0;
  margin-left: 30px;
`
export const detail_colums = styled.div`
   display: flex;
  /* flex-direction: column; */
  justify-content: space-between;
  align-items: center;
`

// export const detail_colums_1 =styled.div`

// `
export const detail_colum_first = styled.div`
  width: 500px;
  height: 100%;
  text-align: center;
  margin: 30px;
  /* display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center; */
`;

export const detail_img = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 5px;
  border: lightgray 0.1px solid;
`;

export const detail_btn = styled.div`
  padding: 10px 20px;
  margin-left: 2px;
  background: linear-gradient(to left, rgb(132, 140, 241, 0.9), rgb(198, 148, 201, 0.6));
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
  /* &:hover {
    background-color: white;
    color: #848CF1;
    border: 1px solid #848CF1;
  } */
`;

export const detail_colum_first_btns = styled.div`
  display: flex;
  margin-top: 20px;
  justify-content: center;
  align-items: center;
  padding: 0;
`
export const detail_btns_edit = styled(Link)`
  text-decoration: none;
  width: 250px;
  height: 30px;
  padding: 10px 20px;
  border: none;
  border-radius: 17px;
  cursor: pointer;
  font-weight: 200;
  color: white;
  display: flex;
  justify-content: space-around;
  align-items: center;
  text-align: center;
  margin-right: 25px;
  background: linear-gradient(to left, rgb(132, 140, 241, 0.9), rgb(198, 148, 201, 0.6));
  background-color: #848CF1;
`

export const detail_btns_del =styled.div`
  width: 250px;
  height: 30px;
  padding: 10px 20px;
  border: none;
  border-radius: 17px;
  cursor: pointer;
  font-weight: 200;
  color: white;
  display: flex;
  justify-content: space-around;
  align-items: center;
  text-align: center;
  margin-left: 25px;
  background: linear-gradient(to left, rgb(132, 140, 241, 0.9), rgb(198, 148, 201, 0.6));
  background-color: #848CF1;
`


export const member_list = styled(Link)`
  /* padding: 20px 20px; */
  background-color: white;
  /* border: gray 0.1px solid; */
  border-radius: 4px;
  cursor: pointer;
  font-weight: 200;
  margin-top: 30px;
  width: 90%;
  height: 40px;
  margin-left: 0;
  display: flex;
  /* justify-content: center; */
  align-items: center;
  text-align: center;
  justify-content: left;
  position: relative;
`;
export const member_list_ul = styled.ul`
  list-style: none;
  display: flex;
  margin-left: 0;

`
export const member_list_li = styled.li`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  /* text-align: center;
  margin-left: -10px;   */
`

export const member_list_img = styled.img`
  width: 50px;
  height:50px;
  border: 3.3px white solid;
  /* object-fit: cover; */
  border-radius: 100%;
  margin-right: -10px;
  position: relative; /* 자식 요소에 포지션을 설정하여 z-index 조절 가능 */
  z-index: ${props => (props.usersLength - props.zIndex) };
`

export const detail_colum_second = styled.div`
  width: 490px;
  height: 100%;
  padding: 0;
  text-align: center;
  /* border: 0.1px solid lightgray;
  border-radius: 4px; */
  /* margin: 30px; */
  margin-right: 30px;
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


export const stack_div = styled.div`
  margin-left: auto;
  /* border: 0.5px solid gray;
  border-radius: 10px; */
  width: 500px;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 0;
`

export const stack_ul = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-wrap: nowrap;
  margin-left: auto;
  margin: 0;
  padding: 0;
  height: 40px;
  /* margin: 10px 10px; */
`

export const stack_li = styled.li`
  margin: 2px;
  border-radius: 18px;
  padding: 8px 25px 8px 25px ;
  font-size: 15px;
  background: linear-gradient(to left, rgb(132, 140, 241, 0.9), rgb(198, 148, 201, 0.6));
  background-color: #848CF1;
  color: white;
`

export const contentBox1 = styled.div`
  display: flex;
  flex-direction: column;
  border: 0.1px solid lightgray;
  border-radius: 4px;
  margin-top: 0x;
  /* justify-content: left; */
`

export const date = styled.div`
  font-size: 20px;
  color: gray;
  font-weight: 100;
  margin-bottom: 20px;
`

export const developRole = styled.div`
  margin-top: 10px;
  font-size: 20px;
  font-weight: 100;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 0;
`

export const contentBox2 = styled.div`
  margin-top: 10px;

  display: flex;
  flex-direction: column;
  border: 0.1px solid lightgray;
  border-radius: 4px;
  padding: 40px;
  height: 230px;
  overflow: scroll;
`

export const content = styled.div`
  margin-left: auto;
  font-size: 15px;
  font-weight: 400;
`

export const list_page_btn = styled.img`
  width: 10px;
  height: 15px;
  cursor: pointer;
  color: black;
`

export const list_page_btnBox = styled.div`
 width: 50px;
 height: 5px;
`

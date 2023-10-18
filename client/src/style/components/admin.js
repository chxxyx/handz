import styled, { css } from 'styled-components';


export const admin_section = styled.div`
  padding: 0 50px 50px 50px;
`;

export const admin = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 50px 80px 0 80px;
  padding: 50px;
  height: 100%;
  background-color: white;
  border-radius: 20px;
  flex-direction: column;
  position: relative; /* Added to allow modal positioning */
`;

export const admin_row_first =styled.div`
    display: flex;
    justify-content: space-between;
    padding: 0 30px 0 30px;
`

export const admin_project_info_box = styled.div`
    width: 400px;
    display: flex;
`
export const admin_info_name = styled.h1`
    font-size: 40px;
    font-weight: 900;
    margin-top: 20px;
    margin-right: 40px;
`
export const admin_status_box = styled.div`
    display: flex;
`

export const admin_continue = styled.div`
  width: 60px;
  height: 30px;
  padding: 10px 20px;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  font-weight: 200;
  color: white;
  display: flex;
  justify-content: space-around;
  align-items: center;
  text-align: center;
  margin-top: 20px;
  margin-right: 40px;
  ${(props) =>
    props.active
      ?
      css`
          background: linear-gradient(to left, rgb(132, 140, 241, 0.9), rgb(198, 148, 201, 0.6));
          background-color: #848CF1;
        `
      :  css`
          background-color: white;
          border: 1px solid #848CF1;
          color: #848CF1;
        `}

`;

export const admin_complete = styled.div`
  width: 60px;
  height: 30px;
  padding: 10px 20px;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  font-weight: 200;
  color: white;
  display: flex;
  justify-content: space-around;
  align-items: center;
  text-align: center;
  margin-top: 20px;

        ${(props) =>
    props.active
      ?
      css`
           background: linear-gradient(to left, rgb(132, 140, 241, 0.9), rgb(198, 148, 201, 0.6));
            background-color: #848CF1;
        `
      :  css`
          background-color: white;
          border: 1px solid #848CF1;
          color: #848CF1;
        `}
`;

export const admin_row_second = styled.div`
    display: flex;
    justify-content: space-around;
    text-align: center;
    margin-top: 20px;
 align-items: center;
 text-align: center;
`

export const admin_second_box = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const admin_select_img = styled.img`
    width: 60px;
    height: auto;
    cursor: pointer;

`

export const admin_usercard = styled.div`
  width: 300px;
  height: 450px;
  border-radius: 10px;
  /* border: 1px solid darkgray; */
  text-align: center;

  background: linear-gradient(to left, rgb(132, 140, 241, 0.9), rgb(198, 148, 201, 0.6));
  background-color: #848CF1;
  /* background-color: rgb(198, 148, 201, 0.); */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const card_imgbox = styled.div`
  width: 150px;
  height: auto;
  border-radius: 20px;
  border: 0.5px white solid;
`
export const card_img = styled.img`
  width: 80%;
  height: auto;
  border-radius: 20px;
  margin-top: 20px;
`

export const card_dev = styled.div`
  font-size: x-large;
  font-weight: 900;
  margin: 10px;
  color: white;
`
export const card_nickname = styled.div`
  font-size: large;
  font-weight: 200;
  color: white;

`

export const card_stack = styled.div`
  width: 80%;
  height: 90px;
  /* border: 0.1px white solid; */
  border-radius: 10px;
  margin-top: 20px;
  flex-wrap: nowrap;
`

export const ModalWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 1000;
`;

export const ModalContent = styled.div`
    background-color: #fff;
    padding: 20px;
    border-radius: 20px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
    /* max-width: 600px;
    width: 100%; */
    width: 500px;
    height: auto;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const ModalCloseBtn = styled.div`
    width: 80px;
    height: 50px;
    border-radius: 10px;
    cursor: pointer;
    color: white;
    background-color: #848CF1;
    display: flex;
    justify-content: center; /* 수평 가운데 정렬 */
    align-items: center; /* 수직 가운데 정렬 */
    font-weight: 300;
    margin-bottom: 20px;
`

export const ModalText = styled.div`
    font-size: large;
    font-weight: 300;
    margin: 20px 0 40px 0;
`

export const ModalClearWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 1000;
`;


export const ModalClear = styled.div`
    width: 300px;
    padding: 20px;
    border-radius: 8px;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative; /* 추가: position을 설정합니다. */
`;

export const ModalClearText = styled.div`
    color: white;
    font-size: 23px;
    font-weight: 600;
    position: absolute; /* 추가: position을 설정합니다. */
    z-index: 1; /* 추가: z-index를 설정하여 ModalClearImg 앞에 배치합니다. */
    margin-bottom: 200px;
`

export const ModalClearImg = styled.img`
    margin-top: 0;
    width: 400px;
    height: auto;
    position: relative; /* 추가: position을 설정합니다. */
    z-index: 0; /* 추가: ModalClearText 뒤에 배치합니다. */
`

export const list_flex_box = styled.div`
  display: flex;
`

export const list_page_btn = styled.img`
  /* margin: 0 10px 0 10px; */
  /* font-siz: medium; */
  /* font-weight: 100; */
  width: 20px;
  height: 30px;
  cursor: pointer;
  color: black;
`

export const list_page_btnBox = styled.div`
 width: 30px;
 height: 30px;
 display: flex;
 justify-content: center;
 align-items: center;
 text-align: center;
`

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
  /* margin-left: auto; */
  margin: 5px 10px 0 10px;
  padding: 0;
  /* margin: 10px 10px; */
`

export const stack_li = styled.li`
  /* margin: 2px;
  border-radius: 18px;
  border: 1px #848CF1 solid;
  padding: 8px 25px 8px 25px ;
  font-size: 15px;
  background-color: white;
  color: #848CF1; */
  margin: 5px 4px 5px 4px;
  border-radius: 18px;
  border: 1px white solid;
  padding: 8px 20px;
  font-size: 15px;
  background: rgba(0, 0, 0, 0);
  color: white;
`

export const card_box = styled.div`
  display: flex;
`
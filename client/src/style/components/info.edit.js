import styled, { css } from 'styled-components';


export const info_section = styled.div`
  padding: 0 50px 50px 50px;
`;

export const info = styled.div`
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

export const info_div_box = styled.div`
    display: flex;
    align-items: center; /* 세로 가운데 정렬 */
    padding: 0;
    font-weight: 900;
    font-size: xx-large;
    margin-left: 40px;
`

export const info_colum_first = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 50px;
  margin-left: 20px;
`

export const info_update_btn_div = styled.div`
  text-decoration: none;
  padding: 10px 20px;
  background: white;
  color: #4E41CB;
  border: 1px #4E41CB solid;
  border-radius: 10px;
  cursor: pointer;
  margin-left: auto;
  font-weight: 200;
  text-align: center;
  margin-bottom: 0;
  width: 10%;

  /* &:hover {
    background-color: white;
    color: #848CF1;
    border: 1px solid #848CF1;
  } */
`

export const info_card_box = styled.div`
  display: flex;
  justify-content: center;
`

export const info_mycard = styled.div`
  width: 400px;
  height: 550px;
  border-radius: 10px;
  /* border: 1px solid darkgray; */
  text-align: center;
  margin-top: 20px;
  background: linear-gradient(to top, #4E41CB, #C694C9);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const card_img = styled.img`
  width: 300px;
  height: auto;
  border-radius: 10px;
  border: 0.5px white solid;
  /* margin-top: 0; */
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
  width: 300px;
  height: 90px;
  border: 0.1px white solid;
  border-radius: 10px;
  margin-top: 20px;
  flex-wrap: nowrap;
`

export const info_colum_second = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 20px;
  margin-left: 0;
  width: 500px;
  margin-top: 28px;

`

export const info_card_span = styled.span`
      font-weight: 300;
      font-size: 20px;
      margin-top: 20px;
      margin-left: 5px;
      color: black;
`

export const info_currentProject = styled.div`
  padding: 10px 20px;
  background-color: white;
  /* border: #4E41CB 1px solid; */
  border-radius: 10px;
  cursor: pointer;
  font-weight: 200;
  margin-top: 50px;
  width: 90%;
  height: 230px;
  /* display: flex;
  justify-content: center;
  align-items: center;
  text-align: center; */
`

export const info_openProjects = styled.div`
  padding: 10px 20px;
  background-color: white;
  /* border: #4E41CB 1px solid; */
  border-radius: 10px;
  cursor: pointer;
  font-weight: 200;
  margin-top: 30px;
  width: 90%;
  height: 230px;
  
  /* display: flex;
  justify-content: center;
  align-items: center;
  text-align: center; */
`


// 여기서부터 수정 모달 창 CSS

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
  width: 1000px;
  height: auto;
  text-align: center;

`;

export const Modal_card_content = styled.div`
    display: flex;
    justify-content: center;
    padding: 0;
    /* justify-content: space-between; */
`

export const modal_colum_first = styled.div`
    width: 300px;
    height: 500px;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center; /* 세로 가운데 정렬 */
    align-items: center; /* 가로 가운데 정렬 */
    /* margin-top: 50px; */
    margin-left: 0;
    margin-right: 30px;
`

export const modal_img = styled.img`

    width: 100%; /* 이미지를 부모 요소의 가로 크기에 맞춥니다. */
    height: auto; /* 이미지를 부모 요소의 세로 크기에 맞춥니다. */
    border: 0.1px lightgray solid;
    border-radius: 10px;
    margin-bottom: 10px;
`

export const modal_colum_second = styled.div`
    width: 500px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center; /* 세로 가운데 정렬 */
    align-items: center; /* 가로 가운데 정렬 */
    padding: 0;
    text-align: center;
    margin-right: 0;
    margin-left: 30px;
    
    margin-top: 20px;
`
export const modal_card_span = styled.span`
      font-weight: bolder;
      font-size: 20px;
      margin-right: auto;
      margin-top: 15px;
      margin-left: 5px;
      margin-bottom: 8px;
`
export const modal_card_div = styled.div`
  margin-right: auto;
  border: 0.1px solid lightgray;
  border-radius: 10px;
  margin-bottom: 10px;
  width: 100%;
  height: 50px;
  display: flex;
`

export const modal_role_div = styled.div`
  margin-right: auto;
  /* border: 0.1px solid lightgray;
  border-radius: 10px; */
  margin-bottom: 10px;
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const modal_stack_div = styled.div`
  margin-right: auto;
  border: 0.1px solid lightgray;
  border-radius: 10px;

  width: 100%;
  height: 300px;
  display: flex;
  flex-direction: column;
  margin-bottom: 0;
  padding: 0;
`

export const modal_stack_ul = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  margin: 10px 10px;
  text-align: center;
  margin-left: 0;
`

export const modal_stack_li = styled.li`

  margin: 2px;
  border-radius: 18px;
  border: 1px #848CF1 solid;
  padding: 5px 10px;
  font-size: 12px;
  background-color: white;
  color: #848CF1;
`

export const modal_stack_select_li = styled.li`
  margin: 2px;
  border-radius: 18px;
  padding: 5px 10px;
  font-size: 12px;
  background-color: #848CF1;
  color: white;
`

export const modal_selected_skills = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  overflow: auto;
  margin-bottom: 0;
`

export const modal_selected_span = styled.span`
  margin-left: 30px;
  font-weight: 100;
`

export const ModalCloseBtn = styled.div`
    width: 90px;
    height: 50px;
    border-radius: 10px;
    cursor: pointer;
    margin-left: auto;
    color: white;
    background-color: #848CF1;
    display: flex;
    justify-content: center; /* 수평 가운데 정렬 */
    align-items: center; /* 수직 가운데 정렬 */
    font-weight: 300;
`

export const remove_skill = styled.button`
  border: none;
  background-color: rgb(0, 0, 0, 0);
  color: white;
  cursor: pointer;
`

export const modal_be = styled.div`
  width: 20%;
  height: auto;
  padding: 10px 20px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  font-weight: 300;
  color: white;
  display: flex;
  justify-content: space-around;
  align-items: center;
  text-align: center;
  margin-top: 0;
  margin-right: 30px;

  ${(props) =>
    props.active
      ?
      css`
          background-color: #848CF1;
        `
      :  css`
          background-color: white;
          border: 1px solid #848CF1;
          color: #848CF1;
        `}
`;

export const modal_fe = styled.div`
  width: 20%;
  height: auto;
  padding: 10px 20px;
  margin-left: 30px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  font-weight: 300;
  color: white;
  display: flex;
  justify-content: space-around;
  align-items: center;
  text-align: center;
  margin-top: 0;

  ${(props) =>
    props.active
      ?
      css`
          background-color: #848CF1;
        `
      :  css`
          background-color: white;
          border: 1px solid #848CF1;
          color: #848CF1;
        `}
`;


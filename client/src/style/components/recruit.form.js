import styled, { css } from 'styled-components';

export const create_section = styled.div`
    padding: 0 50px 50px 50px;
    /* background-image: url("../img/back.jpeg");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;  */

`
export const create = styled.div`
  margin: 50px 80px 0 80px;
  padding: 50px 0; /* 기존 내용을 가로로 정렬하기 위해 좌우 패딩 제거 */
  height: 100%;
  background-color: white;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;

`;

export const create_left = styled.div`
    width: 400px;
    height: 100%;
    display: flex;
    flex-direction: column;
    /* justify-content: space-between; */
    border-radius: 10px;
    margin-bottom: 20px;
    margin: 0 40px 30px 0;
    /* background: linear-gradient(to right, rgb(255, 188, 204, 0.5), rgb(96, 107, 255, 0.5)); */
`;

export const create_right = styled.div`
    width: 400px;
    height: 100%;
  display: flex;
  flex-direction: column;
  margin: 0 0 30px 40px;
  
  /* justify-content: space-between; */

`;

/* 이미지 스타일 */
export const create_image = styled.img`
  /* margin-top: 20px; */
  width: 100px;
  height: 100px;
  margin: 10px 10px 20px 10px;
  object-fit: cover;
  /* border-radius: 10px; */
  border: 1.8px #8488f1 solid;
`;

export const form_continue = styled.div`
  width: 30%;
  height: 30px;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
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
      ? css`
          background-color: white;
          border: 1px solid #848CF1;
          color: #848CF1;
        `
      : css`
          background-color: #848CF1;
        `}
`;

export const form_complete = styled.div`
  width: 30%;
  height: 30px;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
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
      ? css`
          background-color: white;
          border: 1px solid #848CF1;
          color: #848CF1;
        `
      : css`
          background-color: #848CF1;
        `}
`;

export const form = styled.form`
    /* text-align: center; */
    display: flex;
    justify-content: center; /* 세로 가운데 정렬 */
    align-items: center; /* 가로 가운데 정렬 */
    /* background: linear-gradient(to right, rgb(255, 188, 204, 0.5), rgb(96, 107, 255, 0.5)); */
  /* background-color: white; */
    border-radius: 10px;
    /* border: 0.5px solid gray; */
    width: 80%;
    padding-bottom: 20px;
    padding-right: 30px;
`
export const create_left_status_box = styled.div`
    padding: 0;
    display: flex;
    justify-content: space-between; /* 수평 가운데 정렬 */

`

// export const StyledImageContainer = styled.label`
//   /* position: relative; */
//   display: inline-block;
//   cursor: pointer;
// `
export const StyledImageContainer = styled.div`
  /* position: relative; */
  display: flex;
  cursor: pointer;
  justify-content: center;
  align-items: center;
`

export const UploadButton = styled.button`
  /* position: absolute; */
  border: none;
  background: linear-gradient(to left, rgb(132, 140, 241, 0.9), rgb(198, 148, 201, 0.6));
  background-color: #848CF1;
  color: white;
  width: 200px;
  height: 35px;
  border-radius: 10px;
  cursor: pointer;
  /* opacity: 0;  */
  transition: opacity 0.3s;
  font-weight: 100;
  font-size: 10px;
  margin-left: 20px;
  /* 호버 시 보이기 */
  /* ${StyledImageContainer}:hover & {
    opacity: 1;
  } */

  /* 클릭 시 보이기 */
  /* &:active {
    opacity: 1;
  } */
`;

export const create_projectName_input = styled.input`
      margin-bottom: 10px;
      margin-top: 10px;
      justify-content: center;
      align-items: center;
      text-align: left;
      padding-left: 13px;
      width: 95%;
      background-color: rgb(0,0,0,0);
      height: 50px;
      display: flex;
      border: none;
      border-bottom: 0.5px solid gray;
      font-family: inherit;
      font-weight: 100;
      font-size: 18px;
      color: #292929;
      /* margin-top: 20px; */
      /* margin-left: 10px; */
      &:focus {
      outline: none;
    }
`

export const teamName_input = styled.input`
      /* border-radius: 10px; */

      /* margin-bottom: 20px; */
      justify-content: center;
      align-items: center;
      text-align: left;
      padding-left: 13px;
      width: 95%;
      height: 40px;
      display: flex;
      border: none;
      border-bottom: 0.5px solid gray;
      /* border-radius: 10px; */
      font-family: inherit;
      font-weight: 100;
      font-size: 15px;
      margin-bottom: 15px;
      color: black;
      /* margin-top: 30px; */
      &:focus {
      outline: none;
    }

`

export const create_input = styled.input`
      margin-bottom: 25px;
      justify-content: center;
      align-items: center;
      text-align: left;
      padding-left: 13px;
      width: 95%;
      height: 40px;
      display: flex;
      border: none;
      border-bottom: 0.5px solid gray;
      font-family: inherit;
      font-weight: 100;
      font-size: 15px;
      color: black;
      &:focus {
      outline: none;
    }

`

export const insert_input = styled.input`
  border-radius: 10px;
  margin-bottom: 25px;
  margin-top: 10px;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100%;
  height: 320px;
  display: flex;
  /* border: 0.9px solid gray; */
  border: none;
  background-color: rgb(150, 149, 158, 0.18);
  border-radius: 10px;
  font-family: inherit;
  font-weight: 100;
  font-size: 15px;
  color: black;
  overflow-x: auto;
  white-space: nowrap;
  &:focus {
      outline: none;
    }

`

export const devInputBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const dev_input = styled.input`
      margin-top: 10px;
      border-radius: 10px;
      margin-bottom: 10px;
      justify-content: center;
      align-items: center;
      text-align: center;
      width: 44%;
      height: 40px;
      display: flex;
      border: none;
      background-color: rgb(150, 149, 158, 0.18);
      /* border: 0.7px solid gray; */
      font-family: inherit;
      font-weight: 100;
      font-size: 15px;
      color: black;
      &:focus {
      outline: none;
    }
   
`

export const date_inputBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`



export const DateInput = styled.input`
      margin-bottom: 25px;
      margin-top: 10px;
      justify-content: center;
      align-items: center;
      text-align: center;
      width: 43%;
      height: 40px;
      display: flex;
      border: none;
      background-color: rgb(150, 149, 158, 0.18);
      /* border: 0.7px solid gray; */
      border-radius: 10px;
      font-family: inherit;
      font-weight: 100;
      font-size: 15px;
      color: gray;
      padding: 0 10px 0 0;
      &:focus {
      outline: none;
    }
    &::placeholder {
    /* placeholder 스타일을 설정합니다. */
    opacity: 0.5; /* 투명하게 만들어 숨깁니다. */
  }

  /* &.dtColor { */
    /* 클래스 이름이 dtColor인 요소에 대한 스타일 */
    /* background-color: #FF0000; 원하는 스타일을 여기에 추가 */
    /* color: red;
  
  } */


`;

export const AddBtn = styled.button`
text-decoration: none;
  padding: 10px 20px;
  background: linear-gradient(to left, rgb(132, 140, 241, 0.9), rgb(198, 148, 201, 0.6));
  background-color: #848CF1;
  color: white;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  font-weight: 100;
  font-size: 15px;
  width: 100%;
  height: 50px;

`


export const modal_stack_div = styled.div`
  /* margin-right: auto; */
  /* border: 0.5px solid gray; */
  border-radius: 10px;
  width: 100%;
  height: 220px;
  display: flex;
  flex-direction: column;
  margin-bottom: 0;
  /* margin-left: 10px; */
  padding: 0;
  background: linear-gradient(to left, rgb(132, 140, 241, 0.5), rgb(198, 148, 201, 0.6));

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

  margin: 4px;
  border-radius: 18px;
  /* border: 1px #848CF1 solid; */
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
  background: linear-gradient(to left, rgb(132, 140, 241, 0.9), rgb(198, 148, 201, 0.6));
  background-color: #848CF1;
  color: white;
`

export const modal_stack_addBox = styled.div`
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
      margin-bottom: 20px;
      height: 30px;
      
`

export const modal_stack_insert_input = styled.input`
      border-radius: 10px;
      justify-content: center;
      align-items: center;
      text-align: center;
      width: 70%;
      height: 30px;
      border: none;
      display: flex;
      /* border: 0.7px solid #848CF1; */
      border-radius: 10px;
      font-family: inherit;
      font-weight: 100;
      font-size: 13px;
      color: gray;
      margin-right: 5px;
      margin-top: 50px;
      &:focus {
      outline: none;
    }
   
`

export const modal_stack_add = styled.div`
  width: 20px;
  height: 20px;
  margin-left: 5px;
  cursor: pointer;
  color: #848CF1;
  font-weight: 100;
  font-size: 50px;
  margin-top: 10px;
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
  color: rgb(0, 0, 0, 0.6);
  margin-top: 20px;
`

export const remove_skill = styled.button`
  border: none;
  background-color: rgb(0, 0, 0, 0);
  color: white;
  cursor: pointer;
`

export const left_span = styled.span`
  margin-left: 14px;
`

export const right_span = styled.span`
   /* margin-left: 14px; */
   /* margin: 0 0 10px 10px; */

`
import styled, { css } from 'styled-components';

export const create_section = styled.div`
 padding: 0 50px 50px 50px;

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
    height: 500px;
    display: flex;
    flex-direction: column;
    /* justify-content: space-between; */
    border-radius: 10px;
    margin-bottom: 20px;
    margin: 0 40px 30px 0;
`;

export const create_right = styled.div`
    width: 400px;
    height: 500px;
  display: flex;
  flex-direction: column;
  margin: 0 0 30px 40px;
  /* justify-content: space-between; */

`;

/* 이미지 스타일 */
export const create_image = styled.img`
  margin-top: 20px;
  width: 50px;
  height: 50px;
  object-fit: cover;
  border-radius: 10px;
  border: 0.5px white solid;
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
    text-align: center;
    display: flex;
    justify-content: center; /* 세로 가운데 정렬 */
    align-items: center; /* 가로 가운데 정렬 */
    /* background: linear-gradient(to left, rgb(132, 140, 241, 0.9), rgb(198, 148, 201, 0.6));
  background-color: #848CF1; */
    border-radius: 10px;
    border: 0.5px solid gray;
    width: 80%;
    padding-bottom: 20px;
`
export const create_left_status_box = styled.div`
    padding: 0;
    display: flex;
    justify-content: space-between; /* 수평 가운데 정렬 */

`

export const StyledImageContainer = styled.label`
  position: relative;
  display: inline-block;
  cursor: pointer;
`

export const UploadButton = styled.button`
  position: absolute;
  margin-top: 20px;
  right: 0px;
  top: 0px;
  border: none;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  width: 100%;
  height: 100%;
  border-radius: 10px;
  cursor: pointer;
  opacity: 0; /* 기본적으로 숨김 */
  transition: opacity 0.3s;
  /* 호버 시 보이기 */
  ${StyledImageContainer}:hover & {
    opacity: 1;
  }

  /* 클릭 시 보이기 */
  &:active {
    opacity: 1;
  }
`;

export const create_projectName_input = styled.input`
      border-radius: 10px;
      margin-bottom: 10px;
      justify-content: center;
      align-items: center;
      text-align: center;
      width: 100%;
      height: 50px;
      display: flex;
      border: 0.5px solid gray;
      border-radius: 10px;
      font-family: inherit;
      font-weight: 100;
      font-size: 20px;
      color: gray;
      margin-top: 20px;
`

export const teamName_input = styled.input`
      border-radius: 10px;
      margin-bottom: 10px;
      justify-content: center;
      align-items: center;
      text-align: center;
      width: 100%;
      height: 40px;
      display: flex;
      border: 0.5px solid gray;
      border-radius: 10px;
      font-family: inherit;
      font-weight: 100;
      font-size: 15px;
      color: gray;
      margin-top: 20px;
`

export const create_input = styled.input`
      border-radius: 10px;
      margin-bottom: 10px;
      justify-content: center;
      align-items: center;
      text-align: center;
      width: 100%;
      height: 40px;
      display: flex;
      border: 0.5px solid gray;
      border-radius: 10px;
      font-family: inherit;
      font-weight: 100;
      font-size: 15px;
      color: gray;
`

export const insert_input = styled.input`
  border-radius: 10px;
  margin-bottom: 10px;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100%;
  height: 200px;
  display: flex;
  border: 0.5px solid gray;
  border-radius: 10px;
  font-family: inherit;
  font-weight: 100;
  font-size: 15px;
  color: gray;
  overflow-x: auto;
  white-space: nowrap;
`

export const devInputBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const dev_input = styled.input`
      border-radius: 10px;
      margin-bottom: 10px;
      justify-content: center;
      align-items: center;
      text-align: center;
      width: 44%;
      height: 40px;
      display: flex;
      border: 0.5px solid gray;
      border-radius: 10px;
      font-family: inherit;
      font-weight: 100;
      font-size: 15px;
      color: lightgray;
`

export const date_inputBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`


export const DateInput = styled.input`
      border-radius: 10px;
      margin-bottom: 10px;
      justify-content: center;
      align-items: center;
      text-align: center;
      width: 43%;
      height: 40px;
      display: flex;
      border: 0.5px solid gray;
      border-radius: 10px;
      font-family: inherit;
      font-weight: 100;
      font-size: 15px;
      color: gray;
      padding: 0 10px 0 0;

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
  font-weight: 200;
  width: 100%;
  height: 70px;

`
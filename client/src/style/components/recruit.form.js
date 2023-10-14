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
`;

export const create_left = styled.div`
    width: 400px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const create_right = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

/* 이미지 스타일 */
export const create_image = styled.img`
     width: 100%; /* 이미지를 부모 요소의 가로 크기에 맞춥니다. */
    height: 100%; /* 이미지를 부모 요소의 세로 크기에 맞춥니다. */
    border: 0.1px white solid;
    border: lightgray 0.1px solid;
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
    justify-content: space-around; /* 세로 가운데 정렬 */
    align-items: center; /* 가로 가운데 정렬 */
`
export const create_left_status_box = styled.div`
    padding: 0;
    display: flex;
    justify-content: space-between; /* 수평 가운데 정렬 */

`
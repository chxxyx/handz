import styled from 'styled-components';

export const sign_section = styled.div`
 padding: 0 50px 0 50px;
 display: flex;
 justify-content: center;
 align-items: center;
`

export const sign_box = styled.div`
    margin: 50px 80px 0 80px;
    padding: 50px;
    width: 300px;
    height: 450px;
    background-color: white;
    border-radius: 20px;
    border: 1px solid #3E2BB7;
`
export const sign_form = styled.form`

display: flex;
    flex-direction: column;
    justify-content: center; /* 세로 가운데 정렬 */
    align-items: center; /* 가로 가운데 정렬 */
`

export const sign_form_btn = styled.button`
    text-decoration: none;
    padding: 10px 20px;
    background: #4E41CB;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-weight: 200;
    width: 300px;
    height: 50px;
    margin-top: 30px;
`

export const sign_input = styled.input`
    padding: 10px;
    border-radius: 4px;
    border: 1px solid #4E41CB;
    margin-bottom: 30px;
    width: 280px;
    height: 30px;
`
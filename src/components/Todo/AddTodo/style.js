import { css } from "@emotion/react";

export const TodoInputContainer =css`
    position: relative;
    display: flex;
    align-items: flex-end;
    border-bottom: 1px solid #dbdbdb;
    padding-right: 50px;
    width: 60%;
    height: 40px;
    background-color: #eee;

`;

export const TodoInput =css`
    box-sizing: border-box;
    margin-top: 20px;
    padding: 0 70px;
    outline: none;
    border: none;
    padding: 0px 50px 0px 10px;

    border-bottom: 3px solid white;
    width: 100%;
    height: 100%;
    font-size: 1.2rem;
    transition: padding 0.5s ease;

    background-color: #eee;
    &:focus{
        padding: 0px 10px;
    }
`;

export const TodoInputFileText = css`
    font-size: 30px;
    margin: 5px;
`;
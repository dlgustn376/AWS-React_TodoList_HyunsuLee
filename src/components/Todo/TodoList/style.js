import { css } from "@emotion/react";

export const ContentContainer =css`
    margin: 10px;
    width: 300px;
    height: 300px;
    box-shadow: 0px 0px 5px 1px #dbdbdb;
    cursor: pointer;
    transition: box-shadow 0.3s ease;
    &:hover{
        box-shadow: 0px 0px 10px 1px #121212;
    }
`;


export const ContentMain=css`
    padding: 10px;
    height: 60%;
    word-break: keep-all; /*줄바꿈의 기준 단어별로 끊어서 줄바꿈.*/
    line-height: 25px;
    border-bottom: 1px solid #f0f0f0;
`;

export const ContentFooter=css`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 10px;
    padding-top: 0px;
    height: 15%;
`;

export const ContentMainButton =css`
    
    border: none;
    border-right: 2px solid #fafafa;
    
    width: 30px;
    height: 30px;
    padding: 5px;
`;

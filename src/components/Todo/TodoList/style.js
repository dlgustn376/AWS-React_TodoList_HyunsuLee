import { css } from "@emotion/react";

export const ContentContainer =css`
    margin: 10px;
    width: 250px;
    height: 250px;
    box-shadow: 0px 0px 5px 1px #dbdbdb;
    cursor: pointer;
    transition: box-shadow 0.3s ease;
    &:hover{
        box-shadow: 0px 0px 10px 1px #121212;
    }
`;


export const ContentMain = css`
    padding: 10px;
    height: 58%;
    word-wrap: break-word;
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
    
    width: 25px;
    height: 25px;
`;

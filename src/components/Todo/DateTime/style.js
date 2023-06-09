import { css } from "@emotion/react";

export const ContentHeader=css`
    display: flex;
    justify-content: center;
    border-bottom: 1px solid #f0f0f0;
    padding-top: 10px;
    height: 15%;
`;
export const TodoDate=css`
    display: flex;
    align-items: flex-start;
    height: 100%;
    font-size: 14px;
    line-height: 40px;
    padding: 0px 5px;
`;
export const TodoDateTime=css`
    display: flex;
    align-items: flex-end;
    font-size: 12px;
    font-weight: 600;
    line-height: 35px;
    padding: 0px 2px;
`;
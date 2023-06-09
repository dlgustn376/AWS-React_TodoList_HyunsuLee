import { css } from '@emotion/react';

export const style = (isOpen) => css`
    position: absolute;
    top: 0px;
    left: ${isOpen ? '0px' : '-80px'};
    z-index: 99;
    width: 120px;
    height: 100%;
    transition: left 1s ease;
`;

// export const Menu =css`
//     position: relative;

//     width: 100%;
//     height: 100%;
// `;

export const Menu = (isOpen) => css`
    border: none;
    position: absolute;
    left: ${isOpen ? '0px' : '-70px'};
    display: flex;
    justify-content: center;
    align-items: flex-start;
    background-color: #dbdbdb99;
    padding-top: 80px;
    width: 160px;
    height: 100%;
    cursor: pointer;
`;

export const MenuButton = () => css`
    border: none;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    width: 30px;
    height: 30px;
    z-index: 99;
    background-color: #dbdbdb99;
    cursor: pointer;
`;



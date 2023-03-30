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

export const Menu =css`
    position: relative;

    width: 100%;
    height: 100%;
`;

export const MenuButton = (isOpen) => css`
    border: none;
    position: absolute;
    transform: translateY(-20%);
    top: 160px;
    left: ${isOpen ? '0px' : '-50px'};
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #dbdbdb99;
    padding: 0;
    width: 150px;
    height: 100%;
    cursor: pointer;
`;

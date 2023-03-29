/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from 'react';

const AddButton = css`
    position: absolute;
    transform: translateY(-50%);
    top: 50%;
    right: 0px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    border-radius: 50%;
    padding: 0;
    width: 40px;
    height: 40px;
    font-size: 2rem;
    color: #fe2d1e;
    background-color: #eee;
    transition: all 1s ease;
    cursor: pointer;
    &:hover {
        transform: translateY(-50%) rotate(360deg);
    }

`;

const AddTodoButton = ({ onClick, children }) => {
    return (
        <button css={AddButton} onClick={onClick}>
            {children}
        </button>
    );
};

export default AddTodoButton;
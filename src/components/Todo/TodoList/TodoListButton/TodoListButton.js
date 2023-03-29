/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from 'react';

const ContentMainButton =css`
    
    border: none;
    border-right: 2px solid #fafafa;
    
    width: 30px;
    height: 30px;
    padding: 5px;
`;



const TodoListButton = ({ onClick, children }) => {
    return (
        <button css={ContentMainButton} onClick={onClick}>
            {children}
        </button>
    );
};

export default TodoListButton;
/** @jsxImportSource @emotion/react */
import * as S from './style.js';
import React from 'react';
import TodoListButton from './TodoListButton/TodoListButton.js';
import DateTime from '../DateTime/DateTime.js';
import { BiPen } from 'react-icons/bi';
import { TiTrash } from 'react-icons/ti';

const TodoList = ({ todo, openModal, onRemove }) => {
    return (
        <li css={S.ContentContainer}>
            <DateTime />
            <div css={S.ContentMain}>
                {todo.content}
            </div>
            <div css={S.ContentFooter}>
                <TodoListButton onClick={() => openModal(todo.id)}><BiPen /></TodoListButton>
                <TodoListButton onClick={() => onRemove(todo.id)}><TiTrash /></TodoListButton>
            </div>
        </li>
    );
};

export default TodoList;
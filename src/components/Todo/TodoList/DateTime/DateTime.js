/** @jsxImportSource @emotion/react */
import React from 'react';
import * as S from './style.js';

const DateTime = () => {
    const date = new Date();
    const todoNow = { hour12: true, hour: 'numeric', minute: 'numeric', second: 'numeric' };
    const formattedTime = date.toLocaleTimeString('ko-KR', todoNow);
    
    const todoToday = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const formatTodoToday = date.toLocaleDateString('ko-KR', todoToday);
    return (
        <div css={S.ContentHeader}>
            <div css={S.TodoDate}>{formatTodoToday}</div>
            <div css={S.TodoDateTime}>{formattedTime}</div>
        </div>
    );
};

export default DateTime;
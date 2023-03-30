/** @jsxImportSource @emotion/react */
import React from 'react';
import Clock from 'react-live-clock';
import { css } from '@emotion/react';


const clockConatiner=css`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 20px auto;
    margin-bottom: 5px;
    width: 600px;
    height: 80px;
    border: none;

    `;
const clockMain=css`
    line-height: 50px;
`;

const clockfont=css`
    font-size: 24px;
    font-weight: 600;
`;
const nowClock = css`
    text-align: center;
    font-size: 20px;
    font-weight: 600;
    margin: 0;
`;

const LiveClock = () => {
    return (
    <div css={clockConatiner}>
        <div css={clockMain}>
            <h3 css={nowClock}>현재시간</h3>
            <Clock css={clockfont} format={'YYYY-MM-DD HH:mm:ss'} ticking={true} timezone={'Asia/Seoul'} />
        </div>
    </div>
  );
};

export default LiveClock;

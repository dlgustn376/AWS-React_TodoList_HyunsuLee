/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React from 'react';
import MainAside from '../../components/Aside/MainAside/MainAside';
import LiveClock from '../LiveClock/LiveClock';
import BallAnimation from '../../components/BallAnimation/BallAnimation';
const HomeCotainer =css`
    position: relative;
    margin: 50px auto;
    margin-top: 0;
    border: 2px solid #dbdbdb;
    width: 600px;
    height: 800px;
    background-color: white;
    overflow: hidden;
`;
const BallBox=css`
    position: relative;
    border: none;
    top: 200px;
    left: 100px;
    width: 400px;
    height: 400px;
`;

const Home = () => {
    return (
        <>
            {/* <LiveClock /> */}
            <div css={HomeCotainer}>
                <MainAside />
                <div css={BallBox}>
                    <BallAnimation />
                </div>
            </div>
        </>
    );
};

export default Home;
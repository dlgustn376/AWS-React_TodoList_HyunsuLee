/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React from 'react';
import MainAside from '../../components/Aside/MainAside/MainAside';
import LiveClock from '../LiveClock/LiveClock';

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


const Home = () => {
    return (
        <>
            <LiveClock />
            <div css={HomeCotainer}>
                <MainAside />
            </div>
        </>
    );
};

export default Home;
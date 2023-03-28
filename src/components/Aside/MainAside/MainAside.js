/** @jsxImportSource @emotion/react */
import React from 'react';
import { Navigation } from "react-minimal-side-navigation/lib";
import 'react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css';
import { useNavigate } from 'react-router-dom';
import { HiHome } from 'react-icons/hi';
import { FcTodoList } from 'react-icons/fc';
import * as S from './Style'

const MainAside = () => {
    const navigate = useNavigate();

    return (
        <aside css={S.style}>
            <Navigation
            activeItemId="/"
            onSelect={({itemId}) => {
                navigate(itemId);
            }}
            items={[
                {
                    title: 'Home',
                    itemId: '/',
                    elemBefore: () => <HiHome />
                },
                {
                    title: 'ToDoList',
                    itemId: '/todo',
                    elemBefore: () => <FcTodoList />,
                },
            ]}
          />
        </aside>
    );
};

export default MainAside;
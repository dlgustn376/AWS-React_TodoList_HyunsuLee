/** @jsxImportSource @emotion/react */
import React from 'react';
import { Navigation } from "react-minimal-side-navigation/lib";
import 'react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css';
import { useNavigate } from 'react-router-dom';
import { HiHome } from 'react-icons/hi';
import { FcTodoList } from 'react-icons/fc';
import * as S from './Style'
import { useState } from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';

const MainAside = () => {
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);

    const asideRef = useRef();
    useEffect(
        () => {
            document.querySelector("body").onclick = (e) =>{
                 if(!asideRef.current.contains(e.targe)){
                    setIsOpen(false);
                 }
            }
        },[]
    );

    return (
        <aside css={(isOpen)} ref={asideRef}>
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
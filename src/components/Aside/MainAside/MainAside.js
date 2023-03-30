/** @jsxImportSource @emotion/react */
import React from 'react';
import { Navigation } from "react-minimal-side-navigation/lib";
import 'react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';

import * as S from './Style'

import { HiHome } from 'react-icons/hi';
import { FcTodoList } from 'react-icons/fc';

import { HiArrowCircleRight } from 'react-icons/hi';
import { HiArrowCircleLeft } from 'react-icons/hi';

const MainAside = () => {
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const asideRef = useRef();
    useEffect(
        () => {
            document.querySelector("body").onclick = (e) =>{
                 if(!asideRef.current.contains(e.target)){
                    setIsOpen(false);
                 }
            }
        },[]
    );

    

    return (
        <aside css={S.style(isOpen)} ref={asideRef}>
            {/* <div css={S.Menu}> */}
                <div css={S.Menu(isOpen, true)}>
                    
                    <Navigation
                        activeItemId="/"
                        onSelect={({itemId}) => {
                            navigate(itemId);
                        }}
                        items={[
                            {
                                title: 'Home',
                                itemId: '/home',
                                elemBefore: () => <HiHome />
                                
                            },
                            {
                                title: 'ToDoList',
                                itemId: '/todo',
                                elemBefore: () => <FcTodoList />,
                            },
                        ]}
                    />
                    <button css={S.MenuButton(isOpen, true)} onClick={toggleMenu}>
                        {isOpen ? <HiArrowCircleLeft/>:<HiArrowCircleRight/>}
                    </button>
                </div>
            {/* </div> */}

        </aside>
    );
};

export default MainAside;
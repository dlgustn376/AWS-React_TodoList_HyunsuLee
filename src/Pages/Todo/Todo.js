/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React from 'react';
import { IoMdAddCircle } from 'react-icons/io';
import { AiOutlineFileText } from 'react-icons/ai';


const container = css`
    position: relative;
    margin: 50px auto;
    border: 2px solid #dbdbdb;
    width: 600px;
    height: 800px;
    background-color: white;
    overflow: hidden;
`;
const mainContainer = css`
    margin: 10px auto;
    width: 550px;
    height: 100%;
`;

const mainHeader = css`
    display: flex;
    justify-content: space-between;
    align-items:flex-end;
    
`;
const mainTitle = css`
    margin: 20px 0px 0px 30px;
    font-size: 40px;
    
`;
const TodoInputContainer =css`
    position: relative;
    display: flex;
    align-items: flex-end;
    border-bottom: 1px solid #dbdbdb;
    padding-right: 50px;
    width: 60%;
    height: 40px;
    background-color: #eee;

`;

const TodoInputFileText = css`
    font-size: 30px;
    margin: 5px;
`;

const TodoInput =css`
    box-sizing: border-box;
    margin-top: 20px;
    padding: 0 70px;
    outline: none;
    border: none;
    padding: 0px 50px 0px 10px;

    border-bottom: 3px solid white;
    width: 100%;
    height: 100%;
    font-size: 1.2rem;
    transition: padding 0.5s ease;

    background-color: #eee;
    &:focus{
        padding: 0px 10px;
    }
`;

const AddTodoButton = css`
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
const Todo = () => {
    return (
       <>
            <div css={container}>
                <main css={mainContainer}>
                    <header css={mainHeader}>
                        <h1 css={mainTitle}>ToDo</h1>
                        <div css={TodoInputContainer}>
                            <AiOutlineFileText css={TodoInputFileText}/>
                            <input css={TodoInput} type="text" placeholder="Add your new Todo"/>
                            <button css={AddTodoButton} type='button'><IoMdAddCircle /></button>
                        </div>
                    </header>
                    <div>
                        <header></header>
                        <main></main>
                        <footer></footer>
                    </div>
                </main>
            </div>
       </>
    );
};

export default Todo;
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React, { useRef, useState } from 'react';
import MainAside from '../../components/Aside/MainAside/MainAside';
import PromptModal from '../../components/Modal/PromptModal/PromptModal';
import AddTodo from '../../components/Todo/AddTodo/AddTodo';
import TodoList from '../../components/Todo/TodoList/TodoList';
import LiveClock from '../LiveClock/LiveClock';


const container = css`
    position: relative;
    margin: 50px auto;
    margin-top: 0;
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

const TodoContentList = css`
    display: flex;
    flex-wrap: wrap;
    padding: 10px;

    width: 100%;
    height: 90%;
    overflow-y: auto;
`;



const Todo = () => {
    
    
    const [isOpen, setIsOpen] = useState(false);

    const [modifyTodo, setModifyTodo] = useState({
        id: 0,
        content: ''
    });

    const [input, setInput] = useState({
        id: 0,
        content: ''
    });
    const [todoList, setTodoList] = useState([]);
    const todoId = useRef(1);

    const onChange = (e) => {
        setInput({
            ...input,
            content: e.target.value
        });
    }

    const onKeyUp = (e) => {
        if(e.keyCode === 13) {
            onAdd();
        }
    }

    const onAdd = () => {
        const todo = {
            ...input,
            id: todoId.current++
        }
        setTodoList([...todoList, todo]);
        setInput({
            ...input, 
            content: ''
        });
    }

    const onRemove = (id) => {
        setTodoList(todoList.filter(
            todo => {
                return todo.id !== id;
            }
        ))
    }

    const updateTodo = (modifyTodo) => {
        setTodoList(
            todoList.map(
                todo => {
                    if(todo.id === modifyTodo.id) {
                        todo.content = modifyTodo.content;
                    }
                    return todo;
                }
            )
        )
    }

    const openModal = (id) => {
        setModifyTodo(todoList.filter(
            todo => todo.id === id
        )[0]);

        setIsOpen(true);
    }



    return (
       <>   
            {/* <LiveClock /> */}
            <div css={container}>
                <MainAside />
                <main css={mainContainer}>
                    <header css={mainHeader}>
                        <h1 css={mainTitle}>ToDo</h1>
                            <AddTodo onChange={onChange} onKeyUp={onKeyUp} value={input.content} onAdd={onAdd}/>
                    </header>
                    <ul css={TodoContentList}>
                        {todoList.map(
                            todo => {
                                return (
                                    <TodoList key={todo.id} todo={todo} openModal={openModal} onRemove={onRemove}/>
                                );
                            }
                        )}
                    </ul>
                </main>
                {isOpen ? (<PromptModal title={'Edit Todo'} todo={modifyTodo} setIsOpen={setIsOpen} updateTodo={updateTodo} />) : ''}

            </div>
       </>
    );
};

export default Todo;
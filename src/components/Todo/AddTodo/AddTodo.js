/** @jsxImportSource @emotion/react */
import React from 'react';
import * as S from './style';
import { IoMdAddCircle } from 'react-icons/io';
import { AiOutlineFileText } from 'react-icons/ai';
import AddTodoButton from './AddTodoButton/AddTodoButton';


const AddTodo = ({ onChange, onKeyUp, value, onAdd }) => {
    return (
        <div css={S.TodoInputContainer}>
            <AiOutlineFileText css={S.TodoInputFileText}/>
            <input css={S.TodoInput} type="text" placeholder="Add your new Todo" onChange={onChange} onKeyUp={onKeyUp} value={value} />
            {/* <button css={S.AddTodoButton} type='button' onClick={onAdd} ><IoMdAddCircle /></button> */}
            <AddTodoButton onClick={onAdd}><IoMdAddCircle /></AddTodoButton>
        </div>
    );
};

export default AddTodo;
import { css } from "@emotion/react";

// const menuAside=css`
//     position: absolute;
//     top: 0px;
//     left: 0px;
//     z-index: 99; /* 항상 젤 위로 올라올 수 있게 */
    
//     width: 300px;
//     height: 100%;
//     box-shadow: 1px 0px 5px 1px black; /*입체감*/
//     background-color: #454545;
//     transition: left 1s ease;
// `;
// const menuButton=css`
//     position: absolute;
//     transform: translateY(-50%);
//     top: 50%;
//     right: -13px;

//     display: flex;
//     justify-content: center;
//     align-items: center;

//     border: none;
//     border-top-right-radius: 20px;
//     border-bottom-right-radius: 20px;
//     padding: 0;
//     width: 13px;
//     height: 60px;

//     background-color: #454545;
//     color: #ffc472;

//     &:hover{
//         background-color: #454545;
//         text-shadow: 0px 0px 3px white;
//     }
//     &:active{
//         background-color: #454545;
//         text-shadow: 0px 0px 3px white;
//     }
// `;

// const asideHeader=css`
//     display: flex;
//     justify-content: space-between;
//     align-items: center;

//     border-bottom: 1px solid #dbdbdb;
//     padding: 20px 5px 20px 10px;

//     background-color: #121212;
// `;

// const headerTitle=css`
//     font-size: 18px;
//     color: #ffffff;
//     cursor: default;
// `;


// const menuNav=css`
//     padding-top: 20px;
// `;

// // const menuList=css``;

// const menuItems=css`
//     display: flex;
//     align-items: center;

//     border-bottom: 1px solid #dbdbdb;
//     padding: 0px 20px;
//     height: 40px;
//     background-color: #303030;
    
//     font-size: 16px;
//     color: white;

//     &:hover{
//         background-color: #121212;
//     }
// `;
// <aside css={menuAside}>
//                     <button css={menuButton} >▶</button>
//                     <header css={asideHeader}>
//                         <h1 css={headerTitle}><i class="fa-regular fa-calendar-check"></i>TODOLIST</h1>
//                     </header>
//                     <nav vss={menuNav}>
//                         <ul class="menu-list">
//                             <li css={menuItems}>To Do List</li>
//                         </ul>
//                     </nav>
//                 </aside>
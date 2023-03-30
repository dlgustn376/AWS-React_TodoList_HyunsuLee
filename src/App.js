import { Global } from '@emotion/react';
import 'react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css';
import { Route, Routes } from 'react-router-dom';
// import MainAside from './components/Aside/MainAside/MainAside';
import Home from './Pages/Home/Home';
// import Container from './Pages/Container/Container';
import Todo from './Pages/Todo/Todo';
import { reset } from './styles/Global/reset';



function App() {
  return (
    <>
      <Global styles={reset}/>
      {/* <Container> */}
        {/* <MainAside /> */}
        <Routes>
          <Route path="/home" Component={Home}></Route>
          <Route path="/todo" Component={Todo}></Route>
        </Routes>
      {/* </Container> */}
    </>
  );
}

export default App;
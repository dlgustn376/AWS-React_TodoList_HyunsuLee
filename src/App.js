import { Global } from '@emotion/react';
import 'react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Todo from './Pages/Todo/Todo';
import { reset } from './styles/Global/reset';

// import MainAside from './components/Aside/MainAside/MainAside';
// import Container from './Pages/Container/Container';


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
import { Global } from '@emotion/react';
import 'react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css';
import { Route, Routes } from 'react-router-dom';
import MainAside from './components/Aside/MainAside/MainAside';
// import Container from './Pages/Container/Container';
import LiveClock from './Pages/LiveClock/LiveClock';
import Todo from './Pages/Todo/Todo';
import { reset } from './styles/Global/reset';



function App() {
  return (
    <>
      <Global styles={reset}/>
      {/* <Container> */}
        <MainAside />
        <Routes>
          <Route path="/" Component={LiveClock}></Route>
          <Route path="/todo" Component={Todo}></Route>
        </Routes>
      {/* </Container> */}
    </>
  );
}

export default App;
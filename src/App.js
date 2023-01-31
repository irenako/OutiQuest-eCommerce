import './App.css';
import NavbarComponent from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css'
import {Container} from 'react-bootstrap'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

//pages 
import Success from './pages/Success.jsx'
import Store from './pages/Store.jsx'
import Cancel from './pages/Cancel.jsx'
import CartProvider from './CardContext';

function App() {
  return (
    <CartProvider>
      <Container>
      <NavbarComponent></NavbarComponent>
      <BrowserRouter>
      <Routes>
        <Route index element={<Store />}/>
        <Route path='success' element={<Success />}/>
        <Route path='cancel' element={<Cancel />}/>
      </Routes>
      </BrowserRouter>
      </Container>
      </CartProvider>
  );
}

export default App;

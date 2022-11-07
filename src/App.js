import logo from './logo.svg';
import './App.css';
import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route , Link} from 'react-router-dom';
// import Home from './pages/home/home.component';
// import ShopPage from './pages/shop/shop.component';
// import Contacts from './pages/contacts/contacts.component';
// import Header from './components/header/header.component';
const Header = lazy(() => import('./components/header/header.component'));
const Home = lazy(() => import('./pages/home/home.component'));
const ShopPage = lazy(() => import('./pages/shop/shop.component'));
const Contacts = lazy(() => import('./pages/contacts/contacts.component'));
const LoginRegister = lazy(() => import('./pages/login-register/login-register.component'));
const Head=()=>(

  <Header/>
 
);
const Paths=()=>(
  
  
  <Router>
  
  <Suspense fallback={<div>Loading...</div>}>
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/about" element={<Head />} />
      <Route path="/shop" element={<ShopPage />} />
      <Route path="/contacts" element={<Contacts />} />
      <Route path="/login-register" element={<LoginRegister />} />
    </Routes>
  </Suspense>
</Router>
  
);
function App() {

  return (
    
    <div>  
      
      <Paths />
  
    </div>
  );
}

export default App;

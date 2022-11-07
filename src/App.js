import logo from './logo.svg';
import './App.css';
import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route , Link} from 'react-router-dom';
import Home from './pages/home/home.component';
import ShopPage from './pages/shop/shop.component';
import Contacts from './pages/contacts/contacts.component';
import Header from './components/header/header.component';
const Head=()=>(
  <Header />
 
);
const Paths=()=>(
  <Router>
  <Suspense fallback={<div>Loading...</div>}>
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/about" element={<Head />} />
      <Route path="/shop" element={<ShopPage />} />
      <Route path="/contacts" element={<Contacts />} />
    </Routes>
  </Suspense>
</Router>
);
function App() {
  return (
    <div className='app'>  
    
    <Paths />
  
    </div>
  );
}

export default App;

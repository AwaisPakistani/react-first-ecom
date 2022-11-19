import logo from './logo.svg';
import './App.css';
import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route , Link} from 'react-router-dom';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { onAuthStateChanged } from 'firebase/auth';
const Home = lazy(() => import('./pages/home/home.component'));
const ShopPage = lazy(() => import('./pages/shop/shop.component'));
const Contacts = lazy(() => import('./pages/contacts/contacts.component'));
const About = lazy(() => import('./pages/about/about.component'));
const LoginRegister = lazy(() => import('./pages/login-register/login-register.component'));
const Header = lazy(() => import('./components/header/header.component'));


// import Home from './pages/home/home.component';
// import ShopPage from './pages/shop/shop.component';
// import Contacts from './pages/contacts/contacts.component';
// import Header from './components/header/header.component';

class App extends React.Component{
  constructor(){
    super();
    this.state={
      currentUser:null
    };
  

  }

  unSubscribeFromAuth=null;
  componentDidMount(){
    this.unSubscribeFromAuth=auth.onAuthStateChanged(user=>{
      //createUserProfileDocument(user);
      this.setState({currentUser:user});
      console.log(user);
    });
  }

  componentWillUnmount(){
    this.unSubscribeFromAuth();
  }

  
 
  render(){
    
    return(
      <div> 
      
       <Router>
       
       <Suspense fallback={<div>Loading...</div>}>
         <Routes>
           <Route exact path="/" element={<Home />} />
           <Route path="/about" element={<About />} />
           <Route path="/shop" element={<ShopPage />} />
           <Route path="/contacts" element={<Contacts />} />
           <Route path="/login-register" element={<LoginRegister />} />
         </Routes>
       </Suspense>
     </Router>
  
      </div>
    );
  };
}

export default App;


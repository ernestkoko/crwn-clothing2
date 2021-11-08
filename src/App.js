
import React from 'react';
import {Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { auth } from './firebase/firebase.utils';
import { onAuthStateChanged } from '@firebase/auth';




class App extends React.Component {
  constructor(){
    super();

    this.state= {
      currentUser:null
    }
  }
  unsubscribeFromAuth=null;

  componentDidMount(){
   this.unsubscribeFromAuth= onAuthStateChanged(auth,(user)=>{
      this.setState({currentUser: user});

      console.log(user);
    })
  }

  componentWillUnmount(){
    //this closes the subscription
    this.unsubscribeFromAuth();
  }


  render(){
    return (
      <div >
        {//Give the current user state to the Header so the signout button knows
        }
        <Header currentUser={ this.state.currentUser }/>
       { /***********
        **VERSION 6  of react-router-dom uses Routes as the parent of Route
        and user element and not component
       */}
         <Routes>     
        <Route  path='/' element={<HomePage/>} />
        <Route  path='/shop' element={<ShopPage/>} />
        <Route  path='/signin' element={<SignInAndSignUpPage/>} />
        
  </Routes>
          
      </div>
    );
  }
  
}

export default App;

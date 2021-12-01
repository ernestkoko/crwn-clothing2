
import React from 'react';
import {Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { auth,createuserProfileDocument } from './firebase/firebase.utils';
import { onAuthStateChanged } from '@firebase/auth';
import { onSnapshot } from 'firebase/firestore';




class App extends React.Component {
  constructor(){
    super();

    this.state= {
      currentUser:null
    }
  }
  unsubscribeFromAuth=null;

  componentDidMount(){
   this.unsubscribeFromAuth= onAuthStateChanged(auth,async userAuth=>{
      // this.setState({currentUser: userAuth});

      if(userAuth){
      const userRef = await createuserProfileDocument(userAuth);

      ///Subscribe to changes on the snapshot
      onSnapshot(userRef,(snapshot)=>{
        
        this.setState({
          currentUser:{
            id:snapshot.id,
            ...snapshot.data()
          }
        },  //callback for setstate
        );

       },(error)=>{
         console.log("error occurred with Snapshot: "+error); 
       }) 
      
       }  
//set the state of the current user to userAuth which is null right now
       this.setState({
         currentUser:userAuth
       });
   
    });
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

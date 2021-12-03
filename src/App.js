
import React from 'react';
import {Routes, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { auth,createuserProfileDocument } from './firebase/firebase.utils';
import { onAuthStateChanged } from '@firebase/auth';
import { onSnapshot } from 'firebase/firestore';
import { setCurrentUser } from './redux/user/user.actions';




class App extends React.Component {
  
  unsubscribeFromAuth=null;

  componentDidMount(){
    //destructure
    const { setCurrentUser } = this.props;


   this.unsubscribeFromAuth= onAuthStateChanged(auth,async userAuth=>{
      // this.setState({currentUser: userAuth});

      if(userAuth){
      const userRef = await createuserProfileDocument(userAuth);

      ///Subscribe to changes on the snapshot
      onSnapshot(userRef,(snapshot)=>{        
        setCurrentUser({
            id:snapshot.id,
            ...snapshot.data()
          })
       }); 
      
       }  
//set the state of the current user to userAuth which is null right now
      setCurrentUser(userAuth);
   
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
        <Header />
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

const matchDispatchToProps = dispatch =>({
setCurrentUser: user => dispatch(setCurrentUser(user))
});
//pass in null as first arg because we do not need any state here
export default connect(null, matchDispatchToProps)(App);

import React from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import {auth, signInWithGoogle } from '../../firebase/firebase.utils';
import { signInWithEmailAndPassword } from '@firebase/auth';

import './sign-in.styles.scss';

class SignIn extends React.Component{
    constructor(props){
        super(props);

        this.state={
            email:'',
            password:''
        }
    }

    handleSubmit =async (event)=>{
//prevent default submit action
          event.preventDefault();

      const    {email, password}= this.state;
     

      try{
            
        await signInWithEmailAndPassword(auth,email,password);
         //clear the fields
         this.setState({email:'', password:''})
      }catch(error){
          console.log(error);
      }
         
    }
    handleChange=(event)=>{
        const {value, name}=event.target;

        this.setState({[name]: value})
    }

    render(){
        return(
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>
                <form action="" onSubmit={this.handleSubmit}>

                    <FormInput type="email" name='email' value={this.state.email}
                    label='email' handleCahnge={ this.handleChange} required />                    

                    <FormInput type="password" name='password' value={this.state.password}
                    label='password' handleCahnge={ this.handleChange} required />

                    <div className='buttons'>
                        <CustomButton type="submit"   >Sign in</CustomButton>
                        <CustomButton onClick={ signInWithGoogle } isGoogleSignIn>
                        Sign in with Google
                        </CustomButton>
                    </div>                   

                    
                </form>

            </div>
        )
    }
}

export default SignIn;
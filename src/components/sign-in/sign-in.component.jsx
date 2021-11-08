import React from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { signInWithGoogle } from '../../firebase/firebase.utils';

import './sign-in.styles.scss';

class SignIn extends React.Component{
    constructor(props){
        super(props);

        this.state={
            email:'',
            password:''
        }
    }

    handleSubmit = (event)=>{
//prevent default submit action
          event.preventDefault();
          //clear the fields
          this.setState({email:'', password:''})
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
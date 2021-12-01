import React from 'react';
import FormInput from '../form-input/form-input.component';
import './sign-up.styles.scss';
import { auth, createuserProfileDocument } from '../../firebase/firebase.utils';
import CustomButton from '../custom-button/custom-button.component';
import { createUserWithEmailAndPassword } from '@firebase/auth';

class SignUp extends React.Component{
    constructor(){
        super();


        this.state={
            displayName:'',
            email:'',
            password:'',
            confirmPassword:''
        }
    }


//handle subit
handleSubmit = async event=>{
    //prevent the default behaviour
    event.preventDefault();

    const { displayName, email, password, confirmPassword } = this.state;

    if(password !== confirmPassword){
        alert('passwords don\'t match')
        console.log("Password not equal");
        return;
    }

    try{
        const { user } = await createUserWithEmailAndPassword(auth, email,password);
       await  createuserProfileDocument(user, {displayName});
    //set the state
     this.setState({
    displayName:'',
    email:'',
    password:'',
    confirmPasword:''
})

    }catch(error){
        console.log(error);

    }

};


//handle change

handleChange= event=>{
    const {name, value }= event.target;

    this.setState({[name]: value});

}







    render(){
        const { displayName, email, password, confirmPassword } = this.state;
        return (
            <div className='sign-up'>
                <h2 className='title'>I do not have an account</h2>
                <span>Sign up with your email and password</span>
                <form className='sign-up-form' onSubmit={this.handleSubmit} action="">
                    <FormInput type='text' name ='displayName'
                    value ={displayName} onChange={this.handleChange}
                    label='Display Name' required />

                  
                    <FormInput type='email' name ='email'
                    value ={email} onChange={this.handleChange}
                    label='Email' required />

                    
                    <FormInput type='password' name ='password'
                    value ={password} onChange={this.handleChange}
                    label='Password' required />

                   
                    <FormInput type='password' name ='confirmPassword'
                    value ={confirmPassword} onChange={this.handleChange}
                    label='Confirm Password' required />

                    <CustomButton type='submit'>SIGN UP</CustomButton>

                    
                </form>
            </div>
        )
    }
}


export default SignUp;
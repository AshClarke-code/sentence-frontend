import React, {useContext} from 'react';
import {Input} from './../Input/input.component';
import {CustomButton} from './../Button/button.component';
import {UserContext} from './../../contexts/user.context';
import {Form, LinkButton, ButtonContainer} from './signUpForm.styles';

export const SignUpForm = () => {
    const {signUpData, handleSignUpChange, signUp} = useContext(UserContext);
  return (
    
    <Form onSubmit={signUp}>
        <Input
        label="Name"
        name="name"
        placeholder="Enter your name"
        handleChange={handleSignUpChange}
        value={signUpData.name}/>
        <Input
        label="Email"
        name="email"
        placeholder="Enter your email"
        handleChange={handleSignUpChange}
        value={signUpData.email}/>
        <Input
        label="Password"
        name="password"
        placeholder="Enter your password"
        handleChange={handleSignUpChange}
        value={signUpData.password}/>
        <Input
        label="Confirm Password"
        name="passwordConfirm"
        placeholder="Confirm your password"
        handleChange={handleSignUpChange}
        value={signUpData.passwordConfirm}/>
        <ButtonContainer>
            <LinkButton to="/auth/login">Log in</LinkButton>
            <CustomButton type="submit">Sign up</CustomButton>
        </ButtonContainer>
    </Form>
  )
}

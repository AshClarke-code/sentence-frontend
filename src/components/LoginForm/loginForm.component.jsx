import React, {useContext} from 'react';
import {Input} from './../Input/input.component';
import {CustomButton} from './../Button/button.component';
import {UserContext} from './../../contexts/user.context';
import {Form, LinkButton, ButtonContainer} from './loginForm.styles';

export const LoginForm = () => {
    const {loginData, handleLoginChange, login} = useContext(UserContext);
    return (
        <Form onSubmit={login}>
            <Input
            label="Email"
            name="email"
            placeholder="Enter your email"
            handleChange={handleLoginChange}
            value={loginData.email}/>
            <Input
            label="Password"
            name="password"
            placeholder="Enter your password"
            handleChange={handleLoginChange}
            value={loginData.password}/>

            <ButtonContainer>
                <LinkButton to="/auth/signup">Sign up</LinkButton>
                <CustomButton type="submit" inverted>Log in</CustomButton>
            </ButtonContainer>
        </Form>
    )
}
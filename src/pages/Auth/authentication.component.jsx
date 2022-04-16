import React from 'react';
import {Switch, Route, useRouteMatch, Redirect} from 'react-router';
import {SignUpForm} from './../../components/SignUpForm/signUpForm.component';
import {LoginForm} from './../../components/LoginForm/loginForm.component';
import {Container, Card} from './authentication.styles';

export const AuthenticationPage = () => {
  const match = useRouteMatch();
  return (
    <Container>
        <Card>
          <Switch>
            <Route exact path={`${match.url}/signup`} component={SignUpForm}/>
            <Route exact path={`${match.url}/login`} component={LoginForm}/>
            <Route exact path={`${match.url}`} render={() => <Redirect to={`${match.url}/signup`}/>}/>
          </Switch>
        </Card>
    </Container>
  )
}

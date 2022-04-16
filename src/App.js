import React, {useContext, useEffect} from 'react';
import {Switch, Route, Redirect} from 'react-router';
import {UserContext} from './contexts/user.context';
import {Header} from './components/Header/header.component';
import {HomePage} from './pages/Home/home.component';
import {SentenceListPage} from './pages/SentenceList/sentenceList.component';
import {AuthenticationPage} from './pages/Auth/authentication.component';

import './App.scss';


function App() {
  const {currentUser, getCurrentUser} = useContext(UserContext);

  useEffect(() => {
    getCurrentUser();
  }, [])
  return (
    <div className="App">
      { currentUser ? <Header/> : null }
      <Switch>
        <Route exact path="/" render={() => currentUser ? <Redirect to="/words"/>: <Redirect to="/auth/signup"/>}/>
        <Route path="/words" render={() => currentUser ? <HomePage/>: <Redirect to="/auth/signup"/>}/>
        <Route path="/auth" render={() => currentUser ? <Redirect to="/words"/>: <AuthenticationPage/>}/>
        <Route exact path="/sentences" render={() => currentUser ? <SentenceListPage/>: <Redirect to="/auth/signup"/>}/>
      </Switch>
    </div>
  );
}

export default App;

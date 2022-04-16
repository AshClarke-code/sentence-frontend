import React from 'react';
import {Switch, Route, Redirect} from 'react-router';
import {Header} from './components/Header/header.component';
import {HomePage} from './pages/Home/home.component';
import {SentenceListPage} from './pages/SentenceList/sentenceList.component';

import './App.scss';


function App() {
  return (
    <div className="App">
      <Header/>
      <Switch>
        <Route exact path="/" render={() => <Redirect to="/words"/>}/>
        <Route path="/words" component={HomePage}/>
        <Route exact path="/sentences" component={SentenceListPage}/>
      </Switch>
    </div>
  );
}

export default App;

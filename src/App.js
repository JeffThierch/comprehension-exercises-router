import React, { Component } from 'react';
import Home from './components/Home';
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom'
import About from './components/About';
import Users from './components/Users';
import StrictAccess from './components/StrictAccess';

class App extends Component {
  
  render() {
    const user = {
      username: `joao`,
      password: '1234'
    }
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/about" component={ About } />
          <Route path="/users/:id" render={ (props) => <Users {...props } greetingsMessage="Good Morning"/> } />
          <Route path="/strict-access" >
            <StrictAccess user={user}/>
          </Route>
          <Route exact path="/" component={ Home }/>
        </Switch>
        <ul>
          <li> 
            <Link to='/'>Home</Link>
          </li>
          <li> 
            <Link to='/about'>About</Link>
          </li>
          <li>
            <Link to='/users'>Users</Link>
          </li>
          <li>
            <Link to='/strict-access'>strictAccess</Link>
          </li>
        </ul>
     
     
      
      </BrowserRouter>
    );
  }
}

export default App;

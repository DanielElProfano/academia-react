import { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header  from './components/Header';
import Footer from './components/Footer';
import Student from './containers/Student';
import Professor from './containers/Professor';
import LoginForm from './containers/loginForm';
import Home from './components/Home'
import './App.css';

const App = () =>{
  const empty = {
    name : '',
    rol: '',
    _id: ''
  }
  const [admin, setAdmin] = useState(false);
  const [logUser, setLogUser] = useState(empty);
 

  const login = (user) => {
    setAdmin(true);
    setLogUser(user);
  }
    return(
      
      <Router>
       <Header  user={logUser} />
        <Switch>
          {admin === false &&
          <Route path="/login" component={
            (props) => <LoginForm {...props} logUser={login}/>
          }/>}
          
          <Route path="/professor" exact component={Professor}/>
          <Route path="/student" exact component={Student}/>
          <Route path='/' component={Home}/>
        </Switch>
        <Footer />
      </Router>
      )  
  }    
export default App;

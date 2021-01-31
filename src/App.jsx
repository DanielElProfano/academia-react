import { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header  from './components/Header';
import Footer from './components/Footer';
import Professor from './containers/Professor';
import LoginForm from './containers/loginForm';
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
    if(user.rol === 'admin'){
      setAdmin(true);
    }
    debugger
  setLogUser(user);
  }
    return(
      
      <Router>
       <Header  user={logUser} admin={admin}/>
        <Switch>
          {admin === false &&
          <Route path="/login" component={
            (props) => <LoginForm {...props} logUser={login}/>
          }/>}
          <Route path="/professor" component={Professor}/>

        </Switch>
        
       

        <Footer />
      </Router>
      )  
  }    
export default App;

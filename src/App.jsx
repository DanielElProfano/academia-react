import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header  from './components/Header';
import Footer from './components/Footer';
import Student from './containers/Student';
import Professor from './containers/Professor';
import LoginForm from './containers/loginForm';
import Course from './containers/Course';
import Home from './components/Home';
import checkSession from './api/auth';
import CreateProfessor from './containers/CreateProfessor';
import CreateCourse from './containers/CreateCourse';
import AddProfToCourse from './components/AddProfToCourse';
import AddStdToCourse from './containers/AddStdToCourse';
import './App.css';


export const UserContext = React.createContext({

});
const App = () =>{
  const empty = {
    name : '',
    rol: '',
    _id: ''
  }
  const [hasUser, setHasUser] = useState(false);
  const [logUser, setLogUser] = useState(empty);
  
  useEffect (() => {
    checkSessionUser();
  },[])

  const checkSessionUser = async() => {
    try{
      const data = await checkSession();
          delete data.password;
          setLogUser(logUser);
          setHasUser(true);
     
    }catch(error){
      console.log(error)
    }
  }

  const login = (user) => {
    setHasUser(!hasUser);
    setLogUser(user);
    console.log("login: " + hasUser)
  }

  const logoutUser = state =>{
    setLogUser(empty)
    setHasUser(!hasUser);
  }

    return(
      <UserContext.Provider value = {hasUser}>
        <Router>
        <Header  
            user={logUser} 
            hasUser={hasUser}
            logoutUser={logoutUser}
            />
          <Switch>
            {!hasUser &&
            <Route path="/login" component={
              (props) => <LoginForm {...props} logUser={login}/>
            }/>}
            <Route path="/course/add" exact component={AddProfToCourse}/>
            <Route path="/course/create" exact component={CreateCourse}/>
            <Route path="/professor/create" extact component={CreateProfessor}/>
            <Route path="/professor" exact component={Professor}/>
            <Route path="/student" exact component={Student}/>
            <Route path="/student/add" exact component={AddStdToCourse}/>
            
            <Route path="/course" exact component={Course}/>
            
            <Route path='/' exact component={Home} />
          </Switch>
                    
          <Footer />
        </Router>
      </UserContext.Provider>
      )  
  }    
export default App;

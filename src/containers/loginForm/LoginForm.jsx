import React, { Component } from "react";
import { Timeline, Tween } from 'react-gsap';
import { login } from '../../api/auth';

import './LoginForm.scss';

// 8 caráctere, mayúscula, minúsula y número;
const INITIAL_STATE = {
  mail: "",
  password: "",
  error: "",
  message: ""
};

class LoginForm extends Component {
  constructor(){
    super()  
    this.hasUser = false;
  }

    state = INITIAL_STATE;

    validate = (email) => {
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(email).toLowerCase());
    };


  handleSubmitForm = async ev => {
      ev.preventDefault();
      debugger
      const emailIsValid = this.validate(this.state.mail)
      if(emailIsValid && this.state.password !== ""){
        try {
          const data = await login(this.state);
          this.props.logUser(data);
          this.setState(INITIAL_STATE);
        }catch(error) {
          debugger
          const {message} = error;
          this.setState({ 
            message,
            error: "error" });
        }
      }else{
        if(!emailIsValid){
          this.setState({
            error: true,
            message: 'Introduzaca un email válido'
          })
        }else {
          this.setState({
            error: true,
            message: 'Email o password Invalidos'
          })
        }
      }
  }

  handleChangeInput = (ev) => {
    const { name, value } = ev.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
    <div className="b-loginform__background">
    <Timeline target = {
      <div className="b-loginform">
          {!this.state.hasUser &&
            <div className="b-loginform__container">
              <div className="b-loginform__container__img">
                <img className="b-loginform__img" src="/images/papel.png" alt=""/>
              </div>
              <form className="b-loginform__form" onSubmit={this.handleSubmitForm}>
                <h1 className="b-loginform__title">Login</h1>
                <label htmlFor="mail">
                  <p>Email</p>
                  <input
                    type="text"
                    name="mail"
                    value={this.state.mail}
                    onChange={this.handleChangeInput}
                  />
                </label>

                <label htmlFor="password">
                  <p>Contraseña</p>
                  <input
                    type="password"
                    name="password"
                    value={this.state.password}
                    onChange={this.handleChangeInput}
                  />
                </label>

                {this.state.error && <p style={{ color: 'red' }}>
                  Ha ocurrido un error: {this.state.message}
                </p>}
                <div style={{ marginTop: '20px' }}>
                    <button className="b-loginform__button" type="submit">Login</button>
                </div>
              </form>
            </div>}
      </div>}>
      <Tween  from={{ opacity: 0 }} 
                    to={{ opacity:1}} duration={2}/>
      </Timeline>
    </div>
    );
  }
}

export default LoginForm;

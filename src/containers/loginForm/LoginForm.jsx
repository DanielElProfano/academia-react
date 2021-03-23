import React, { Component } from "react";
import { Timeline, Tween } from 'react-gsap';
import { login } from '../../api/auth';

import './LoginForm.scss';

// 8 caráctere, mayúscula, minúsula y número;
const INITIAL_STATE = {
  mail: "",
  password: "",
  error: "",
};


class LoginForm extends Component {
  constructor(){
    super()  
    this.hasUser = false;
  }
  
    state = INITIAL_STATE;

  handleSubmitForm = async ev => {
      ev.preventDefault();

      try {
        const data = await login(this.state);
        if(data.message === "user not found"){
        }else{
        console.log('LOGIN COMPLETADO', data);
        this.props.logUser(data);
        this.setState(INITIAL_STATE);
        }
      }catch(error) {
        this.setState({ error: error.message });
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
                  Ha ocurrido un error: {this.state.error}
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

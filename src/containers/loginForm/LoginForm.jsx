import React, { Component } from "react";
import { login } from '../../api/auth';

import './LoginForm.scss';

// 8 caráctere, mayúscula, minúsula y número;
const INITIAL_STATE = {
  mail: "",
  password: "",
  error: "",
};

class LoginForm extends Component {
  state = INITIAL_STATE;

  handleSubmitForm = async ev => {
      ev.preventDefault();

      try {
        const data = await login(this.state);
        console.log('LOGIN COMPLETADO', data);
        this.props.logUser(data);
        this.setState(INITIAL_STATE);
      } catch(error) {
        this.setState({ error: error.message });
      }
  }

  handleChangeInput = (ev) => {
    const { name, value } = ev.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="b-loginform">
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
      </div>
    );
  }
}

export default LoginForm;
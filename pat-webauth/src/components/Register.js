import React from 'react';
import axios from 'axios';

class Register extends React.Component {
  constructor() {
    super()
    this.stat = {
      
        username: '',
        password:''
      
    }
  }

  addUser = event => {
    event.preventDefault();

    const user ={
      username: this.state.username,
      password: this.state.password
    }

    axios
    .post('http://localhost:4000/api/users', user)
    .then(res => {
      this.props.handleData(res.data);
      console.log('this is res from registration form', res);
      this.setState({
        username: '',
        password: ''
      })
    })
    .catch(err => {
      console.log('registration form', err)
    });
  };

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  
  render() {
    return (
      <div className='RegistrationForm'>
        <h2> I am the Register Component</h2>
        <form onSubmit={this.addUser}>
          <input
            onChange={this.handleInputChange}
            placeholder='username'
            value={this.state.username}
            name="username" 
          />

          <input
            onChange={this.handleInputChange}
            placeholder='password'
            value={this.state.password}
            name="password" 
          />
          <button type='submit'>Register New User</button>
        </form>
      </div>
    )
  }
}

export default Register;
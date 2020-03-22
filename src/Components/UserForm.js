import React from 'react';
import { Form } from 'semantic-ui-react';


export default class UserForm extends React.Component {

  state = {
    firstName:"",
    lastName:"",
    email:"",
    phone:""
  }

  handleChange = (e, {name, value}) => {
    console.log(e)
    console.log(name)
    console.log(value)
    this.setState({
      [e.target.name]: e.target.value,
      [name]: value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(e)
  }


  render() {
    const { firstName, lastName, phone, email } = this.state;
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Input
          label="First Name"
          type="text"
          name="firstName"
          value={firstName}
          onChange={this.handleChange}
        />
        <Form.Input
          label="Last Name"
          type="text"
          name="lastName"
          value={lastName}
          onChange={this.handleChange}
        />
        <Form.Input
          label="email"
          type="text"
          name="email"
          value={email}
          onChange={this.handleChange}
        />
        <Form.Input
          label="Phone Number"
          type="text"
          name="phone"
          value={phone}
          onChange={this.handleChange}
        />
        <Form.Button color="blue">Save</Form.Button>
      </Form>
    )
  }
}
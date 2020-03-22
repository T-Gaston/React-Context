import React from 'react';
import { Form } from 'semantic-ui-react';
import { UserConsumer } from '../Providers/UserProvider';


class UserForm extends React.Component {

  state = {
    firstName: this.props.firstName,
    lastName: this.props.lastName,
    email: this.props.email,
    phone: this.props.phone,
  };

  handleChange = (e, {name, value}) => {
    console.log(e)
    console.log(name)
    console.log(value)
    this.setState({
      [e.target.name]: e.target.value,
      [name]: value
    })
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(e)
    const user = {...this.state};
    this.props.updateUser(user);
  };


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


const connectedUserForm = (props) => {
  return(
    <UserConsumer>
      { value => (
        <UserForm 
          {...props}
          firstName={value.firstName}
          lastName={value.lastName}
          email={value.email}
          phone={value.phone}
          updateUser={value.updateUser}
        />
      )}
    </UserConsumer>
  )
}

export default connectedUserForm;
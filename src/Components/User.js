import React from "react";
import { Card, } from "semantic-ui-react";

const User = () => (
  <Card>
    <Card.Content>
      <Card.Header>First Name Last Name</Card.Header>
    </Card.Content>
    <Card.Content>
      <p>email</p>
      <p>phone</p>
    </Card.Content>
  </Card>
)

export default User;
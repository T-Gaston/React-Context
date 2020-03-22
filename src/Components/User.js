import React, { useContext } from "react";
import { Card, } from "semantic-ui-react";
import { UserConsumer, UserContext } from "../Providers/UserProvider";


const User = () => {
  const {firstName, lastName, email, phone} = useContext(UserContext);
  return(
      <Card>
        <Card.Content>
          <Card.Header>{firstName} {lastName}</Card.Header>
        </Card.Content>
        <Card.Content>
          <p>{email}</p>
          <p>{phone}</p>
        </Card.Content>
      </Card>
  )
}

export default User;
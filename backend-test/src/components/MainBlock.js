import React, { useEffect, useState } from 'react';
import { Card } from 'semantic-ui-react'

import AxiosThing from '../util/AxiosThing';


function MainBlock() {

    const [users, setUsers] = useState([]);
    console.log(users);

    useEffect(() => {
        AxiosThing()
        .get('/users')
        .then(res => {
            setUsers(res.data);
        })
        .catch(err => console.log(err));
      }, []);

  return (
    <div className="MainBlock">
        <p>Something important</p>
        <Card.Group centered>
            {users.map(user => (
                        <Card key={user.id}>
                            <Card.Content>
                                <Card.Header>User {user.id}</Card.Header>
                                <Card.Meta>{user.name}</Card.Meta>
                                <Card.Description>{user.bio}</Card.Description>
                            </Card.Content>
                        </Card>
                    ))}
        </Card.Group>
    </div>
  );
}

export default MainBlock;

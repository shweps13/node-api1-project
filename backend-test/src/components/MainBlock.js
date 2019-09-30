import React, { useEffect, useState } from 'react';
import { Card } from 'semantic-ui-react'

import AxiosThing from '../util/AxiosThing';
import CardBtn from './CardBtn';


function MainBlock() {

    const [users, setUsers] = useState([]);
    const [state, setState] = useState('');
    console.log(users);

    useEffect(() => {
        AxiosThing()
        .get('/users')
        .then(res => {
            setUsers(res.data);
        })
        .catch(err => console.log(err));
      }, [state]);

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
                                <CardBtn id={user.id} setState={setState} />
                            </Card.Content>
                        </Card>
                    ))}
        </Card.Group>
    </div>
  );
}

export default MainBlock;

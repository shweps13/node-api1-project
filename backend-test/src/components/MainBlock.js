import React, { useEffect, useState } from 'react';
import { Card } from 'semantic-ui-react'

import AxiosThing from '../util/AxiosThing';
import CardBtn from './CardBtn';
import AddUser from './AddUser';


function MainBlock() {

    const [users, setUsers] = useState([]);
    const [state, setState] = useState('');
    const [update, setUpdate] = useState(false);
    console.log(users);

    useEffect(() => {
        AxiosThing()
        .get('/users')
        .then(res => {
            setUsers(res.data);
        })
        .catch(err => console.log(err));
      }, [state, update]);

  return (
    <div className="MainBlock">
        <AddUser update={update} setUpdate={setUpdate} />
        <Card.Group centered>
            {users.map(user => (
                        <Card key={user.id}>
                            <Card.Content>
                                <Card.Header>User {user.id}</Card.Header>
                                <Card.Meta>{user.name}</Card.Meta>
                                <Card.Description>{user.bio}</Card.Description>
                            </Card.Content>
                            <CardBtn id={user.id} setState={setState} />
                        </Card>
                    ))}
        </Card.Group>
    </div>
  );
}

export default MainBlock;

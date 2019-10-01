import React  from 'react';
import { Button } from 'semantic-ui-react'

import AxiosThing from '../util/AxiosThing';


function MainBlock(props) {

      const deleteUser = () => {
        AxiosThing()
          .delete(`/users/${props.id}`)
          .then(res => {
              console.log(`User with id ${props.id} deleted`);
              props.setState(res);
          })
          .catch(err => console.log(err));
    };

  return (
    <>
        <Button onClick={deleteUser}>Delete</Button>

    </>
  );
}

export default MainBlock;

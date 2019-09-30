import React from "react";
import AxiosThing from "../util/AxiosThing";

import { Container, Header, Button, Form  } from 'semantic-ui-react'

class AddForm extends React.Component {
  
  state = {
    userData: {
      name: '',
      bio: ''
    }
  };

  handleChange = e => {
    this.setState({
      userData: {
        ...this.state.userData,
        [e.target.name]: e.target.value
      }
    });
  };
  
  componentDidMount() {

    this.setState({
        userData: {
          ...this.state.userData
        }
      });
  }

  login = e => {
    e.preventDefault();
    AxiosThing()
      .post(`/users`, this.state.userData)
      .then(res => {
        this.props.setUpdate(!this.props.update);
      })
      .catch(err => console.log('Oh-oh, something wrong', err));
  };
  
    
  render() {
  return (
    <Container text>
      <div className="AddProduct">
      <Header as='h2'>Add new User</Header>
      <Form onSubmit={this.login}>
        <Form.Field>
        <label>User Name</label>
          <input
            type="text"
            name="name"
            value={this.state.userData.name}
            onChange={this.handleChange}
          />
        </Form.Field>
        <Form.Field>
        <label>Bio</label>
          <input
            type="text"
            name="bio"
            value={this.state.userData.bio}
            onChange={this.handleChange}
          />
        </Form.Field>
          <div className="AddBtns">
            <Button primary type='submit' onClick={console.log(this.state.userData)}>Add product</Button>
          </div>
        </Form>
        </div>
    </Container>
  );
  }
};

export default AddForm;
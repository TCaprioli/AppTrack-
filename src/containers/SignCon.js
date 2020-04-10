import React from 'react';
import {connect} from 'react-redux';
import {Form, Button} from 'react-bootstrap'
import fetchUser from '../actions/fetchUser'




class SignCon extends React.Component {
    state={
        email:"",
        password:""
      }

    handleSubmit =async (event)=>{

        event.preventDefault()
        this.props.fetchUser(this.state)
        this.props.history.push('/')
    }

    handleInput=(event)=>{
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render(){
    let {email, password} = this.state
        return (
        <div className='signcon'>
           <Form onSubmit={this.handleSubmit}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name="email" value={email}
                     placeholder="Enter email" onChange={this.handleInput}/>
                    <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password"
                    value={password} placeholder="Password" onChange={this.handleInput}/>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Sign Up
                </Button>
             </Form>
        
        </div>
      );
    }
}

export default connect(null,{fetchUser})(SignCon);

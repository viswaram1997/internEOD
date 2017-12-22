import React, { Component } from 'react'
import {Grid, Icon, Form, Card, Button, Message} from 'semantic-ui-react'

export default class LoginRegister extends Component {
    constructor(){
        super();
        this.state = {
            option: 'login',
            registerPage1: true,
            registerPage2: false,
            forgotPage1 : true,
            forgotPage2 : false
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e){
        if(e === 'login'){
            console.log("login")
        }else if(e === 'register'){
            console.log("register")
        }else{
            console.log("error")
        }
    }

  render() {
    const style={
        card: {
            paddingTop: this.state.loginRegisterToggle ? 50 : 0,
            paddingBottom: this.state.loginRegisterToggle ? 50 : 25,
        },
        p: {
            textAlign: 'center',
            marginTop: 15
        },
        signup:{
            color: '#d01919',
            textDecoration: 'underline',
            cursor: 'pointer'
        },
        forgetpassword: {
            textAlign: 'center',
            color: 'grey',
            cursor: 'pointer',
            textDecoration: 'underline'
        }
    }

    var formComponents = ()=>{
        switch(this.state.option){
            case 'login':
                return (
                    <Form>
                        <Form.Input type="text" name="username" iconPosition="left" icon="user" placeholder="Username" />
                        <Form.Input type="password" name="password" iconPosition="left" icon="key" placeholder="Password" />
                        <p style={style.p}>
                            <Button basic icon labelPosition="right" onClick={()=>{this.handleSubmit('login')}}>
                                <Icon style={{background:'none'}} name="send"/>
                                Login
                            </Button>
                        </p>
                        <p style={style.p}>New Intern? - <span style={style.signup} onClick={()=>{this.setState({option: 'register'})}}>SignUp!</span></p>
                        <p style={style.forgetpassword} onClick={()=>{this.setState({option: 'forgotpassword'})}}>Forgot Password?</p>
                    </Form>
                );
            
            case 'register':
                return (
                    <Form>
                        {
                            this.state.registerPage1 === true && this.state.registerPage2 === false ?
                            <span>
                                <Form.Input type="text" name="fullname" placeholder="Enter Full Name" icon="id card outline" iconPosition="left"/>
                                <Form.Input type="text" name="chooseusername" placeholder="Choose Username" icon="user" iconPosition="left" />
                                <Form.Input type="password" name="enterpassword" placeholder="Enter Password" icon="key" iconPosition="left" />
                                <Form.Input type="password" name="repeatpassword" placeholder="Repeat Password" icon="privacy" iconPosition="left" />
                                <p style={style.p}>
                                <Button onClick={()=>{this.setState({registerPage1: false, registerPage2: true})}} basic icon labelPosition="right">
                                    <Icon style={{background: 'none'}} name="right arrow"/>
                                    Next
                                </Button>
                                </p>
                            </span>
                            :
                            <span>
                                <Form.Input type="text" name="secretquestion" placeholder="Enter Secret Question" icon="question" iconPosition="left" />
                                <Form.Input type="text" name="secretanswer" placeholder="Enter Answer" icon="write" iconPosition="left"/>
                                <p style={style.p}>
                                <Button onClick={()=>{this.setState({registerPage1: true, registerPage2: false})}} basic icon labelPosition="left">
                                    <Icon style={{background: 'none'}} name="left arrow"/>
                                    Back
                                </Button>
                                <Button icon labelPosition="right" type="submit" onClick={()=>{this.handleSubmit('register')}} positive>
                                    <Icon style={{background: 'none'}} name="checkmark"/>
                                    Submit
                                </Button>
                                </p>
                            </span>
                        } 
                        <p style={style.p}>Already registered? - <span onClick={()=>{this.setState({option: 'login'})}} style={style.signup}>Login</span></p>
                    </Form>
                );
            
            case 'forgotpassword':
                return (
                    <Form>
                        {this.state.forgotPage1 === true && this.state.forgotPage2 === false ?
                            <span>
                                <Form.Input type="text" name="forgotusername" placeholder="Enter Username" icon="user" iconPosition="left" />
                                <Button icon labelPosition="right">
                                    <Icon name="right arrow"/>
                                    Next
                                </Button>
                            </span>
                            :
                            <span>
                                <Message visible>What is your Date of Birth?</Message>
                                <Form.Input type="text" name="secretanswer" placeholder="Enter Your Secret Answer" icon="key" iconPosition="left" />
                                <Button icon labelPosition="right">
                                    <Icon name="undo" />        
                                    Reset
                                </Button>
                            </span>
                        }
                    </Form>
                )
        }
    }

    return (
      <Grid id="loginwrapping">
        <Grid.Row centered>
            <Grid.Column computer={5} mobile={16}>
                <Card id="logincard" style={style.card} raised color='red' centered fluid>
                    <Card.Content>
                        <Card.Header><span id="loginheading"><p><Icon name="student" />Intern<b>EOD</b></p></span></Card.Header>
                        <Card.Description>
                            {formComponents()}
                        </Card.Description>
                    </Card.Content>
                </Card>
            </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }
}
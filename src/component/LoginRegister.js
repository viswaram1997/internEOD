import React, { Component } from 'react'
import {Grid, Icon, Form, Card, Button} from 'semantic-ui-react'

export default class LoginRegister extends Component {
    constructor(){
        super();
        this.state = {
            loginRegisterToggle: true,
            registerPage1: true,
            registerPage2: false
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
        heading: {
            fontSize: 30,
            textAlign: 'center',
            margin: 10
        },
        caption:{
            margin:0,
            paddingLeft:100,
        },
        wrapping:{
            paddingTop: 100,
        },
        input: {
            // margin: 10
        },
        card: {
            paddingTop: this.state.loginRegisterToggle ? 50 : 0,
            paddingLeft: 25,
            paddingRight: 25,
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

    return (
      <Grid style={style.wrapping}>
        <Grid.Row centered>
            <Grid.Column width={5}>
                <Card style={style.card} raised color='red' centered fluid>
                    <Card.Content>
                        <Card.Header><span style={style.heading}><p><Icon name="student" />Intern<b>EOD</b></p></span></Card.Header>
                        <Card.Description>
                            {
                                this.state.loginRegisterToggle ?
                                <Form>
                                    <Form.Input style={style.input} type="text" name="username" iconPosition="left" icon="user" placeholder="Username" />
                                    <Form.Input style={style.input} type="password" iconPosition="left" icon="key" placeholder="Password" />
                                    <p style={style.p}>
                                        <Button basic icon labelPosition="right" onClick={()=>{this.handleSubmit('login')}}>
                                            <Icon style={{background:'none'}} name="send"/>
                                            Login
                                        </Button>
                                    </p>
                                    <p style={style.p}>New Intern? - <span style={style.signup} onClick={()=>{this.setState({loginRegisterToggle: false})}}>SignUp!</span></p>
                                    <p style={style.forgetpassword}>Forgot Password?</p>
                                </Form> 
                                :
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
                                            <Button icon labelPosition="right" type="submit" onClick={()=>{this.handleSubmit('register')}} positive>
                                                <Icon style={{background: 'none'}} name="checkmark"/>
                                                Submit
                                            </Button>
                                            </p>
                                        </span>
                                    }  
                                </Form>

                            }
                        </Card.Description>
                    </Card.Content>
                </Card>
            </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }
}
import React, { Component } from 'react'
import {Grid, Icon, Form, Input, Card} from 'semantic-ui-react'

export default class LoginRegister extends Component {
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
            paddingTop: 150,
        },
        input: {
            margin: 10
        },
        card: {
            paddingLeft: 50,
            paddingRight: 50
        }
    }

    return (
      <Grid fluid style={style.wrapping}>
        <Grid.Row  centered>
            <Grid.Column width={6}>
                <Card style={style.card} raised color='red' centered fluid>
                    <Card.Content>
                        <Card.Header><span style={style.heading}><p><Icon name="student" />Intern<b>EOD</b></p></span></Card.Header>
                        <Card.Description>
                            <Form>
                                <Form.Input iconPosition="left" icon="user" placeholder="Username" />
                                <Form.Input iconPosition="left" icon="key" placeholder="Password" />
                                
                            </Form>
                        </Card.Description>
                    </Card.Content>
                </Card>
            </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }
}


// <Grid.Column width={16}>
//                 <span style={style.heading}><p><Icon name="student" />Intern<b>EOD</b></p></span>
//             </Grid.Column>
//             <Grid.Column width={10}>
                
//             </Grid.Column>
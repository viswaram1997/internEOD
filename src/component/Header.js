import React, { Component } from 'react'
import {Grid, Button, Icon, Divider} from 'semantic-ui-react'

export default class HeaderComponent extends Component {
    
  render() {
      const style={
          wraping:{
            marginLeft: 20,
            marginTop: 20,
            //marginBottom: 20,
            marginRight: 20
          },    
          heading: {
              fontSize: 30
          },
          divider: {
              margin: 0,
              padding: 0
          },
          caption:{
              margin:0,
              paddingLeft:100
          }
      }
    return (
      <Grid.Row verticalAlign="middle" style={style.wraping}>
        <Grid.Column mobile={16} computer={12}>
            <span style={style.heading}><Icon name="student" />Intern<b>EOD</b></span> <p style={style.caption}>-Track your daily tasks</p>
        </Grid.Column>
        <Grid.Column mobile={16} computer={3}>
            Welcome Back! {this.props.usrname}
        </Grid.Column>
        <Grid.Column mobile={16} computer={1}>
            <Button floated="right" negative>Logout</Button>
        </Grid.Column>
        <Grid.Column mobile={16} style={style.divider} computer={16}>
            <Divider />
        </Grid.Column>
      </Grid.Row>
    )
  }
}

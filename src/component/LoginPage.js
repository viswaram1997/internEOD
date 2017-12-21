import React, { Component } from 'react'
import {Grid, Icon, } from 'semantic-ui-react'

export default class LoginPage extends Component {
  render() {
    const style={
        heading: {
            fontSize: 30,
            textAlign: 'center'
        },
        caption:{
            margin:0,
            paddingLeft:100,
        },

    }
    return (
      <Grid fluid>
        <Grid.Row>
            <Grid.Column width={4}>
                <span style={style.heading}><Icon name="student" />Intern<b>EOD</b></span><p style={style.caption}>-Track your daily tasks</p>
            </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }
}

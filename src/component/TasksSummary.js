import React, { Component } from 'react'
import {Grid, Statistic} from 'semantic-ui-react';

export default class TasksSummary extends Component {
  render() {
    return (
      <Grid.Row centered>
        <Grid.Column  mobile={16} computer={4}>
            <Statistic.Group color="red" size="mini">
                <Statistic>
                    <Statistic.Value>{this.props.totalDays}</Statistic.Value>
                    <Statistic.Label>Days Attended</Statistic.Label>
                </Statistic>
                <Statistic>
                    <Statistic.Value>{this.props.tasksCompleted}</Statistic.Value>
                    <Statistic.Label>Tasks Completed</Statistic.Label>
                </Statistic>
            </Statistic.Group>
        </Grid.Column>
      </Grid.Row>
    )
  }
}

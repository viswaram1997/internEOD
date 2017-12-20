import React, { Component } from 'react';
import { Card, Grid } from 'semantic-ui-react';
import moment from 'moment'

export default class Task extends Component {
    constructor(props) {
        super(props);
        
        this.tasksCount = this.tasksCount.bind(this);
    }

    tasksCount(projects){
        var count = 0;
        projects.map(project => {
            count = count + project.tasks.length
            return 0;
        })
        return count;
    }

    render() {
        const style = {
            cards: {
                margin: 5
            },
            addtask: {
                fontSize: 40,
                padding: 15
            }
        }

        let count = this.props.eods.length;
        const cards = this.props.eods.reverse().map(eod => {
            return (
                <Card onClick={()=> this.props.callback(eod)} color="red">
                    <Card.Content>
                        <Card.Header textAlign="center">
                            Day {count--}
                        </Card.Header>
                        <Card.Meta textAlign="center">
                            {moment(eod.date).format("DD-MMM-YYYY")}
                        </Card.Meta>
                        <Card.Description textAlign="center">
                            <p>No of Projects: {eod.projects.length}</p>
                            <p>No of Tasks: {this.tasksCount(eod.projects)}</p>
                            <p>Total Time Spent: {eod.totaltime}</p>
                        </Card.Description>
                    </Card.Content>
                </Card>
            )
        })
        return (
            <Grid.Row>
                <Grid.Column>
                    <Card.Group style={style.cards} itemsPerRow={6}>
                        <Card color="red" onClick={() => this.props.callback("+")}>
                            <Card.Content>
                                <Card.Header style={style.addtask} textAlign="center">
                                    +
                                </Card.Header>
                                <Card.Description textAlign="center">
                                    Add Today's EOD
                                </Card.Description>
                            </Card.Content>
                        </Card>
                        {cards}
                    </Card.Group>
                </Grid.Column>
            </Grid.Row>            
        )
    }
}
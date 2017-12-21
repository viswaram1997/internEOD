import React, { Component } from 'react';
import { Modal, Button, Icon, Table } from 'semantic-ui-react';
import moment from 'moment';

export default class DisplayTaskModal extends Component {
    render() {
        const style = {
            finishedStatus: {
                color: 'green'
            },
            pendingStatus: {
                color: 'red'
            }
        }
        const modalContent = this.props.eod.projects.map(project => {
            return (
                <p>
                    <h3>Project Name: {project.projectName}</h3>
                    <Table>
                        <Table.Header>
                            <Table.Row>
                                <Table.HeaderCell width={1}>S.No.</Table.HeaderCell>
                                <Table.HeaderCell width={6}>Tasks</Table.HeaderCell>
                                <Table.HeaderCell width={1}>Status</Table.HeaderCell>
                                <Table.HeaderCell width={1}>Time Spent</Table.HeaderCell>
                            </Table.Row>
                        </Table.Header>
                        {project.tasks.map((invtask,i) => (
                            <Table.Body>
                                <Table.Cell>{i+1}</Table.Cell>
                                <Table.Cell>{invtask.task}</Table.Cell>
                                <Table.Cell>
                                    {invtask.status === 'finished' ? 
                                        <span style={style.finishedStatus}><Icon name="checkmark"/> Finished</span> :
                                        <span style={style.pendingStatus}><Icon name="remove" /> Pending</span>
                                    }
                                </Table.Cell>
                                <Table.Cell>{invtask.hrsSpent}</Table.Cell>
                            </Table.Body>
                        ))}
                    </Table>
                </p>

            )
        })
        return (
            <Modal open={this.props.displayTaskModal}>
                <Modal.Header>Date: {moment(this.props.eod.date).format("DD-MMM-YYYY")}</Modal.Header>
                <Modal.Content scrolling>
                    <Modal.Description>
                        {modalContent}
                    </Modal.Description>
                </Modal.Content>
                <Modal.Actions>
                    <Button onClick={() => this.props.handleTriggerModal()} primary>
                        <Icon name="close"></Icon>Close
                    </Button>
                </Modal.Actions>
            </Modal>
        )
    }
}

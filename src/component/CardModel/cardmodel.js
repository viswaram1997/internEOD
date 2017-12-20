import React, { Component } from 'react'
import { Button, Header, Modal, Table } from 'semantic-ui-react'

class CardModel extends Component {


  //   show = dimmer => () => this.setState({ dimmer, open: true })


  render() {

    // getcarddata
   
    return (
      <div>

        <Modal dimmer="true" size="small" open={this.props.cardshow} Style={"max-height:500px"} >
          <Modal.Header>Task</Modal.Header>
          <Modal.Content >

            <Modal.Description>
              <Header textAlign="center">Day</Header>
              <Table>
                <Table.Header>
                  <Table.Row>
                    <Table.HeaderCell>Name</Table.HeaderCell>
                    <Table.HeaderCell>Registration Date</Table.HeaderCell>
                    <Table.HeaderCell>E-mail address</Table.HeaderCell>
                    <Table.HeaderCell>Premium Plan</Table.HeaderCell>
                  </Table.Row>
                </Table.Header>

                <Table.Body>
                  
                 {/* {this.state.data.map((data)=>{
                    <Table.Row>
                    <Table.Cell>Jill Lewis</Table.Cell>
                    <Table.Cell>May 11, 2014</Table.Cell>
                    <Table.Cell>jilsewris22@yahoo.com</Table.Cell>
                    <Table.Cell>Yes</Table.Cell>
                  </Table.Row>
                 })} */}
                </Table.Body>
              </Table>
            </Modal.Description>
          </Modal.Content>
          <Modal.Actions>


            <Button positive icon='checkmark' labelPosition='right' content="OK" onClick={this.props.closecard} />
          </Modal.Actions>
        </Modal>
      </div>
    )
  }
}

export default CardModel;

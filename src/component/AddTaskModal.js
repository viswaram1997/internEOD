import React, { Component } from 'react';
import { Modal, Button, Icon, Form, Dropdown, Table } from 'semantic-ui-react';
import moment from 'moment'

export default class AddTaskModal extends Component {
    constructor(){
        super();
        this.state = {
            project: "",
            task: "",
            hrspent: "",
            status: "",
            finaldata: [],
            senddata:[],
            date:"",
            options: [
                {
                    text: "Finished",
                    value: "finished",
                    icon: "checkmark"
                },
                {
                    text: "Pending",
                    value: "pending",
                    icon: "remove"
                }
            ]
        }
        this.GetData = this.GetData.bind(this);
        this.AddTask = this.AddTask.bind(this);
        this.remove = this.remove.bind(this);
        this.AddProject=this.AddProject.bind(this);
        this.hide=this.hide.bind(this);
    }

    GetData(e) {
        
                this.setState({
                    [e.target.name]: e.target.value
                });
                
            }

    remove(index) {
        let finaldata = this.state.finaldata;
        finaldata.splice(index, 1);
        this.setState({
            finaldata
        });
    }

    hide(){
        let date=moment().valueOf();
        if(this.state.finaldata.length!==0){
            let tempdata={
                project:this.state.project,
                data:this.state.finaldata,
                date:date
            }
      
            let senddata= this.state.senddata;
            senddata.push(tempdata);
            this.setState({
                senddata,
                project:"",
                task:"",
                hrspent:"",
                status:"",
                finaldata:[]
                
            });         
            console.log(this.state.senddata);
            this.props.Storedetails(this.state.senddata,date);
        }
        this.setState({
            senddata:[]
        });
        this.props.handleTriggerModal();
    }

    AddProject(){
        let date=moment().valueOf();
        let tempdata={
            project:this.state.project,
            data:this.state.finaldata,
            date:date
        }
        
        let senddata= this.state.senddata;
        senddata.push(tempdata);
        this.setState({
            senddata,
            project:"",
            task:"",
            hrspent:"",
            status:"",
            finaldata:[]
        });
        
    }

    AddTask() {
        let data = {
            task: "",
            status: "",
            hrspent: ""
        }

        let { task, status, hrspent } = this.state;
        if(task!=="" && status!=="" && hrspent!==""){
            data = {
                task: task,
                status: status,
                hrspent: hrspent
            }
            let finaldata = this.state.finaldata;
            finaldata.push(data);
            this.setState({
                finaldata,
                task: "",
                hrspent: "",
                status: null
            });
        }  
    }

    render() {
        const style= {
            modal: {
                minHeight: 400
            },
            btn: {
                background: "transparent"
            },
            rmvbtn: {
                background: "transparent",
                margin: 0,
                padding: 0,
                minHeight: 15
            }
        }
       
        return (
            <Modal open={this.props.displayAddModal}>
                <Modal.Header>Add EOD</Modal.Header>
                <Modal.Content style={style.modal}>
                    <Modal.Description>
                        <Form>
                            <Form.Group>
                                <Form.Input name="project" value={this.state.project} onChange={this.GetData} placeholder="Project Name" width={6} />
                                <Button  style={style.btn} onClick={this.AddProject} icon="add" />
                            </Form.Group>
                            <Form.Group>
                                <Form.Input value={this.state.task} name="task" onChange={this.GetData} placeholder="Enter Task" width={8} />
                                <Dropdown selection placeholder="Select Status" onChange={(e, {value})=>{
                                    this.setState({
                                        status: value
                                    })
                                }} options={this.state.options} />
                                <Form.Input value={this.state.hrspent} name="hrspent" onChange={this.GetData} placeholder="Enter Hrs Spent" />
                                <Button style={style.btn} onClick={this.AddTask} icon="add" />
                            </Form.Group>
                        </Form>
                        <Table singleLine>
                            <Table.Header>
                                <Table.Row>
                                    <Table.HeaderCell width={1}>S.No.</Table.HeaderCell>
                                    <Table.HeaderCell width={6}>Tasks</Table.HeaderCell>
                                    <Table.HeaderCell width={1}>Status</Table.HeaderCell>
                                    <Table.HeaderCell width={1}>Time Spent</Table.HeaderCell>
                                    <Table.HeaderCell width={1}></Table.HeaderCell>
                                </Table.Row>
                            </Table.Header>
                            <Table.Body>
                                {this.state.finaldata.map((data, index) => {
                                    return (
                                        <Table.Row centered>
                                            <Table.Cell>{index + 1}</Table.Cell>
                                            <Table.Cell>{data.task}</Table.Cell>
                                            <Table.Cell>
                                                {data.status === 'finished' ? 
                                                    <span style={style.finishedStatus}><Icon name="checkmark"/> Finished</span> :
                                                    <span style={style.pendingStatus}><Icon name="remove" /> Pending</span>
                                                }
                                            </Table.Cell>
                                            <Table.Cell>{data.hrspent}</Table.Cell>
                                            <Table.Cell><Button style={style.rmvbtn} onClick={() => this.remove(index)} icon="remove" /></Table.Cell>
                                        </Table.Row>
                                    )
                                })}
                            </Table.Body>
                        </Table>
                    </Modal.Description>
                </Modal.Content>
                <Modal.Actions>
                    <Button negative onClick={()=>this.props.handleTriggerModal()}>
                        <Icon name="close"></Icon>
                        Close
                    </Button>
                    <Button onClick={this.hide} positive>
                        <Icon name="checkmark"></Icon>
                        Add EOD
                    </Button>
                </Modal.Actions>
            </Modal>
        )
    }
}

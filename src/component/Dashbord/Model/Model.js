
import { Modal, Button, FormControl, FormGroup, Row, Col, Form, ControlLabel } from "react-bootstrap";
import "./Model.css";
import moment from "moment";
import React from 'react'
import { Table, Button as But } from 'semantic-ui-react';
export default class Model extends React.Component {
    constructor(props) {
        super();
        this.state = {
            project: "",
            task: "",
            hrspent: "",
            status: "",
            finaldata: [],
            senddata:[],
            show:false,
            date:""

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
            show:false,
            senddata:[]
        });
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
        if(task!==""&&status!==""&&hrspent!==""){
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
                status: ""
            });
        }  
    }
    render() {

            var dd=this.state.show;
        return (
            <div>
            <Button id="ff" bsStyle="primary" onClick={() => this.setState({ show: true })}>
            Add Project
          </Button>
        <Modal  bsSize="large" aria-labelledby="contained-modal-title-lg"  show={dd}>
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-lg">Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Row className="show-grid" Style={"min-height:400px"}>
                    <Form ><Row>
                        <FormGroup >
                            <Col sm={4} Style={"margin-left:45px"}>
                                <ControlLabel Style={"margin-bottom:10px"}>Project Name</ControlLabel>
                                <FormControl type="email" placeholder="Email" value={this.state.project} name="project" onChange={this.GetData} />
                            </Col>
                        </FormGroup>
                    </Row>
                        <FormGroup controlId="formInlineName" Style={"margin-top:15px"}>
                            <Col sm={3} Style={"margin-left:30px"} >
                                <ControlLabel Style={"margin-bottom:10px"}>Task</ControlLabel>
                                <FormControl type="text" placeholder="Task" name="task" value={this.state.task} onChange={this.GetData} />
                            </Col>
                        </FormGroup>
                        <FormGroup controlId="formInlineEmail" >
                            <Col sm={4} Style={"margin-left:10px"} >
                                <ControlLabel Style={"margin-bottom:10px "}>Hr Spent</ControlLabel>
                                <FormControl type="text" placeholder="10.30" name="hrspent" value={this.state.hrspent} onChange={this.GetData} />
                            </Col>
                        </FormGroup>
                        <FormGroup controlId="formInlineEmail" >
                            <Col sm={3} Style={"margin-left:5px"}>
                                <ControlLabel Style={"margin-bottom:10px"}>Status</ControlLabel>
                                <FormControl type="text" placeholder="Finished/Pending" name="status" value={this.state.status} onChange={this.GetData} Style={"margin-bottom:20px"} />
                            </Col>
                        </FormGroup>
                    </Form>
                    <p Style={"margin-top:10px"}>
                        <Row></Row>
                        <Row Style={"margin-left:40px; margin-right:25px; "}>
                            <Table columns={5}>
                                <Table.Header>
                                    <Table.Row>
                                        <Table.HeaderCell>S.No</Table.HeaderCell>
                                        <Table.HeaderCell>Task</Table.HeaderCell>
                                        <Table.HeaderCell>Status</Table.HeaderCell>
                                        <Table.HeaderCell>Hour Spent</Table.HeaderCell>
                                        <Table.HeaderCell />
                                    </Table.Row>
                                </Table.Header>

                                <Table.Body>
                                    {this.state.finaldata.map((data, index) => {
                                        return (
                                            <Table.Row >
                                                <Table.Cell><b>{index + 1}</b></Table.Cell>
                                                <Table.Cell><b>{data.task}</b></Table.Cell>
                                                <Table.Cell><b>{data.status}</b></Table.Cell>
                                                <Table.Cell> <b>{data.hrspent} </b></Table.Cell>
                                                <Table.Cell><But onClick={() => this.remove(index)} Style={"padding:5px"} size="small" >x</But></Table.Cell>
                                            </Table.Row>
                                        )
                                    })}
                                </Table.Body>
                            </Table>
                        </Row>
                    </p>
                </Row>


            </Modal.Body>
            <Modal.Footer>
                <Button className="buton" onClick={this.AddTask}>Add Task</Button>
                <Button className="buton" onClick={this.AddProject}>Add New Project</Button>
                <Button className="buton" onClick={this.hide}>Finish</Button>
                
            </Modal.Footer>
        </Modal>
        </div>)
    }
}


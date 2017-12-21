import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';
import HeaderComponent from './Header';
import TasksSummary from './TasksSummary';
import Tasks from './Tasks';
import DisplayTaskModal from './DisplayTaskModal';
import AddTaskModal from './AddTaskModal';

export default class Dashboard extends Component {
    constructor(){
        super();
        this.state= {
            displayTaskModal: false,
            displayEodNo: undefined,
            displayAddModal: false
        }
        this.callBack = this.callBack.bind(this);
        this.handleTriggerModal = this.handleTriggerModal.bind(this);
    }

    componentDidMount(){
        this.props.Getdetails("viswa");
    }

    callBack(eod){
        if(eod==="+"){
            this.setState({
                displayAddModal: true
            })
        }else{
            this.setState({
                displayTaskModal: true,
                displayEodNo: this.props.getdata.eods.indexOf(eod)
            })
        }
    }

    handleTriggerModal(){
        this.setState({
            displayTaskModal: false,
            displayAddModal: false
        })
    }

    render() {
        return (
            <Grid>
                <HeaderComponent usrname={this.props.getdata.userName}/>
                <TasksSummary
                    totalDays={this.props.getdata.totalDays}
                    tasksCompleted={this.props.getdata.tasksCompleted}
                />
                <Tasks eods={this.props.getdata.eods} callback={this.callBack}/>
                {this.state.displayTaskModal ? 
                    <DisplayTaskModal
                        eod={this.props.getdata.eods[this.state.displayEodNo]}
                        displayTaskModal={this.state.displayTaskModal}  
                        handleTriggerModal={this.handleTriggerModal} 
                />
                : <div></div>
                }
                {this.state.displayAddModal ? <AddTaskModal {...this.props} displayAddModal={this.state.displayAddModal} handleTriggerModal={this.handleTriggerModal}/> : <div></div>}
            </Grid>
        )
    }
}

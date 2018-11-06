import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import TaskItem from  './TaskItem.js';
import TaskForm from './TaskForm';
import { TasksCollection } from '../../api/tasks.js';
import { Meteor } from 'meteor/meteor';
 
class TaskList extends Component {

  constructor(){
    super();
    this.state = {
      taskEditar: { id:"", name:"", category:"" }
    }

  }

  renderTasks() {
    console.log (this.props.tasks);
    return this.props.tasks.map((task) => (
      <TaskItem key={task._id} task={task} onClickItem={this.handleEditar.bind(this)} onDelete={this.deleteTask.bind(this)} />
    ));

  }

  handleGuardar(task){
    if (task._id)
      TasksCollection.update(task._id,task);
    else{
      task._id = Math.random().toString(36).substr(2, 9);
      task.userid = this.props.owner;
      TasksCollection.insert(task);
      Meteor.call('tasks.insert', text);
    }
  }

  handleEditar(task){
    this.setState({
      taskEditar: task
    });
  }

 deleteTask(task) {
    Meteor.call('tasks.insert', task._id);
  }

  render() {
    return (
      <div>
        <h1> Las tareas de {this.props.owner} </h1>
        <ul className="list-group">
          {this.renderTasks()}
        </ul>
        <br />
        <TaskForm task={this.state.taskEditar} guardar={this.handleGuardar.bind(this)} />        
      </div>
    );
  }
}

export default withTracker(() => {
  return {
    tasks: TasksCollection.find({userid: Meteor.userid()}).fetch(),
  };
})(TaskList);

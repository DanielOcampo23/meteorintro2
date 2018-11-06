import React, { Component } from 'react';

import { Tasks } from '../../api/tasks.js';

class TaskItem extends Component {

  handleEditar(){
  	this.props.onClickItem(this.props.task);
  }

  deleteThisTask() {
    this.props.onClickItemD(this.props.task);
  }

  render() {
    return (
      <li className="TaskItem list-group-item">
      		{this.props.task.category} -- {this.props.task.name}
      		<button className="btn btn-info" onClick={this.handleEditar.bind(this)} >Editar</button> &nbsp;&nbsp;
          <button className="btn btn-danger" onClick={this.deleteThisTask.bind(this)}> Eliminar
          
        </button>
      </li>
    );
  }
}

export default TaskItem;
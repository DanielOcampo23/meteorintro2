import React, { Component } from 'react';

class TaskForm extends Component {

  constructor(){
    super();
    this.state={
      _id:"",
      name:"",
      category:""
    }
  }
  
  onGuardar(e){
  	var tarea = {
  		_id: this.state._id,
  		name: this.state.name,
  		category: this.state.category
  	}
  	e.preventDefault();
  	this.props.guardar(tarea);
    this.setState({
        _id: "",
        name: "",
        category: ""      
    });
  }

  componentWillMount(){

  }

  componentWillReceiveProps(props){
    this.setState({
      _id: props.task._id,
      name: props.task.name,
      category: props.task.category
    });
  }

  updateInput(e){
    this.setState({
        [e.target.name]: e.target.value
      });
    }

  render() {
    return (
      <div className="TaskForm">
      	<form onSubmit={this.onGuardar.bind(this)}>
	      	<input type="hidden" className="form-control" name="_id" value={this.state._id} onChange={this.updateInput.bind(this)}/>
      		<div className="form-group">
	      		<label>Nombre</label>
	      		<input type="text" className="form-control" name="name" value={this.state.name} onChange={this.updateInput.bind(this)}/>
      		</div>
      		<div className="form-group">
	      		<label>Category</label>
	      		<input type="text" className="form-control" name="category" value={this.state.category} onChange={this.updateInput.bind(this)}/>
      		</div>
      		<button className="btn btn-primary"> Guardar</button>
      	</form>
      </div>
    );
  }
}

export default TaskForm;

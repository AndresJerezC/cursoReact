import React, { Component } from 'react'
import '../bootstrap.min.css'
export default class TaskForm extends Component {

  state = {
    title: '',
    description: '',
  }

  onSubmit = e => {
    e.preventDefault() //previene el comportamiento por defecto del form evitando que se refresque
    this.props.addTask(this.state.title, this.state.description)
  }

  onChange = e => {
    console.log(e.target.name, e.target.value)
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    return (<div className='card col-md-4' >
      <form onSubmit={this.onSubmit}>
        <div className='form-group'>
      <input
        type="text"
        name="title"
        placeholder="Write a task"
        onChange={this.onChange}
        value={this.state.title} />
        </div>
      <br />
        <div className='form-group'>
          <textarea placeholder="Write a description"
        name="description"
        onChange={this.onChange}
        value={this.state.description} >
      </textarea>
        </div>
        <input className='btn btn-primary' type="submit" />
      </form>
    </div>)
  }
}

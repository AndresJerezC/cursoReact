import React, { Component } from 'react';

import PropTypes from 'prop-types';
import Tarea from './Tarea';
class Tasks extends Component {
  render() {
    return (
      <div className='col-md-4'>
        {this.props.tasks.map(tarea =>
          <Tarea                //El componente Task tiene varios comp.
            tarea={tarea}       //Tarea los cuales son pintados mientras
            key={tarea.id}      //se recorre el array tasks, se envia el onjeto una llave y funciones
        deleteTask={this.props.deleteTask}
            checkDone={this.props.checkDone} />)}
      </div>)
  }
}

Tasks.propTypes = {
  tasks: PropTypes.array.isRequired
}
export default Tasks;
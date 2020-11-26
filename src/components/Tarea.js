import React, { Component } from 'react'
import PropTypes from 'prop-types'
import '../bootstrap.min.css'
class Tarea extends Component {

  styleCompleted() {
    return {
      fontsize: '20px',
      color: this.props.tarea.done ? 'gray' : 'black',
      textDecoration: this.props.tarea.done ? 'line-through' : 'none',
    }
  }

  render() {
    const { tarea } = this.props  // const tarea = this.props.tarea
    return <div className='form-group' style={this.styleCompleted()}>
      {tarea.title} -
      {tarea.id} -
      {tarea.description}  {/*.bind(this, 'parametro') se */}
      <input type="checkbox"
        style={{ margin: 'auto 2px' }}
        onChange={this.props.checkDone.bind(this, tarea.id)}
        checked={tarea.done}
      />
      <button style={btnDelete}
        onClick={this.props.deleteTask.bind(this, tarea.id)}>
        x
      </button>
    </div>
  }
}
//define el tipo de variable que debe ser el prop 'tarea' en este caso se requiere un objeto
Tarea.propTypes = {
  tarea: PropTypes.object.isRequired
}
//defenir estilos en un objeto
const btnDelete = {
  fontSize: '18px',
  background: '#ea2027',
  color: '#fff',
  border: 'none',
  margin: '0px 0px 0px 5px',
  padding: '10px 15px',
  borderRadius: '50%',
  cursor: 'pointer',

}

export default Tarea;
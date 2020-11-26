//importar modulos
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
//i datos de ejemplo
import tasks from './sample/tasks.json'
//i componentes
import Tasks from './components/Tasks'
import TaskForm from './components/TaskForm'
import Posts from './components/Posts';
import './bootstrap.min.css'
class App extends Component {
  //estado del componente
  state = {
    tasks //nomenclatura ecma+6 equivalente a 'tasks : tasks'
  }
  //Funciones del componente
  //funcion agregar tarea crea una nueva tarea y se agrega al state
  addTask = (title, description) => {
    const newTask = {
      title,
      description,
      done: false,
      id: this.state.tasks[this.state.tasks.length - 1].id + 1
    }
    this.setState({
      tasks: [...this.state.tasks, newTask]
    })
  }
  //eliminar tarea apartir de un id usando metodo filter
  deleteTask = (id) => {
    const taskToDelete = this.state.tasks.filter(task => task.id !== id)
    this.setState({ tasks: taskToDelete })
  }
  //cambiar el estado de una tarea (t o f)
  checkDone = (id) => {
    const newTasks = this.state.tasks.map(task => {
      if (task.id === id) {
        task.done = !task.done
      }
      return task
    })
    this.setState({ tasks: newTasks })
  }

  /**Metodo render()
   * Metodo principal de todo componente, pinta lo que se desea
   * retorna un solo elemento.
   * elemento <Router> junto con route permite simular varias rutas
   * elemento <Link> permite navegación
   */
  render() {
    return <div>
      <Router>
        <Link to="/">Home</Link>
        <br />
        <Link to="/posts">Posts</Link>
        <Route exact path="/" render={() => {
          return <div className='container'>
            <div className='row pt-5'>
            <TaskForm addTask={this.addTask} />
            <Tasks tasks={this.state.tasks}
                deleteTask={this.deleteTask} //enviar funciones en los props del componente
              checkDone={this.checkDone}
            />
            </div>
          </div>
        }}>
        </Route>
        <Route path="/posts" component={Posts} /> {/*se asigna una ruta "/posts" y un "componente" Posts*/}
      </Router>
    </div>
  }
}

export default App;
/*
class Helloworld extends React.Component {
  state = {
    show: true
  }

  toggleshow = () => {
    this.setState({ show: !this.state.show })
  }
  render() {
    if (this.state.show) {
      return (
        <div id="hello">{this.props.mytext}
          <h3>{this.props.subtitle}</h3>
          <button onClick={this.toggleshow} >Cambiar estado</button>
        </div>
      )
    } else {
      return <h1>There are not elements
        <button onClick={this.toggleshow}>Change state</button>
      </h1>
    }
  }
}

arrow function
const App = () => <div>This is my component: <Helloworld/> </div>


class App extends React.Component {
  render() {
    return <div>This is my component: <Helloworld /></div>
  }
}

//function traditional
function App() {
  return (
    <div>
      this is my component:
      <Helloworld mytext="hello arjc" subtitle="andres rene jerez c" />
      <Helloworld mytext="hola andy" subtitle="andy y annis" />
      <Helloworld mytext="hola annis" subtitle="ana roldan" />
    </div>
  );
}
*/
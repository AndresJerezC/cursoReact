/**
 *Extructura base de un componente importa de React Component
  exporta por defecto toda la clase y extiende de Componet
 */
import React, { Component } from 'react'

export default class Posts extends Component {

  state = {
    posts: []
  }
  //metodo que se carga antes del componente 'componentDidMount'
  async componentDidMount() {
    //metodo fetch del navegador para traer datos
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await res.json()
    this.setState({ posts: data })
  }

  render() {
    return (
      <div>
        <h1>Publicaciones</h1>
        {
          this.state.posts.map(post => {
            return <div key={post.id}>
              <h1>{post.title}</h1>
              <p>{post.body}</p>
            </div>
          })
        }
      </div>
    )
  }
}

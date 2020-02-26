import React, { Component } from 'react'
import 'es6-promise';
import 'isomorphic-fetch';
import Ghibli from './Components/ghibli.png'

export class App extends Component {

  state = {
    films: [],
    isLoaded: false
  }


  loadFilms() {
    fetch("https://ghibliapi.herokuapp.com/films")
      .then(res => res.json())
      .then(filmList => this.setState({
        films: filmList,
        isLoaded: true
      }))
      .catch(err => console.log(err))
  }

  render() {

    if (this.state.isLoaded) {
      return (
        <>

          <div>
            <img src={Ghibli}></img>
          </div>

          {this.state.films.map((film) => {

            return (<div className="card" key={film.id}>
              <div className="card-body">
                <h5 className="card-title">{film.title}</h5>
                <p className="card-text">{film.description}</p>
              </div>
            </div>
            )
          })}
        </>
      )

    } else {
      return (
        <>
          <img src={Ghibli}></img>
          <button onClick={() => this.loadFilms()}>Button</button>
        </>
      )
    }
  }
}

export default App


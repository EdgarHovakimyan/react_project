import React from "react";

class App extends React.Component {
  state = {
    movies: [
      {
        id: 1,
        name: "Iron Man",
        date: 2000,
        time: 130,
        genre: "fantasy",
        rating: 7,
      },
      {
        id: 2,
        name: "Bad Boys",
        date: 2002,
        time: 115,
        genre: "action",
        rating: 7,
      },
      {
        id: 3,
        name: "The Godfather",
        date: 1972,
        time: 200,
        genre: "criminal",
        rating: 10,
      },
      {
        id: 4,
        name: "Openheimer",
        date: 2023,
        time: 123,
        genre: "biolographical",
        rating: 9,
      },
      {
        id: 5,
        name: "Planet Of Apes",
        date: 2024,
        time: 150,
        genre: "fantasy",
        rating: 8,
      },
    ],
  };
  stars(){
    new Array(this.state.movies.elm.rating).fill("⭐")
  }
  deleteMovie(id) {
    this.setState({ movies: this.state.movies.filter((elm) => elm.id !== id) })
  }
  arrangeMovies(id){
    this.setState({movies: this.state.movies.sort((x, y) => (x.date < y.date ? 1 : -1))})
  }
  plus(id) {
    this.setState({
      movies: this.state.movies.map(elm => {
        if (elm.id === id && elm.rating < 10) {
          elm.rating++
        }
        return elm
      })
    })
  }
  minus(id) {
    this.setState({
      movies: this.state.movies.map(elm => {
        if (elm.id === id && elm.rating > 0) {
          elm.rating--
        }
        return elm
      })
    })
  }
  render() {
    return <>
    <div  className="d-flex flex-wrap gap-3 p-2">
      {
        this.state.movies.map((elm, i)=> <div key={i} className="card p-2">
        <div className="card-body">
          <h4 className="card-title">{elm.name}</h4>
              <p className="card-text"><strong>Date: </strong>{elm.date}</p>
              <p className="card-text"><strong>Time: </strong>{elm.time}</p>
              <p className="card-text"><strong>Genre: </strong>{elm.genre}</p>
              <p className="card-text"><strong>Rating: </strong>{elm.rating}</p>
              <div>              
                ⭐
              </div>
              <div className="btn-group">
                <button onClick={this.minus.bind(this, elm.id)} className="btn btn-sm btn-outline-danger">-</button>
                <button onClick={this.plus.bind(this, elm.id)} className="btn btn-sm btn-outline-success">+</button>
              </div>
        </div>
        <button className="btn btn-danger" onClick={this.deleteMovie.bind(this, elm.id)}>Delete</button>
        </div>)
      }
    </div>
    <div className="d-flex flex-wrap gap-3 p-2">
      {
        <button onClick={this.arrangeMovies.bind(this, this.state.movies.id)} className="btn btn-danger">Arrange By Date</button>
      }
    </div>
    </>
  }
}
export default App

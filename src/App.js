import React from 'react'
import MovieCard from './moviecard';
import MovieList from './MovieList'
class App extends React.Component{

  render(){
    return (
      <>
    <h1>Movie App</h1>
    <MovieList />
    </>
    )
  }
}

export default App;
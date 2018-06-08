import React from 'react'
import axios from 'axios'
import PokemonItem from './PokemonItem'
import Header from './Header'

const Search = React.createClass({
  getInitialState() {
    return {
      searchWord: '',
      results: []
    }
  },
  
  componentDidMount() {
    axios.get('https://pokeapi.co/api/v2/pokemon/')
      .then((response) => {
        this.setState({ results: response.data.results })
      })
      .catch((error) => console.log('error', error))
  },
  
  handleSearchWordChange(event) {
    this.setState({ searchWord: event.target.value })
  },
  
  render() {
    return (
      <div className="search">
        <Header 
          searchWord={this.state.searchWord}
          handleSearchWordChange={this.handleSearchWordChange}
        />
        <div>
          {this.state.results
            .filter((pokemon) => `${pokemon.name}`.indexOf(this.state.searchWord) > -1)
            .map((pokemon) => {
              return (
                <PokemonItem key={pokemon.name} {...pokemon} />
              )
            })}
        </div>
      </div>
    )
  }
})

export default Search
import React from 'react'
import axios from 'axios'
import { Link } from 'react-router'
import PokemonItem from './PokemonItem'

const MyPokemon = React.createClass({
  getInitialState() {
    return {
      myPokemon: []
    }
  },
  
  getUserPokemon() {
    axios.get('http://localhost:3000/api/pokaman/user/gamer')
      .then((response) => {
        this.setState({ myPokemon: response.data })
      })
  },
  
  componentDidMount() {
    this.getUserPokemon()
  },
  
  render() {
    let noResults
    if(this.state.myPokemon.length === 0) {
      noResults = <i>You have no saved pokemon</i>
    }
    return (
      <div className="my-pokemon">
        <Link to='/'> &lt; Back to search</Link>
        <h1>My Pokemon</h1>
        <div>
          {this.state.myPokemon
            .map((pokemon) => {
              return (
                <PokemonItem showDelete getUserPokemon={this.getUserPokemon} key={pokemon.name} {...pokemon} />
              )
            })}
            {noResults}
          </div>
      </div>
    )
  }
})

export default MyPokemon
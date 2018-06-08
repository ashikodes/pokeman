import React from 'react'
import { Link } from 'react-router'
import axios from 'axios'
import Alert from 'react-s-alert'

const PokemonItem = React.createClass({
  handleAddPokemon() {
    axios({
      method: "post",
      url: "http://localhost:3000/api/pokaman",
      data: {
        name: this.props.name,
        url: this.props.url,
        added_by: 'gamer'
      }
    })
    .then(() => {
      Alert.info('Successful', {
        timeout: 1000
      })
    })
    .catch(() => {
      Alert.error('Already added', {
        timeout: 1000
      })
    })
  },
  
  handleRemovePokemon() {
    axios.delete(`http://localhost:3000/api/pokaman/${this.props._id}`)
      .then(() => {
        Alert.info('Deleted', {
          timeout: 1000
        })
        this.props.getUserPokemon()
      })
      .catch(() => {
        Alert.error('Error')
      })
  },
  
  render () {
    const { name, url } = this.props
    let button
    if(this.props.showDelete) {
      button = <button onClick={this.handleRemovePokemon}>Delete</button>
    } else {
      button = <button onClick={this.handleAddPokemon}>Add to list</button>
    }
    return (
      <div className="search-item">
        <h3>
          <Link to={`${url.split('v2')[1]}`}>
            {name}
          </Link>
        </h3>
        {button}
      </div>
    )
  }
})

export default PokemonItem
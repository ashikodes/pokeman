import React from 'react'
import axios from 'axios'
import { Link } from 'react-router'

const Details = React.createClass({
  getInitialState() {
    return {
      pokemon: {}
    }
  },
  
  componentDidMount() {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${this.props.params.id}/`)
      .then((response) => {
        this.setState({ pokemon: response.data })
      })
  },
  
  render () {
    const { name, abilities, stats, moves } = this.state.pokemon
    return (
      <div className='details'>
        <section>
          <Link to='/'> &lt; Back to search</Link>
          {name ? <h2 className="detail-name">{name}</h2> : <p><i>Loading...</i></p>}
          <b>{abilities ? 'Abilities' : ''}</b>
          <ul>
            {abilities && abilities.map((ability) => {
              return (
                <li key={ability.slot}>{ability.ability.name}</li>
              )
            })}
          </ul>
          <b>{stats ? 'Stats': ''}</b>
          <ul>
            {stats && stats.map((stat) => {
              return (
                <li key={stat.stat.url}>{stat.stat.name}</li>
              )
            })}
          </ul>
          <b>{moves ? 'Moves' : ''}</b>
          <ul>
            {moves && moves.slice(0, 10).map((move) => {
              return (
                <li key={move.move.url}>{move.move.name}</li>
              )
            })}
          </ul>
        </section>
      </div>
    )
  }
})

export default Details
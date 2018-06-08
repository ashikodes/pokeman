import React from 'react'
import { Link } from 'react-router'

const Header = React.createClass({
  render() {
    return (
      <header className="search-header">
        <input type="text" placeholder="filter by name" value={this.props.searchWord} onChange={this.props.handleSearchWordChange} />
        <Link to='/my_pokemon'>My list of pokemon</Link>
      </header>
    )
  }
})

export default Header
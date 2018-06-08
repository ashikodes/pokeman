import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Match } from 'react-router'
import Alert from 'react-s-alert'
import Search from './Search'
import Details from './Details'
import MyPokemon from './MyPokemon'
import '../public/style.css'
import 'react-s-alert/dist/s-alert-css-effects/slide.css'
import 'react-s-alert/dist/s-alert-default.css'

const App = React.createClass({
  render () {
    return (
      <BrowserRouter>
        <div className='app'>
          <Alert stack={{ limit: 2 }} />
          <Match
            exactly
            pattern='/'
            component={Search}
          />
          <Match 
            pattern='/my_pokemon'
            component={MyPokemon}
          />
          <Match
            pattern='/pokemon/:id'
            component={Details}
          />
        </div>
      </BrowserRouter>
    )
  }
})

render(<App />, document.getElementById('app'))
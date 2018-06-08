import React from 'react'
import { shallow } from 'enzyme'
import Search from './Search'
import PokemonItem from './PokemonItem'

test('Search should render the Pokemon search result', () => {
  const component = shallow(<Search />)
  expect(component.find(PokemonItem).length).toEqual(20)
})
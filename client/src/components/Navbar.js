import React from 'react'
import { NavLink } from 'react-router-dom'
import { Menu } from 'semantic-ui-react'
import styled from 'styled-components'

const Navbar = () => (
  <Menu style={{color: 'red'}}>
    <Menu.Item>
      <NavLink exact to="/">
        Home
      </NavLink>
    </Menu.Item> 
  </Menu>
)



export default Navbar
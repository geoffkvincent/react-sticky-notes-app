import React from 'react'
import { NavLink } from 'react-router-dom'
import { Menu } from 'semantic-ui-react'
import styled from 'styled-components'

const Navbar = () => (
  <NavContainer>
    <Menu>
      <Menu.Item>
        <NavLink exact to="/">
          Home
        </NavLink>
      </Menu.Item>
    </Menu>
  </NavContainer>
)

const NavContainer = styled.div `
  background: linear-gradient(to bottom right, black, rgb(0, 255, 98));
  color: red
`

export default Navbar
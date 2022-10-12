import React from 'react'
import { Link } from 'react-router-dom'
import Nav from 'react-bootstrap/Nav'
import './Header.css'

function Header() {
  return (
      <Nav
          activeKey="/home"
          onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
      >
          <Nav.Item className='boton'>
              <Nav.Link>
                  <Link to="/">    LISTA </Link>
              </Nav.Link>
         </Nav.Item>
      </Nav>
          
    
  )
}

export default Header
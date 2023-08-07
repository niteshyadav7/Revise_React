import { Link } from "react-router-dom"
import "./card.css"
import React from 'react'

const Header = () => {
  return (
    <>
    <ul >
        <Link to="/">
        <li>Home</li>
        </Link>
        <Link to="/cart">
        <li>Cart</li>
        </Link>
    </ul>
    </>
  )
}

export default Header
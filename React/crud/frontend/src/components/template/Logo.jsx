import './Logo.css'
import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../img/dog.svg'

export default props =>
    <aside className="logo">
        <Link to="/" className="logo">
            <img src={logo} alt="logo" height="100px"/>
        </Link>
    </aside>
import React from 'react'

import '../scss/header.scss'
import icon from '../images/icon.png'

const Header = () => {

    return (
        <header>
            <img src={icon} />
            <h1>Elisabeth Artistry</h1>
        </header>
    )
}

export default Header
import React from 'react'
import '../../styles/Navigation.css'
import DropDown from '../DropDown/DropDown'
import Button from '../Button/Button'

function Navigation() {
    return <nav className='Navigation'>
        <ul>
            <li><DropDown label='About us' /></li>
            <li><DropDown label='insurance' /></li>
            <li><DropDown label='claims & support' /> </li>
            <li>Contact us </li>
            <li><Button label="Request a Quote" width={"14rem"} backgroundColor='#870000' /></li>
        </ul>
    </nav>

}
export default Navigation
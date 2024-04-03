import React from 'react' ; 
import { Box } from '@mui/material';
import VictoryInsurance from '../../assets/Vuctory Insurance 1.jpg'
import '../../styles/Header.css'
import Navigation from '../Navigation/Navigation';

function Header(){
    return <Box className='Header_Head'>
        <img src={VictoryInsurance} alt="victoryInsurance" />
        <Navigation/>
    </Box>
}   

export default Header ; 
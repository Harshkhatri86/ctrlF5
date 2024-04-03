import React from 'react';
import '../../styles/IconsComp.css'
import nationWide from '../../assets/Group (2).svg'

function IconsComp() {
    return <div style={{width:"100%" , display:"flex", marginTop:"100px"  , justifyContent:"center"}}>
        <div className='IconsComp'>
            <h1>With access to all the major carriers, we’ll build you a custom policy and then shop around to find you the best rate</h1>
            <div style={{display:"flex", justifyContent:"space-evenly", flexWrap:"wrap" }}>
                <img src={nationWide} alt="" />
                <img src={nationWide} alt="" />
                <img src={nationWide} alt="" />
                <img src={nationWide} alt="" />
            </div>
        </div>
    </div>
}

export default IconsComp
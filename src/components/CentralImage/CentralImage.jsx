import React from 'react';
import centralImage from '../../assets/centralImage.svg'
import '../../styles/CentralImage.css'
import Button from '../Button/Button';

function CentralImage() {
    return <><div className='' style={{display:"flex" , justifyContent:"center"}}>
        <div className='CentralImage'>
            <img src={centralImage} alt="" style={{ aspectRatio: "2/3" }} />
        </div>
        <div className='CentralImage_content'>
            <h1><span>Lets Secure</span> You are Protected</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident non, ducimus corrupti deleniti blanditiis iste modi libero minus nobis sunt ea et molestiae quos natus perferendis earum soluta facere saepe.</p>
            <Button label="Get a Quote" backgroundColor='#870000'/>
        </div>
    </div>

    </>
}
export default CentralImage; 
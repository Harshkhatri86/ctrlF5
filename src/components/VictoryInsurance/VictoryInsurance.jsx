import React from 'react'
import '../../styles/VictoryInsurance.css'
import onlineMeeting from '../../assets/online-meeting.svg'

function VictoryInsurance() {
    return <div className='VictoryInsurance'>
        <h1><span>At Victory Insurance</span> We Deliver..</h1>
        <div className="VictoryInsurance_content">
            <div>
                <img src={onlineMeeting} alt="" />
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad fugiat perferendis, accusantium earum maxime optio pariatur ut alias, repellendus necessitatibus hic molestiae corporis. Excepturi alias provident aperiam dignissimos repellendus voluptates.</p>
            </div>
            <div>
                <img src={onlineMeeting} alt="" />
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad fugiat perferendis, accusantium earum maxime optio pariatur ut alias, repellendus necessitatibus hic molestiae corporis. Excepturi alias provident aperiam dignissimos repellendus voluptates.</p>
            </div>
            <div>
                <img src={onlineMeeting} alt="" />
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad fugiat perferendis, accusantium earum maxime optio pariatur ut alias, repellendus necessitatibus hic molestiae corporis. Excepturi alias provident aperiam dignissimos repellendus voluptates.</p>
            </div>
        </div>
    </div>
}

export default VictoryInsurance;
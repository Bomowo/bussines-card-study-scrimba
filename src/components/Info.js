import avatar from '../res/images/photo_2019-10-29_20-40-06.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'

export default function Info () {
    return (<div className='info'>
                <img src={avatar} alt="my avatar"></img>
                <h1>Alexander Os</h1>
                <h3>Frontend Developer</h3>
                <p>Bomowo</p>
                <a href="mailto: oeccc25@yahoo.com">
                    <button className='email' ><FontAwesomeIcon icon={faEnvelope} className='icon'/> Email</button>
                </a>
                <a href="https://www.linkedin.com/in/alexander-osipchuk-b899a01b2" target="_blank"  rel="noreferrer">
                    <button className='linkendin' ><FontAwesomeIcon icon={faLinkedin} className='icon'/>LinkedIn </button>
                </a>
            </div>)
}
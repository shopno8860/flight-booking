import React from 'react'
import './Topbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { 
  faFacebookF, 
  faTwitter, 
  faLinkedin, 
  faInstagram, 
  faPinterest, 
  faYoutube 
} from '@fortawesome/free-brands-svg-icons'

export default function Topbar() {
  return (
    <div>
      <div className="container-fluid bg-light py-3 topbar">
        <div className="row">
            <div className="col-md-9">
                <div className="row">
                    <div className="col-md-6">
                        <p><FontAwesomeIcon icon={faLocationDot} />  <a href="" > 2130 Fulton Street, San Diego, CA 94117-1080 USA</a></p>
                    </div>
                    <div className="col-md-3">
                        <p><FontAwesomeIcon icon={faPhone} /><a href="">+880 1306830402</a></p>
                    </div>
                    <div className="col-md-3">
                        <p><FontAwesomeIcon icon={faEnvelope} /><a href="">shopno8860@gmail.com</a></p>
                    </div>
                </div>
            </div>
            <div className="col-md-3">
                <div className="social-icons">
                    <a href="#"><FontAwesomeIcon icon={faFacebookF} /></a>
                    <a href="#"><FontAwesomeIcon icon={faTwitter} /></a>
                    <a href="#"><FontAwesomeIcon icon={faLinkedin} /></a>
                    <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
                    <a href="#"><FontAwesomeIcon icon={faPinterest} /></a>
                    <a href="#"><FontAwesomeIcon icon={faYoutube} /></a>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

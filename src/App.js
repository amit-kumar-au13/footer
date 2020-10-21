import React from 'react';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';
import './App.css';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { fab } from '@fortawesome/free-brands-svg-icons';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//import { faYou } from '@fortawesome/free-solid-svg-icons'

function App() {
  return (
    <div className = "main-footer footer-body">
      <div className="container">
        <div className = "row">
          {/* column1 */}
          <div className="col">
            <h4><b>Team CoAcco</b></h4>
            <p className="footer-span"><span>provide Acomodation choice and help booking until we move you in and service you beyond.</span></p>
            <ul className = "list-unstyled">
              <li>Organization Name: CoAcco</li>
              <li>Web Site:</li>
              <li>visit us</li>
              <li>CoAcco's Office</li>
              <li>#18,parshanth Layout,</li>
              <li>Hope Form Signal, Whitefield Benglauru - 560066</li>
            </ul>
          </div>
          {/* column2 */}
          <div className="col">
            <h4><b>Company</b></h4>
            <ul className = "list-unstyled">
              <li><a >About Us</a></li>
              <li><a >Contact Us</a></li>
                

                
              <li><a >Careers with US</a></li>
              <li><a >Terms & Conditions</a></li>
            </ul>
          </div>
          {/* column3 */}
          <div className="col">
            <h4><b>Contact Us</b></h4>
            <ul className = "list-unstyled">
              <li>Toll Free</li>
              <li>Email:</li>
              <li>CONNECT WITH US</li>
              <div className="btn-div">
                <button onClick={FacebookIcon} className="btn-blue">
                 <FacebookIcon/> 
                </button>
                <button onClick={InstagramIcon} className="btn-red">
                 <InstagramIcon/> 
                 </button>
                 <button onClick={YouTubeIcon} className="btn-red">
                 <YouTubeIcon/>
               
                </button>
                </div>
                
              <li>
             
              </li>

              
            </ul>
          </div>
        </div>
        <br/>
        <div className = "row">
          <p className = "col-sm footer-copyright">
            &copy;{new Date().getFullYear()} Team CoAcco. All Rights Reserved.
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
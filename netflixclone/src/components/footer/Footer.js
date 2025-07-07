import React from 'react'
import "./footer.css"
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';


function Footer() {
  return (
    <div className='footer_outer_container'>
        <div className='footer_container'>

           <div className='first'>
              <div className='icon_cont'>
                 <FacebookOutlinedIcon className='icon'/>
                <InstagramIcon className='icon'/>
                <YouTubeIcon className='icon'/>
              </div>  

              <div className='first_data'>
                <ul className='first_lists'>
                    <li><a href="#">Auto Description</a></li>
                    <li><a href="#">Investor Relations</a></li>
                    <li><a href="#">Legal Notice</a></li>
                    <li><a href="#">Service Code</a></li>
                    <li>© 2025 Netflix</li>
                </ul>
              </div>

           </div>

           <div className='second'>
               <div className='second_data'>
                <ul className='first_lists'>
                    <li><a href="#">Help Center</a></li>
                    <li><a href="#">Jobs</a></li>
                    <li><a href="#">Cookie Preferences</a></li>
                </ul>
              </div>
           </div>


           <div className='third'>
               <div className='third_data'>
                <ul className='first_lists'>
                    <li><a href="#">Gift Cards</a></li>
                    <li><a href="#">Terms of use</a></li>
                    <li><a href="#">Corporate Information</a></li>
                </ul>
              </div>
              
           </div>


           <div className='forth'>
             <div className='fourth_data'>
                <ul className='first_lists'>
                    <li><a href="#">Media Center</a></li>
                    <li><a href="#">Privacy</a></li>
                    <li><a href="#">Contact Us</a></li>
                </ul>
              </div>
           </div>
        </div>
    </div>
  )
}

export default Footer


import React from 'react'
import "./header.css"
import Netflix_logo from "../../assets/images/Netflix_logo.svg"
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

function Header() {
  return (
    <div className='header_outer_container'>
      <div className='header_container'>
         <div className='header_left'>
            <ul>
                <li><img src={Netflix_logo} alt='Netflix logo' className='net_logo'/></li>
                <li>Home</li>
                <li>TVShows</li>
                <li>Movies</li>
                <li>Latest</li>
                <li>MyList</li>
                <li>Browse by Languages</li>
            </ul>
         </div>
         <div className='header_right'>
            <ul>
                <li><SearchIcon className='icon' /></li>
                <li><NotificationsIcon className='icon' /></li>
                <li><AccountBoxIcon className='icon' /></li>
                <li><ArrowDownwardIcon className='icon' /></li>
            </ul>
         </div>
      </div>
    </div>
  )
}

export default Header

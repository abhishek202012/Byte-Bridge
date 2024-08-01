// Navbar.js
import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
// import IconButton from '@mui/material/IconButton';
import logoImage from '../../images/logo.svg fill.png'; // Make sure to import your logo image
import './Header.css'

const Navbar = () => {
  return (
    <AppBar
      position="static"
      style={{
        background: 'linear-gradient(90deg, rgba(9,17,20,1) 0%, rgba(9,17,20,1) 40%, rgba(12,80,107,1) 100%)',
        margin: 0,
        padding: 0,
    
      }}
    >
      <Toolbar>
        <div style={{ width: '1420px', height: '80px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <img src={logoImage} alt="Byte Bridge" style={{ height: '80.87px', width: "287px" }} />

          <div className='social_icons'>

            <div className='facebook'>
              <i class="fa-brands fa-facebook-f"></i>
            </div>

            <div className='twitter'>
              <i class="fa-brands fa-twitter"></i>
            </div>

            <div className='discord'>
              <i class="fa-brands fa-discord"></i>
            </div>

            <div className='slack'>
              <i class="fa-brands fa-slack"></i>
            </div>



          </div>

        </div>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;

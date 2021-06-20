import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import style from './Header.module.css';
import Navbar from '../Navbar/Navbar';

const Header = () => {
   return (
      <header className={style.header} >
    <AppBar
    style={{background:'rgba(0, 0, 0, 0.63)', marginBottom: '50px'}}
    position="fixed">
      <Toolbar>
         <div style={{width: '100%', height: '64px'}}  >
         <Navbar/>
         </div>
         
      </Toolbar>
    </AppBar>
  </header>
   )
}

export default Header
import React from "react";
import {NavLink} from "react-router-dom";
import style from "./Navbar.module.css";


const Navbar = (props) => {
   return (
   <div className={style.navBar}>
      <div className={style.link} >
      <NavLink  activeClassName={style.active} to="/facial" >Главная</NavLink>
      </div>
      <div className={style.link} >
      <NavLink  activeClassName={style.active} to="/skills" >Скиллы</NavLink>
      </div>
      <div className={style.link} >
      <NavLink  activeClassName={style.active} to="/projects" >Проекты</NavLink>
      </div>
      <div className={style.link} >
      <NavLink exact  activeClassName={style.active} to="/sorry" >Резюме</NavLink>
      </div>
      <div className={style.link} >
      <NavLink  activeClassName={style.active} to="/sorry/kk" >Контакты</NavLink>
      </div>
      </div>
      )
     }

     export default Navbar;
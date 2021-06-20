import React from 'react'
import icons from '../../assets/img/technologiesIcon/build.png'
import style from './Sorry.module.css'

const Sorry = () => {
   return <div className={style.buildPage}>
<div className={style.buildItem} >
   <img src={icons} alt="" />
   <h1>Страница пока не готова</h1>
</div>
   </div>
}

export default Sorry

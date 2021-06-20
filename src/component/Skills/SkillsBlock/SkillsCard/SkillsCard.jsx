import React from 'react';
import style from './SkillsCard.module.css';


const SkillsCard = (props) => {
   return <div className={`${style.cards} col`}>
<div className={style.cardContainer} >
   <img src={props.icon} alt="" />
<h3>{props.title}</h3>
<p>{props.descriptions}</p>
</div >
   </div>
}

export default SkillsCard;
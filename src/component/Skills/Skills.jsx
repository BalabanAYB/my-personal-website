import React from 'react';
import style from './Skills.module.css';
import SkillsBlock from './SkillsBlock/SkillBlock';


const Skills = (props) => {
   return <div className={style.skills}>
      <div  className='container'>
<SkillsBlock/>
</div>
</div>
}

export default Skills;
import React from 'react';
import style from './SkillBlock.module.css';
import SkillsCard from './SkillsCard/SkillsCard';
import { connect } from 'react-redux'

const SkillsBlock = (props) => {

   let skills = props.skills.map(skill => {
      return <SkillsCard title={skill.title} icon={skill.icon} descriptions={skill.description} />
   })

   return <div className={style.skillItem}>
      <h1 className={style.title} >Мои Скиллы</h1>
      <div className={style.blockContainer} >
         <div className='container'>
            <div className='row rows-3' >
               {skills[0]}
               {skills[1]}
               {skills[2]}
            </div>
            <div className='row rows-3' >
               {skills[3]}
               {skills[4]}
               {skills[5]}
            </div>
            <div className='row rows-2' >
               {skills[6]}
               {skills[7]}
               {skills[8]}
            </div>
         </div>
      </div>
   </div>
}

let mapStateToProps = (state) => {
   return {
      skills: state.skills.skill
   }
}

export default connect(mapStateToProps, {})(SkillsBlock);
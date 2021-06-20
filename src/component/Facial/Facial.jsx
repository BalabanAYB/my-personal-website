import React from "react";
import style from "./Facial.module.css";
import Button from '@material-ui/core/Button';

const Facial = (props) => {

   return <section className={style.sectionFacial} >
      <div className={`container ${style.facial}`} >
         <div className={style.cardBlock}>
            <div className={style.myPhoto}></div>
            <div className={style.aboutMeBlock} >
               <div className={style.title}><h1>Буду</h1> <span>рад сотрудничеству</span></div>

               <p className={style.aboutMe} >
                  Привет, я Александр Балабан, мне 22 года, женат.
                  До недавного времени был офицером Вооруженных Сил
                  Республики Беларусь. По некоторым причинам решил уйти
                  из данной сферы, стал Frontend разработчиком, на данный момент
                  ищу для себя место, где смогу полностью реализовать свой потенциал.
               </p>
               <Button
                  style={{ background: 'rgb(14, 238, 14)' }}
                  size='small' color="primary"
                  variant="raised">
                  Резюме</Button>
            </div>
            <div  className={style.contacts}>
               <div>
                  <h5>Сфера деятельности:</h5>
                  <span>Frontend(React) developer</span>
               </div>
               <div>
                  <h5>Телефон:</h5>
                  <span>+375(29)753-77-50</span>
               </div>
               <div>
                  <h5>Email:</h5>
                  <span>balabanAleksandr45@gmail.com</span>
               </div>
               <div>
                  <h5>Социальные сети:</h5>
                  <div className={style.socials}>
                  <a href='https://www.linkedin.com/in/alexander-balaban-b53b70207/' className={style.linkedin}></a>
                  <a href='https://www.linkedin.com/in/alexander-balaban-b53b70207/' className={style.instagram}></a>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </section>
}

export default Facial;
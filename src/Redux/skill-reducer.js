import html from '../assets/img/technologiesIcon/html.png'
import css3 from '../assets/img/technologiesIcon/css3.png'
import bootstrap from '../assets/img/technologiesIcon/bootstrap.png'
import javascript from '../assets/img/technologiesIcon/javascript.png'
import react from '../assets/img/technologiesIcon/react.png'
import redux from '../assets/img/technologiesIcon/redux.png'
import materialUi from '../assets/img/technologiesIcon/materialUi.png'
import git from '../assets/img/technologiesIcon/git.png'
import api from '../assets/img/technologiesIcon/api.png'

let initialState = {
   skill : [
   { id:'1', title:'Html5', description:'Язык для структурирования и представления содержимого всемирной паутины.', icon: html},
   { id:'2', title:'Css3', description:'Формальный язык описания внешнего вида документа, написанного с использованием языка разметки.', icon: css3},
   { id:'3', title:'Bootstrap', description:'Свободный набор инструментов для создания сайтов и веб-приложений.', icon: bootstrap}, 
   { id:'4', title:'JavaScript', description:'Мультипарадигменный язык программирования.', icon: javascript},
   { id:'5', title:'React', description:'JavaScript-библиотека с открытым исходным кодом для разработки пользовательских интерфейсов.', icon: react},
   { id:'6', title:'Redux', description:'Библиотека для JavaScript с открытым исходным кодом, предназначенная для управления состоянием приложения.', icon: redux}, 
   { id:'7', title:'Material ui', description:'Набор компонентов React, который реализует Google Material Design', icon: materialUi},
   { id:'8', title:'Git', description:'Распределённая система управления версиями.', icon: git},
   { id:'9', title:'REST API', description:'Архитектурный стиль взаимодействия компонентов распределённого приложения в сети. REST представляет собой согласованный набор', icon: api},
   ]
}



const skillReducer = (state = initialState, action) => {
   return state
}

export default skillReducer
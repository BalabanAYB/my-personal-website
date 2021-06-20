import React from 'react'
import style from './TestingTask.module.css'



const ListTask = (props) => {
   let listItem
   if (props.filterValue && props.filter[1] === 'number') {
      listItem = props.list
         .filter(item => item.length > props.filterValue)
         .map(item => <li className={style.list} key={props.list.indexOf(item)} >{item}</li>)
   }
   else if (props.filterValue && props.filter[1] === 'string') {
      if (props.check === false) {
         let filterValue = props.filterValue.toLowerCase()
         listItem = props.list
            .filter(item => item.toLowerCase().includes(filterValue))
            .map(item => <li className={style.list} key={props.list.indexOf(item)} >{item}</li>)
      }
      else {
         listItem = props.list
            .filter(item => item.includes(props.filterValue))
            .map(item => <li className={style.list} key={props.list.indexOf(item)} >{item}</li>)
      }
   }
   else {
      listItem = props.list.map(item => <li className={style.list} key={props.list.indexOf(item)} >{item}</li>)
   }
   return <div>
      <ul className={style.listItem} >
         {listItem}
      </ul>
   </div>
}

export default ListTask
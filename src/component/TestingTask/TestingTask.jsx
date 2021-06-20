import React from 'react'
import style from './TestingTask.module.css'
import InputForm from './TextFiled/TextFields'
import ListTask from './ListTask'
import { setFilter, getListThunk } from '../../Redux/task-reducer'
import { connect } from 'react-redux'



const TestingTask = (props) => {

   const [filterValue, setFilterValue] = React.useState(props.filter[0])
   const [check, setCheck] = React.useState(true)


   React.useEffect(() => {
      props.getListThunk()
   }, [props.filter])
   return (
      <div className={style.backgroundTask}>
         <InputForm getListThunk={props.getListThunk} setFilter={props.setFilter} filter={filterValue} onSubmit={(data) => {
            setFilterValue(data.textField)
            setCheck(data.checkField)
         }} />
         <ListTask filter={props.filter} check={check} filterValue={filterValue} list={props.list} getListThunk={props.getListThunk} />
      </div>
   )
}

const mapStateToProps = (state) => {
   return {
      filter: state.task.filter,
      list: state.task.list
   }
}

export default connect(mapStateToProps, { setFilter, getListThunk })(TestingTask)
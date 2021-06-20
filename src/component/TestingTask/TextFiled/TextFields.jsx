import React from 'react'
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import ButtonGroup from '../ButtonGroup/ButtonGroup';
import { Field, reduxForm } from 'redux-form';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import PresentToAllIcon from '@material-ui/icons/PresentToAll';
import style from '../TestingTask.module.css'



const useStyles = makeStyles((theme) => ({
   root: {

   },
   textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: '25ch',
   },
}));

const CheckBoxExample = ({ input, meta, ...props }) => {

   const [checked, setChecked] = React.useState(true)
   return <FormControlLabel
      style={{ color: 'white' }}
      control={
         <Checkbox
            {...input} {...props}
            checked={checked}
            icon={<PresentToAllIcon
               size='large'
            />}
            checkedIcon={<PresentToAllIcon
               size='large'
            />}
            onChange={(e) => setChecked(e.target.checked)}
            inputProps={{
               'aria-label': 'secondary checkbox'
            }}
         />}
      label='Чувствительность регистра'
   />
}

const TextFields = ({ input, meta, ...props }) => {

   const classes = useStyles();

   return <div className={classes.root}>
      <div>
         <TextField {...input} {...props}
            variant='outlined'
            color='secondary'
            label='поле ввода'
            margin='поле ввода'
            id="outlined-margin-normal"
            className={classes.textField}
         />
      </div>
   </div>
}


const Input = (props) => {
   const { handleSubmit } = props
   return <form className={style.forms} onSubmit={handleSubmit} >
      <Field name={'textField'} component={TextFields} />
      <Field name={'checkField'} component={CheckBoxExample} />
      <ButtonGroup setFilter={props.setFilter} getListThunk={props.getListThunk} filter={props.filter} lengthFilter={props.lengthFilter} type="submit" />
   </form>
}

const InputForm = reduxForm({ form: 'filtreValue' })(Input)

export default InputForm;
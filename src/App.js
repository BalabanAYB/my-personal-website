import Facial from './component/Facial/Facial'
import './App.css';
import Header from './component/Header/Header';
import Skills from './component/Skills/Skills';
import TestingTask from './component/TestingTask/TestingTask';
import Sorry from './component/Sorry/Sorry';
import { Route } from 'react-router';

function App() {
  return (
    <div  className='containerApp'>
    <Header/>
    <div className='appContent' >
    <Route path='/facial' render={() => <Facial/>} />
    <Route path='/skills' render={() => <Skills/>} />
    <Route path='/sorry' render={() => <Sorry />} />
    <Route path='/projects' render={() => <TestingTask />} />
    </div>

    </div>
  )
}

export default App;

import {Switch, Route} from 'react-router-dom';
import Dashboard from './Components/Dashboard/Dashboard';
import Course from './Components/Course/Course';

export default (
    <Switch>
        <Route exact path='/' component={Course}/>
    </Switch>
)
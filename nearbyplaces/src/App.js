import React from 'react';
import Home from './components/Home';
import Login from './components/Login';
import { 
  BrowserRouter,
  Switch,
  Route,
} from 'react-router-dom';
import Place from './components/Place';

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Switch>
            <Route exact path = '/' render = {props => <Home {...props} />}>         
            </Route>
            <Route path = '/login'>
                <Login />
            </Route>
            <Route path = '/place' render = {props => <Place {...props} />}>         
            </Route>
        </Switch>
    </BrowserRouter>
  );
}
export default App;

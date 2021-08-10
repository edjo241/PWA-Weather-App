
import {BrowserRouter as Router,Route,Switch } from 'react-router-dom';
import './App.css';
import Rain from './Rain';
import Home from './Home';
import Sun from './Sun'
import Mist from './Mist';

function App() {

  return (
     
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route path="/rain" component={Rain}></Route>
          <Route path="/sun" component={Sun}></Route>
          <Route path="/mist" component={Mist}></Route>

        </Switch>
      </Router>
    </div>
  
    
  );
}

export default App;

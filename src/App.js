
import {BrowserRouter as Router,Route,Switch } from 'react-router-dom';
import './App.css';
import Rain from './Rain';
import Home from './Home';

function App() {

  return (
     
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route path="/rain" component={Rain}></Route>
        </Switch>
      </Router>
    </div>
  
    
  );
}

export default App;

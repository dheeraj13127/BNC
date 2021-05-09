import React from 'react'
import './App.css';
import Component1 from './components/Component1';
import {BrowserRouter as Router,Route} from 'react-router-dom'
import Component2 from './components/Component2';
function App() {
  return (
    <Router>
    <div className="fluid-container">
      <Route path="/" exact component={Component1}/>
      <Route path="/deposit" exact component={Component2}/>
    </div>
    </Router>
    
  );
}

export default App;

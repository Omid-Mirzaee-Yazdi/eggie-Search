import './App.css';
import Home from './pages/Home';
import Results from './pages/Results.js'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/results">
            <Results />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>

      </Router>
    </div>
  );
}

export default App;

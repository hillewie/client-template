
import './App.css';
import Tweets from './pages/Tweets.js';
import Nav from './components/Nav'
import ManageTweets from './pages/admin/ManageTweets'
import { 
  BrowserRouter as Router, 
  Switch, 
  Route
} from 'react-router-dom';
import { Link } from "react-router-dom"


function App() {
  return (
    <Router>
    <div className="App">
    <Nav/>
    
      <Switch>
        <Route path="/tweets" exact component={Tweets} />
        <Route path="/manage-tweets" exact component={ManageTweets} />
      </Switch>

      

    {/* FNITTER
      <Tweets /> */}

    </div>
    </Router>
  );
}

export default App;

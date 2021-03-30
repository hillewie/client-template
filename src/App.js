
import './App.css';
import Tweets from './pages/Tweets.js';
import Nav from './components/Nav'
import ManageTweets from './pages/admin/ManageTweets'
import { 
  BrowserRouter as Router, 
  Switch, 
  Route
} from 'react-router-dom';


function App() {
  return (
    <Router>
    <div className="App">
    <Nav/>

    <Switch>
      <Route path="/" exact component={Tweets} />
      
    </Switch>

      FNITTER
      <Tweets />

      Admin
    </div>
    </Router>
  );
}

export default App;

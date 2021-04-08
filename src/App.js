
import './App.css';
import styled from 'styled-components';
import Tweets from './pages/Tweets.js';
import Nav from './components/Nav';
import ManageTweets from './pages/admin/ManageTweets';
import CreateItem from './pages/admin/CreateItem'
import FetchSingleTweet from "./pages/FetchSingleTweet"
import { 
  BrowserRouter as Router, 
  Switch, 
  Route
} from 'react-router-dom';
import { Link } from "react-router-dom";






function App() {
  return (
    <Router>
    <div className="App">
      <h1>Fnitter</h1>
    <Nav/>
    
      <Switch>
        <Route path="/tweets" exact component={Tweets} />
        <Route path="/manage-tweets" component={ManageTweets} />
        <Route path="/create-item"  component={CreateItem} />
        <Route path='/single-tweet/:id' component={FetchSingleTweet}/>
      </Switch>

      {/* <SingleTweetTable/> */}

    
      {/* <Tweets /> */}

    </div>
    </Router>
  );
}


export default App;

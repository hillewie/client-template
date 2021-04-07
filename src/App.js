
import './App.css';
import styled from 'styled-components';
import Tweets from './pages/Tweets.js';
import Nav from './components/Nav';
import ManageTweets from './pages/admin/ManageTweets';
import CreateItem from './pages/admin/CreateItem'
import { 
  BrowserRouter as Router, 
  Switch, 
  Route
} from 'react-router-dom';
import { Link } from "react-router-dom";




function App() {
  return (
    <Router>
    <Wrapper className="App">
    <Nav/>
    
      <Switch>
        <Route path="/tweets" exact component={Tweets} />
        <Route path="/manage-tweets" exact component={ManageTweets} />
        <Route path="/create-item" exact component={CreateItem} />
      </Switch>

      

    
      {/* <Tweets /> */}

    </Wrapper>
    </Router>
  );
}

const Wrapper = styled.section`
  padding: 4em;
  
`;

export default App;

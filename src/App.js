import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Home from "./components/Home/Home";
import NoMatch from "./components/NoMatch/NoMatch";
import Team from './components/Team/Team';
import TeamDetail from "./components/TeamDetail/TeamDetail";
import bannerImage from "../src/Photo/banner.jpg"

function App() {
  
  return (
     <div className="App">
        
       <header>
       <Router>
            <Switch>
              <Route path = "/home">
                  <Home></Home>
              </Route>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/team/:idTeam">
                   <TeamDetail></TeamDetail>  
              </Route>
              <Route path="*">
                 <NoMatch />
              </Route>
              
            </Switch>
       </Router>
       </header>
      
       </div>
  );
}

export default App;

import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import {About} from "./components/About";
//import {Home} from "./components/Home";
import UsersContextProvider from "./components/Users";
import SearchBox from "./components/search-box";
import UserDetails from "./components/UserDetails";
import './index.css';

export default function App() {
  return(
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/" style={{textDecoration: 'none'}}>Home</Link>
            </li>
            <li>
              <Link to="/about" style={{textDecoration: 'none'}}>About</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/about">
            <About />
          </Route>
          // <Route path="/users">
          //
          // </Route>
          <Route path="/">
            <UsersContextProvider>
              <SearchBox />
              <UserDetails />
            </UsersContextProvider>
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

import React, { Component } from "react";
import "./App.css";
import Navigation from "./components/Navigation";
import NewArticle from './components/NewArticle';
import NewComment from './components/NewComment';
import Article from './components/Article';


import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <div className="container">
          <Router>
            <div>
              <Route exact path="/new" component={NewArticle} />
              <Route path="/comment" component={NewComment} />
              <Route path="/list" component={Article} />

            </div>
          </Router>
        </div>
      </div>
    );
  }
}

export default App;

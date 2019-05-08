import React from "react";
import axios from "axios";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ArticleDetail from "./ArticleDetail";

export default class ArticleList extends React.Component {
  state = {
    articles: []
  };

  componentDidMount() {
    axios.get(`http://localhost:3999/api`).then(res => {
      const articles = res.data;
      this.setState({ articles });
    });
  }

  renderArticles() {
  
    return this.state.articles.map(article => {
      return (
        <Router>
          <div class="accordion" id="accordionExample">
          <Route path="/ArticleDetail/:Id" component={ArticleDetail}/>

           <div>
           
            <div class="row">
              <div class="col-sm">
                <Link to={`/ArticleDetail/${article._id}`}>
                  {article.title}
                </Link>
              </div>
              <div class="col-sm">{article.description}</div>
            </div>
            </div>
            </div>
        </Router>
      );
    });
    
  }

  render() {
    return <div class="container">
     <div class="row">
    <div class="col-sm">
    <h1>Article Title</h1>
    </div>
    <div class="col-sm">
    <h2>Article Description</h2>
    </div>
    </div>
    
    {this.renderArticles()}</div>;
  }
}

 
import React from 'react';

import axios from 'axios';


export default class ArticleDetail extends React.Component {
  state = {
    article: []
  }

  componentDidMount() {
    var article;
    axios.get(`http://localhost:3999/api/article/${this.props.match.params.Id}/comments`)
      .then(res => {
        article = res.data;
        this.setState({ article });
      })
  }
  render() {

    var items = []
  for (var i in this.state.article.comments) {
    items.push(
      <div class="card">
        <div class="collapse show" aria-labelledby="headingOne" >
          <div class="card-body">
            <div>
              <div>Name: {this.state.article.comments[i].comments.name}</div>
              <div>User Name:{this.state.article.comments[i].comments.username}</div>
              <div>Comment: {this.state.article.comments[i].comments.comment}</div>
              <hr />
            </div>
          </div>
        </div>
      </div>)
     
  }

    return (
      <div>
         <h1> {this.state.article[0]}</h1>
         <h1>{this.state.article[1]}</h1>
         <h1>{this.state.article[2]}</h1>
         {items}
      </div>
    )
  }
}


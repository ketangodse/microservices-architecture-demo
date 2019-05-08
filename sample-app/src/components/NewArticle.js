import React, { Component } from 'react';
import axios from 'axios';

export default class NewArticle extends Component {

    constructor() {
        super();
        this.state = {
            
                 title: '',
                 description: '',
        };
      }

    onSubmit = (e) => {
      e.preventDefault();
      var article = this.state;
        console.log(article);
        axios.post('http://localhost:3999/api/new', {article})
        .then((result) => {
          //access the results here....
        });
    }

    onChange = (e) => {
        console.log(e.target.name);
              this.setState({ [e.target.name]: e.target.value });
      }
  
    render() {
        var article = {
            title: '',
            description: '',
        }
      article = this.state;

      return (
            <form onSubmit={this.onSubmit}>
              <div class="form-group">
                <label for="articleTitle">Article Title</label>
                <input type="text" class="form-control form-control-lg form-control-sm" id="articleTitle" aria-describedby="titleHelp" placeholder="Title" value={article.title} name="title"  onChange={this.onChange}/>
                <small id="titleHelp" class="form-text text-muted">Title: Microservices Development</small>
              </div>
              <div class="form-group">
                <label for="articleDesc">Description</label>
                <textarea class="form-control form-control-lg form-control-sm" id="articleDesc" rows="7" placeholder="Description here" value={article.description} name="description"   onChange={this.onChange}></textarea>
              </div>
              <button type="submit" class="btn btn-primary">Submit</button>
            </form>
      
      );
    }
  }
  
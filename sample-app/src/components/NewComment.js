import React, { Component } from "react";
import axios from "axios";

export default class NewComment extends Component {

    constructor() {
        super();
        this.state = {
                name: '',
                username: '',
                comment:'',
                selectedArt:'',
                articles:''
        };
      }
  onSubmit = e => {
    e.preventDefault();
    var comment = this.state;
    console.log(comment);
    axios.post("http://localhost:3999/api/comments", comment).then(result => {
      if(result.status==200)
      {
          alert('Saved');
      }
    });
  };

  onChange = (e) => {
    console.log(e.target.value);
          this.setState({ [e.target.name]: e.target.value });
          console.log(e.target.name);
  }


  componentDidMount() {
    axios.get(`http://localhost:3999/api`).then(res => {
      const articles = res.data;
      this.setState({ articles });
    });
  }


  render() {
    var items = []
    var articles = this.state.articles;
    items.push(<option value="Select">Select article</option>) ;
    for (let index = 0; index < articles.length; index++) {
        items.push( <option key={articles[index]._id} value={articles[index]._id}>{articles[index].title}</option>) ;
        
    }

    var comment = {
        name: '',
        username: '',
        comment:'',
        selectedArt:'',
        articles:''
    }
    comment = this.state;
      

    return (
      <form onSubmit={this.onSubmit}>
        <div class="form-group">
          <label for="articleSelect">Article select</label>
          <select class="form-control" name="selectedArt" id="articleSelect"  value={comment.selectedArt}
           onChange={this.onChange}>
               {items}       
          </select>
        </div>
        <div class="form-group">
          <label for="name">Name</label>
          <input
            type="text"
            class="form-control form-control-lg form-control-sm"
            id="name"            
            placeholder="Kishor S"
            value={comment.name} 
            name="name"  
            onChange={this.onChange}
          />
        </div>
        <div class="form-group">
          <label for="username">User Name</label>
          <input
            type="text"
            class="form-control form-control-lg form-control-sm"
            id="username"
            placeholder="superman"
            value={comment.username} 
            name="username"  
            onChange={this.onChange}
          />
        </div>
        <div class="form-group">
          <label for="comment">Comment</label>
          <textarea
            class="form-control form-control-lg form-control-sm"
            id="comment"
            rows="3"
            placeholder="Comment here"
            value={comment.comment} 
            name="comment"  
            onChange={this.onChange}
          />
        </div>
        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
    );
  }
}

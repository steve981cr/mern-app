import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class ArticleInfo extends React.Component {
  constructor() {
    super();
    this.state = { article: {} };
    this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidMount() {
    axios.get(`/api/articles/${this.props.match.params._id}`)
      .then((response) => { 
        this.setState({
          article: response.data
        })
      })
      .catch(error => console.log('error', error));
  }

  handleDelete() {
    axios.delete(`/api/articles/${this.props.match.params._id}`)
      .then(() => {
        this.props.history.push("/articles")
      })
      .catch(error => console.log('error', error));
  }

  render() {
    return (
      <div>
        <h2>{this.state.article.title}</h2>
        <small>_id: {this.state.article._id}</small>
        <p>{this.state.article.content}</p>
        <p className='btn-group'>
          <Link to={`/articles/${this.state.article._id}/edit`} className="btn btn-info">Edit</Link> 
          <button onClick={this.handleDelete} className="btn btn-danger">Delete</button> 
          <Link to="/articles" className="btn btn-secondary">Close</Link>
        </p>
        <hr/>
      </div>
    )
  }
}

export default ArticleInfo;
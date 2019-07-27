import React from 'react';
import { get } from 'axios';
import { Link } from 'react-router-dom';

class ArticleList extends React.Component {
  constructor() {
    super();
    this.state = { articles: [] };
  }

  componentDidMount() {
    get('/api/articles')
      .then(response => { 
        this.setState({articles: response.data});
      })
      .catch(error => console.log('error', error));
  }

  render() {
    return (
      <div>
        <h2>
          Articles
          <Link to="/articles/new" className="btn btn-primary float-right">Create Article</Link>  
        </h2><hr/>
        {this.state.articles.map(function(article) {
          return(
            <div key={article._id}>
              <h4><Link to={`/articles/${article._id}`}>{article.title}</Link></h4>
              <small>{article._id}</small>
              <hr/>
            </div>
          )     
        })}
        
      </div>
    )
  }
}

export default ArticleList;
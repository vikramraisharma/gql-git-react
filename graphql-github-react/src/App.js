import React, {Component} from 'react';
import './App.css';

import axios from 'axios'

const axiosGitHubGraphQL = axios.create({
  baseURL: 'https://api.github.com/graphql',
  headers: {
    Authorization: `bearer ${process.env.REACT_APP_GITHUB_PERSONAL_ACCESS_TOKEN}`,
  },
})

const TITLE = 'React GraphQL GitHub Client';

class App extends Component {

  state = {
    path: 'the-road-to-learn-react/the-road-to-learn-react'
  }

  componentDidMount(){
    //fetch data
  }

  onChange = event => {
    this.setState({path: event.target.value})
  }
  onSubmit = event => {

  }

  render(){
    const {path} = this.state;
    return (
      <div className="App">
        <h1>{TITLE}</h1>

        <form onSubmit={this.onSubmit}>
          <label htmlFor="url"> Show open issues for https://github.com</label>
          
          <input id="url" type="text" value={path} onChange={this.onChange} style={{width: '300px'}}/>

          <button type="submit">Search</button>
        </form>

        <hr/>

        {/* uwu */}
      </div>
    );
  }
}

export default App;

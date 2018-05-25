import React, { Component } from 'react';
import './App.css';
import { fetchPosts } from './actions/index';

class App extends Component {
  constructor(props){
    super(props)
    
    state: {
      blog:""
    }
  }
  
  componentDidMount(){
  // console.log('cDM')
  fetchPosts()
  }
  
  render() {
    return (
      <div className="App">
        <h1>app</h1>
      </div>
    );
  }
}

export default App;

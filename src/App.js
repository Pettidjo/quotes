import React, { Component } from 'react';
import axios from 'axios';

import "./app.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
    }
  }

  async componentDidMount() {
    this.fetchApi();
  }

  fetchApi = async () => {
    let res = await axios.get(`https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&timestamp=${new Date().getTime()}`);
    res = res.data[0].content;
    
    this.setState({text: res });
  }

  render() {
    console.log(this.state);

    return (
      <div className="app">
        <div className="text" dangerouslySetInnerHTML={{__html: this.state.text}}>
        </div>
        <button onClick={this.fetchApi} className="btn">Generate</button>
      </div>
    );
  }
}

export default App;

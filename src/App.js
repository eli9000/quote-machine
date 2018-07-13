import React, { Component } from "react";
import "./App.css";

import Header from "./components/Header/Header";
import Axios from "../node_modules/axios";

class App extends Component {
  state = {
    data: [],
    loading: true
  };

  getQuote = event => {
    const endpoint =
      "https://api.forismatic.com/api/1.0/?method=getQuote&format=xml&jsonp=parseQuote";

    Axios.get(endpoint, {
      headers: {
        "Access-Control-Request-Headers": "cors",
        CORS: "true"
      }
    })
      .then(({ data }) => {
        this.setState({ ...data, loading: !this.state.loading });
        console.log({ ...data });
      })
      .catch(err => console.warn("Error:\n", err));
  };

  render() {
    return (
      <div className="App">
        <Header />
        <h1 id="title">Random Quotes from Antioch and Yore!</h1>
        <p>This is a short description of the site</p>
        <button onClick={this.getQuote}>CLick</button>
        <div className="quote">
          {!this.state.loading &&
            this.state.data.map(({ id, title, content }) => (
              <div key={id}>
                <h1>{title}</h1>
                {content}
              </div>
            ))}
        </div>
      </div>
    );
  }
}

export default App;

const getQuote = () => {};

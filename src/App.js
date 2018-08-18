import React, { Component } from "react";
import "./App.css";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Card from "./components/Card/Card";

import quotes from "./data/quotes.json";

class App extends Component {
  state = {
    data: []
  };

  getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

  componentWillMount() {
    var quotePick = quotes.quotes[this.getRandomInt(quotes.quotes.length)];
    console.log(quotePick);
    this.setState({ data: { ...quotePick } });
  }

  getNew = event => {
    event.preventDefault();
    let quotePick = quotes.quotes[this.getRandomInt(quotes.quotes.length)];
    this.setState({ data: { ...quotePick } });
    console.log(quotePick);
  };

  render() {
    const { data } = this.state;
    return (
      <div className="App">
        <Header />
        <Card {...data} newIsh={this.getNew} />
        <Footer />
      </div>
    );
  }
}

export default App;

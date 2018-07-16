import React, { Component } from "react";
import "./App.css";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Card from "./components/Card/Card";
// import Axios from "../node_modules/axios";

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
    // let quotePick = quotes.quotes[3];
    console.log(
      `Quote ID-${quotePick.id} chosen, by ${quotePick.author}:`,
      quotePick
    );
    this.setState({ data: { ...quotePick } });
  }

  // }
  // getQuote = event => {
  //   const endpoint =
  //     "https://api.forismatic.com/api/1.0/?method=getQuote&format=xml&jsonp=parseQuote";

  //   Axios.get(endpoint, {
  //     headers: {
  //       "Access-Control-Request-Headers": "cors",
  //       CORS: "true"
  //     }
  //   })
  //     .then(({ data }) => {
  //       this.setState({ ...data, loading: !this.state.loading });
  //       console.log({ ...data });
  //     })
  //     .catch(err => console.warn("Error:\n", err));
  // };

  render() {
    const { data } = this.state;
    return (
      <div className="App">
        <Header />
        <Card {...data} />
        <Footer />
      </div>
    );
  }
}

export default App;

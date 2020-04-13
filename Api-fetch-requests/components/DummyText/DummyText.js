import React, { Component } from "react";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      paragraphs: 5,
      results: [],
    };
  }

  componentDidMount() {
    this.fetchText();
  }

  fetchText() {
    this.setState({ isLoading: true });
    const url =
      "https://baconipsum.com/api/?type=meat-and-filler&paras=" +
      this.state.paragraphs;
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        console.log(JSON.stringify(json));
        this.setState({ results: json, isLoading: false });
      });
  }

  handleChange = (ev) => {
    this.setState({ paragraphs: ev.target.value }, () => {
      this.fetchText();
    });
  };

  displayResults() {
    if (this.state.isLoading) {
      return <p>Loading...</p>;
    } else {
      return this.state.results.map((paragraphText, index) => {
        return <p key={index}>{paragraphText}</p>;
      });
    }
  }

  render() {
    return (
      <div id="dummy-container">
        <h1>Dummy Text Generator</h1>
        <div id="dummy-text-controls">
          <h2>Real Time Options</h2>
          <p>Paragraphs: </p>
          <p>
            <input
              type="number"
              value={this.state.paragraphs}
              min="1"
              onChange={this.handleChange}
            />
          </p>
        </div>
        <div id="dummy-text-result">{this.displayResults()}</div>
      </div>
    );
  }
}

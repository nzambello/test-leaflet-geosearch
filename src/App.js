import React from 'react';
import logo from './logo.svg';
import './App.css';
import Results from './Results';

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      query: '',
      resultslist: [],
    };
  }

  updateQuery = e => {
    let query = e.currentTarget.value
    this.setState({ query })
  }

  componentDidMount() {

  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <input type="text" value={this.state.query} onChange={this.updateQuery} />
          <Results query={this.state.query} />
        </header>
      </div>
    );
  }
}

export default App;

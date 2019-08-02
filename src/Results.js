import React from 'react';
import { OpenStreetMapProvider } from 'leaflet-geosearch';

class Results extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      results: []
    };
  }

  componentDidUpdate(prevProps) {
    if (this.props.query !== prevProps.query) {
      const provider = new OpenStreetMapProvider()
      const query = this.props.query ? this.props.query : ''

      provider
        .search({ query })
        .then(results => {
          let queryResults = results
          this.setState({ results: queryResults })
        })
        .catch(err => {
          console.error(err)
          this.setState({ results: [] })
        })
    }
  }

  render() {
    const { results } = this.state
    if (results.length === 0) {
      return <p>No results</p>
    }

    return (
      <ul>
        {results.map(res => <li key={`${res.x},${res.y}`} title={`${res.x},${res.y}`}>{res.label}</li>)}
      </ul>
    )
  }
}

export default Results;

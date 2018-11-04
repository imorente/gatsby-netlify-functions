import React, { Component } from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

class HelloPage extends Component {
  state = { greeting: null }

  componentDidMount() {
    fetch('/.netlify/functions/hello')
      .then(res => res.json())
      .then(result => this.setState({ greeting: result.text }))
  }

  render() {
    const { greeting } = this.state
    return (
      <Layout>
        <h1>Hello Lambda!</h1>
        <p>{greeting || 'Loading...'}</p>
        <Link to="/">Go back to the homepage</Link>
      </Layout>
    )
  }
}

export default HelloPage

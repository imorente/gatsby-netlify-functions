import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'

const IndexPage = () => (
  <Layout>
    <h1>Hi people</h1>
    <p>
      This is an example Gatsby site using Netlify’s integration with Lambda
      functions.
    </p>
    <Link to="/hello">Hello Lambda!</Link>
  </Layout>
)

export default IndexPage

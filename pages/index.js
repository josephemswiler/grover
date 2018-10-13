import { Component } from 'react'
import Head from 'next/head'
import Header from '../components/Header'

export default class Index extends Component {
  render () {
    return (
      <div>
        <Head>
          <title>Index</title>
          <meta name='description' content='This is the Index page' />
        </Head>
        <div>
          <Header pageTitle='Index' />
          Index
        </div>
      </div>
    )
  }
}

import React from 'react'
import Head from 'next/head'
import Header from '../components/Header'

export default class Login extends React.Component {
  render () {
    return (
      <div>
        <Head>
          <title>Login</title>
          <meta name='description' content='This is the login page.' />
        </Head>
        <div>
          <Header pageTitle='login' />
          Login
        </div>
      </div>
    )
  }
}

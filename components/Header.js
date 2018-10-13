import { Component } from 'react'
import Link from 'next/link'
import Toolbar from '@material-ui/core/Toolbar'
import Grid from '@material-ui/core/Grid'
import { styleToolbar } from './SharedStyles'

export default class Header extends Component {
  style = () => ({
    toolbar: {
      background: '#FFF',
      height: '64px',
      paddingRight: '20px'
    }
  })
  
  render () {
    return (
      <div>
        <Toolbar style={styleToolbar}>
          {this.props.pageTitle}
          <Grid container direction='row' justify='space-around' align='center'>
            <Grid item xs={12} style={{ textAlign: 'right' }}>
              <Link prefetch href='/'>
                <a style={{ margin: '0px 20px 0px auto' }}>Index</a>
              </Link>
              <Link prefetch href='/login'>
                <a style={{ margin: '0px 20px 0px auto' }}>Log in</a>
              </Link>
            </Grid>
          </Grid>
        </Toolbar>
      </div>
    )
  }
}

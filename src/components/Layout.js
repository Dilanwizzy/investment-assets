import React from 'react'
import { makeStyles } from '@material-ui/styles'
import Header from './Header'
import Footer from './Footer'

const Layout = ({ Comp }) => {
  const classes = styles()

  return (
    <>
      <div className={classes.container}>
        <Comp />
      </div>
    </>
  )
}

export default Layout

const styles = makeStyles(theme => ({
  container: {
    paddingBottom: 30,
    paddingTop: 30,
    ...theme.mainContainer,
  },
}))

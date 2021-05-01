import React from 'react'
import { connect } from 'react-redux'
import Home from './Home.component'
import styles from './Home.styles'
import { getServerInfo } from '../../actions/serverInfoActions'

function HomeContainer({
  data, error, isFetching, onGetServerInfo
}) {
  const classes = styles()

  return (
    <Home
      data={data}
      error={error}
      isFetching={isFetching}
      onClick={onGetServerInfo}
      styles={classes}
    />
  )
}

const mapStateToProps = state => {
  const { data, error, isFetching } = state.serverInfo

  return {
    data,
    error,
    isFetching,
  }
}

const mapDispatchToProps = dispatch => ({
  onGetServerInfo: data => dispatch(getServerInfo(data)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeContainer)

import React from 'react'
import { version } from '../../../package.json'
import styles from './Footer.styles'

const Footer = () => {
  const classes = styles()

  return (
    <div className={classes.wrapper}>
      <div className={classes.container}>
        <span>
          {`Currently v.${version}. Released under the`}
          &nbsp;
        </span>
        <a
          href="https://github.com/jerodb/react-redux-node-webpack4/blob/master/LICENCE"
          rel="noopener noreferrer"
          target="_blank"
        >
          MIT License.
        </a>
      </div>
    </div>
  )
}

export default Footer

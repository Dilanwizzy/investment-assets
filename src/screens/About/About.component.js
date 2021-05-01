import React from 'react'
import styles from './About.styles'

const AboutComponent = () => {
  const classes = styles()

  return (
    <div className={classes.about}>
      <p>This is an SPA skeleton built using React, Redux, Webpack4, Material-UI and node w/express for the server.</p>
      <p>SSR includes material-ui styles and redux initial state.</p>
    </div>
  )
}

export default AboutComponent

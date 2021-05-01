// Service that scrolls the view to the top when changing route.
import React, { useEffect } from 'react'

function ScrollToTop({ location }) {
  useEffect(() => { window.scrollTo(0, 0) }, [location])
  return <></>
}

export default ScrollToTop

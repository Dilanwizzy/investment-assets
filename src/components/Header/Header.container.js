import React, { useState } from 'react'
import HeaderComponent from './Header.component'

const menuList = [
  {
    name: 'About',
    path: '/about'
  }
]

function HeaderContainer() {
  const [anchorEl, setAnchorEl] = useState(null)

  const open = Boolean(anchorEl)

  const handleMenu = event => setAnchorEl(event.currentTarget)

  const handleClose = () => setAnchorEl(null)

  return (
    <HeaderComponent
      anchorEl={anchorEl}
      handleClose={handleClose}
      handleMenu={handleMenu}
      menuList={menuList}
      open={open}
    />
  )
}

export default HeaderContainer

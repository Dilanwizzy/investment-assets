import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import { Link } from 'react-router-dom'
import styles from './Header.styles'

const HeaderComponent = ({
  anchorEl, handleClose, handleMenu, menuList, open
}) => {
  const classes = styles()

  return (
    <AppBar position="static">
      <Toolbar className={classes.container}>
        <Link
          className={classes.logoWrapper}
          to="/"
        >
          <div className={classes.logo} />
        </Link>
        <div className={classes.sectionDesktop}>
          <div className={classes.nav}>
            {
            menuList.map((el, index) => (
              <Link
                className={classes.navBtn}
                key={JSON.stringify(index)}
                to={el.path}
              >
                {el.name}
              </Link>
            ))
          }
          </div>
        </div>
        <div className={classes.grow} />
        <div className={classes.sectionMobile}>
          <IconButton
            aria-label="open menu"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            className={classes.menuButton}
            color="inherit"
            edge="end"
            onClick={handleMenu}
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'center',
            }}
            className={classes.menuWrapper}
            keepMounted
            onClose={handleClose}
            open={open}
            transformOrigin={{
              vertical: 'bottom',
              horizontal: 'center',
            }}
          >
            <div className={classes.popupMenu}>
              {
              menuList.map((el, index) => (
                <MenuItem className={classes.menuItem} key={JSON.stringify(index)}>
                  <Link
                    className={classes.navBtn}
                    to={el.path}
                  >
                    {el.name}
                  </Link>
                </MenuItem>
              ))
            }
            </div>
          </Menu>
        </div>
      </Toolbar>
    </AppBar>
  )
}

export default HeaderComponent

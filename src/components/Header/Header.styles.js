import { makeStyles } from '@material-ui/styles'
import { logo } from '../../res/images'

const styles = makeStyles(theme => ({
  container: {
    ...theme.mainContainer,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {

  },
  logo: {
    background: `url(${logo}) no-repeat right top`,
    backgroundSize: 'cover',
    height: 40,
    marginTop: 8,
    marginBottom: 8,
    width: 41,
    [theme.breakpoints.up('sm')]: {
      height: 60,
      width: 63,
    },
  },
  menuItem: {
    padding: 0,
  },
  menuWrapper: {
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  nav: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    paddingLeft: 32,
  },
  navBar: {
    display: 'flex',
    width: '100%',
  },
  navBtn: {
    color: '#444444',
    fontSize: '1.1em',
    fontWeight: '500',
    paddingBottom: 8,
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 8,
    textDecoration: 'none',
    width: '100%',
    '&:hover': {
      color: '#222222',
    },
    [theme.breakpoints.up('sm')]: {
      fontSize: '1.3em',
      paddingLeft: 8,
      paddingRight: 8,
      width: 'auto',
      '&:hover': {
        textDecoration: 'underline',
      },
    },
  },
  popupMenu: {
    backgorundColor: '#FFFFFF',
    minWidth: 120,
    '& li': {
      padding: 0,
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
}))

export default styles

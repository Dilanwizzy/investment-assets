import { makeStyles } from '@material-ui/styles'

const styles = makeStyles(theme => ({
  button: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    fontSize: '.9em',
    height: 40,
    marginBottom: 32,
    padding: '0 20px',
    [theme.breakpoints.up('sm')]: {
      fontSize: '1em',
      height: 48,
      marginBottom: 48,
      padding: '0 32px',
    },
  },
  error: {
    color: 'red',
  },
  home: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    marginTop: 48,
    minHeight: 300,
    textAlign: 'center',
    [theme.breakpoints.up('sm')]: {
      marginTop: 64,
    },
  },
  info: {
    listStyleType: 'none',
    margin: '12 0 0',
    padding: 0,
    textAlign: 'left',
  },
  spinner: {
    color: '#4498c8',
    width: 40,
    height: 40,
  },
  spinnerContainer: {
    display: 'flex',
    height: 52,
    padding: 6,
    width: 52,
  },
}))

export default styles

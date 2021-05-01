import { makeStyles } from '@material-ui/styles'

const styles = makeStyles(theme => ({
  container: {
    ...theme.mainContainer,
    alignItems: 'center',
    paddingTop: 16,
    paddingBottom: 16,
    '& a': {
      whiteSpace: 'nowrap',
    },
    flexDirection: 'column',
    [theme.breakpoints.up(360)]: {
      flexDirection: 'row',
    },
  },
  wrapper: {
    backgroundColor: '#FAFAFA',
    borderBottom: '1px solid #EAEAEA',
    borderTop: '1px solid #EAEAEA',
    width: '100%',
  },
}))

export default styles

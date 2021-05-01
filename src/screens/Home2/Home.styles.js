import { makeStyles } from "@material-ui/styles";

const styles = makeStyles((theme) => ({
  home: {
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    marginTop: 48,
    height: '100%',
    textAlign: "center",
    [theme.breakpoints.up("sm")]: {
      marginTop: 64,
    },
  },
  price: {
      fontSize: 40,
  }
}));

export default styles;

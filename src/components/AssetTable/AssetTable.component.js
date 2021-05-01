import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import styles from "./AssetTable.styles";

function createData(name, amount, totalInvested, price, value) {
  return { name, amount, totalInvested, price, value };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

function AssetTableComponent({assets}) {
  const classes = styles();

  const profitAndLoss = (assetValue, invested) => {
    const profitLoss = assetValue - invested;

    if(assetValue > invested) {
      return <TableCell align="right" style={{color: 'green'}}>£{profitLoss.toLocaleString(undefined, {maximumFractionDigits: 2})}</TableCell>
    } else {
      return <TableCell align="right" style={{color: 'red'}}>£{profitLoss.toLocaleString(undefined, {maximumFractionDigits: 2})}</TableCell>
    }
  }
  
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Asset</TableCell>
            <TableCell align="right">amount</TableCell>
            <TableCell align="right">Invested</TableCell>
            <TableCell align="right">price</TableCell>
            <TableCell align="right">profit/loss</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {assets.map((asset) => (
            <TableRow key={asset.id}>
              <TableCell component="th" scope="row">
                {asset.name}
              </TableCell>
              <TableCell align="right">{asset.amount.toLocaleString()}</TableCell>
              <TableCell align="right">£{asset.totalInvested.toLocaleString()}</TableCell>
              <TableCell align="right">£{asset.price}</TableCell>
              {profitAndLoss(asset.value, asset.totalInvested)}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default AssetTableComponent;

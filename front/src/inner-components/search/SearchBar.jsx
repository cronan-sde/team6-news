import React from "react";

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: 500,
      margin: 'auto',
      marginLeft: 100,
      marginRight: 10,
    },
  },
}));

const SearchBar = (props) => {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField
        id="outlined-basic" 
        label="Search News" 
        variant="outlined"
        type="text"
        name="searchBar"
        onChange={(event) => {props.onChangeSearch(event)}}
      />
      <Button variant="contained" style={{backgroundColor: "#66799b", color: "#e5e3e3", marginRight: 100, marginTop: 9}} onClick={()=> props.onSubmitSearch()} type="button">
        Submit
      </Button>
    </form>
  );
};

export default SearchBar;

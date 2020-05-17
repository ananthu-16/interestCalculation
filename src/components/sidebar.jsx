import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Typography from '@material-ui/core/Typography';
import { useStyles } from '../styles';

//display recent inputs

function SideBar(props){

  const classes = useStyles();

  function createEntry(entry){
    return (
      <div  >
        <List className={classes.recentInput}>
          <ListItem>
            Amount : {entry.amount}
          </ListItem>
          <ListItem>
            Duration : {entry.duration}
          </ListItem>
        </List>
        <button
          className={classes.btn}
          onClick={props.onClicked}
          id={entry.amount}
          name={entry.duration}
          >Calculate</button>
      </div>
    )
  }

  return (
    <div>
      <div>
        <Typography
           variant="h6"
           className={classes.heading}
        >Recent Inputs</Typography>
      <Typography
        variant="body2"
      ><em>Select input and click submit to get details</em></Typography>
      </div>
        {props.data ? props.data.map(createEntry) : null}
    </div>
  );
}

export default SideBar;

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';


const useStyles = makeStyles({
  root: {
    width: 300,
  },
});

function DiscreteSlider(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Slider
        defaultValue={props.defaultValue}
        aria-labelledby="discrete-slider"
        valueLabelDisplay="auto"
        step={props.steps}
        marks={false}
        min={props.minValue}
        max={props.maxValue}
        onChange={props.onChanged}
        className={props.className}
      />
    </div>
  );

}
export default DiscreteSlider;

import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
  heading : {
    margin: '1rem',
    padding: '1rem',
    fontFamily: 'serif',
    fontWeight: 'bold',
  },
  slider: {
    margin: '1rem'
  },
  input: {
    margin: '1rem',
    display: 'block',
    width: '20%',
    "& input::-webkit-clear-button, & input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button": {
            display: "none"
     },
  },
  btn: {
    margin: '1rem',
    display: 'block',
  },
  p: {
    fontWeight: 'bold'
  },
  recentInput: {
    '&:hover': {
      background: "#edf2eb",
   }
  }
});

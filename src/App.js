import React, { useState , useEffect } from 'react';
import InputSlider from './components/slider';
import SideBar from './components/sidebar';
import Typography from '@material-ui/core/Typography';
import Input from '@material-ui/core/Input';
import Grid from '@material-ui/core/Grid';
import { useStyles } from './styles';
import Button from '@material-ui/core/Button';
import axios from 'axios';

var inputs = [];
var storedInputs = [];
function App(){

  const [isSubmitted,setSubmit] = useState(false);
  const [totalAmount,setTotalAmount] = useState(500);
  const [amount,setAmount] = useState(500);
  const [value,setValue] = useState(0);
  const [duration,setDuration] = useState(6);
  const [interestRate,setInterestRate] = useState(0);
  const [monthlyPayment,setMonthlyPayment] = useState(0);

  const classes = useStyles();

  function handleValueChange(e,v){
    setValue(v);
    setTotalAmount(amount + value);
  }

  function handleAmountChange(e,v){
    setAmount(v);
    setTotalAmount(amount + value);
  }

  function handleDurationChange(e,v){
    setDuration(v);
  }

  function handleRecentInput(e){
    setTotalAmount(e.target.id);
    setDuration(e.target.name);
  }
  function handleClick(){
    const inputObject = {
      'amount' : totalAmount,
      'duration' : duration
    };
    storedInputs = JSON.parse(localStorage.getItem("input"));
    if(storedInputs){
      inputs=storedInputs;
    }
    inputs.push(inputObject);
    localStorage.setItem("input",JSON.stringify(inputs));
    storedInputs = JSON.parse(localStorage.getItem("input"));
    setSubmit(function(prev){
      return !prev
    })
  }

  const getData = async () => {
    const data = await fetchData();
    setInterestRate(data.interestRate);
    setMonthlyPayment(data.monthlyPayment);
  };

  useEffect(function(){
    storedInputs = JSON.parse(localStorage.getItem("input"))
  },[]);

  useEffect(function(){
    getData();
  },[isSubmitted]);

  const url = "https://ftl-frontend-test.herokuapp.com/interest?amount="+totalAmount+"&numMonths="+duration;

  const fetchData = async () => {
    try {
        const { data } = await axios.get(url);
        const modifiedData = {
          interestRate: data.interestRate,
          monthlyPayment: data.monthlyPayment.amount
        }
        return modifiedData;
    } catch (e) {

    }
  }

  return (
    <Grid  container spacing={3}>
    <Grid item xs={9}>
    <div>
      <Typography
        className={classes.heading}
        id="discrete-slider"
        gutterBottom
        variant="h6">
        Select your loan amount
      </Typography>
      <InputSlider
      amount={amount}
      duration={duration}
      defaultValue={500}
      minValue={500}
      maxValue={4900}
      steps={100}
      onChanged={handleAmountChange}
      className={classes.slider}
      />
      <InputSlider
      amount={amount}
      duration={duration}
      defaultValue={0}
      minValue={0}
      maxValue={100}
      steps={1}
      onChanged={handleValueChange}
      className={classes.slider}
      />
      <Input value={totalAmount} disabled={true} className={classes.input}/>
      <Typography
        className={classes.heading}
        id="discrete-slider"
        gutterBottom
        variant="h6">
        Select your loan duration
      </Typography>
      <InputSlider
       amount={amount}
       duration={duration}
       defaultValue={6}
       minValue={6}
       maxValue={24}
       steps={1}
       onChanged={handleDurationChange}
       className={classes.slider} />
      <Input value={duration} disabled={true} className={classes.input}/>
      <Button
      className={classes.btn}
      variant="contained"
      color="primary"
      onClick={handleClick}>
        submit
      </Button>
      <div>
      <p>Interest rate : {interestRate}</p>
      <p>Monthly Payment : {monthlyPayment}</p>
      </div>
    </div>
    </Grid>
    <Grid item xs={3}>
    <SideBar
      data={storedInputs}
      onClicked={handleRecentInput}
    />
    </Grid>
    </Grid>
  );
}

export default App;

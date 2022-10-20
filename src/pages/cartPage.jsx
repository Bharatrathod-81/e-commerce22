import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { useEffect } from 'react';
import axios from 'axios';
import { useDataContext } from '../context';


const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});


export default function SimpleCard() {

  const { contextData: { user }, setContextData } = useDataContext();

  const clickHandler = async (e) => {
    const newData = user?.email ? user : JSON.parse(localStorage.getItem("user"));
    if (newData?.email) {
      if (newData?.cart.some(a => a.id === e.id)) {
        const newArr = newData?.cart.map(a => a.id === e.id ? { ...a, Qty: a.Qty + 1 } : a);
        const { data } = await axios.put(`https://api-generator.retool.com/8bKwAR/data/${newData.id}`, {
          ...newData, cart: newArr
        });
        localStorage.removeItem("user")
        localStorage.setItem("user", JSON.stringify(data));
        setContextData({ type: "GET_USER", payload: data })
      } else {
        const newArr = [...newData.cart, e];
        const { data } = await axios.put(`https://api-generator.retool.com/8bKwAR/data/${newData.id}`, {
          ...newData, cart: newArr
        });
        localStorage.removeItem("user")
        localStorage.setItem("user", JSON.stringify(data));
        setContextData({ type: "GET_USER", payload: data })
      }
    }
  }

  const addFunc = async (e) => {
    const newData = user?.email ? user : JSON.parse(localStorage.getItem("user"));
    if (newData?.email) {
      if (newData?.cart.some(a => a.id === e.id)) {
        const newArr = newData?.cart.map(a => a.id === e.id ? { ...a, Qty: a.Qty + 1 } : a);
        const { data } = await axios.put(`https://api-generator.retool.com/8bKwAR/data/${newData.id}`, {
          ...newData, cart: newArr
        });
        localStorage.removeItem("user")
        localStorage.setItem("user", JSON.stringify(data));
        setContextData({ type: "GET_USER", payload: data })
      }
    }
  }

  const subFunc = async (e) => {
    const newData = user?.email ? user : JSON.parse(localStorage.getItem("user"));
    if (e.Qty > 1) {
      if (newData?.cart?.some(a => a.id === e.id)) {
        const newArr = newData?.cart.map(a => a.id === e.id ? { ...a, Qty: a.Qty - 1 } : a);
        const { data } = await axios.put(`https://api-generator.retool.com/8bKwAR/data/${newData.id}`, {
          ...newData, cart: newArr
        });
        localStorage.removeItem("user")
        localStorage.setItem("user", JSON.stringify(data));
        setContextData({ type: "GET_USER", payload: data })
      }
    }
  }

  const deleteFunc = async (e) => {
    const newData = user?.email ? user : JSON.parse(localStorage.getItem("user"));
    if (newData?.email) {
      if (newData?.cart.some(a => a.id === e.id)) {
        const newArr = newData?.cart.filter(a => a.id !== e.id );
        const { data } = await axios.put(`https://api-generator.retool.com/8bKwAR/data/${newData.id}`, {
          ...newData, cart: newArr
        });
        localStorage.removeItem("user")
        localStorage.setItem("user", JSON.stringify(data));
        setContextData({ type: "GET_USER", payload: data })
      }
    }
  }

  const UserData = user?.email ? user : JSON.parse(localStorage.getItem("user"));

  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root}>
      {UserData?.cart?.map(e =>
        <Box display="flex" p={1} justifyContent="center" border={1} m={1}>
          <CardContent>
            <Box display="flex" p={1} justifyContent="center">

              <Typography variant="h5" component="h2">
                {e.model}
              </Typography>

            </Box>
          </CardContent>
          <CardActions>
            <Button
              onClick={() => addFunc(e)}
              size="small">+</Button>
            {e.Qty}
            <Button
              onClick={() => subFunc(e)}
              size="small">--</Button>
          </CardActions><CardActions>
            <Button
              onClick={() => deleteFunc(e)}
              size="small">Delete</Button>
          </CardActions>
        </Box>
      )}
    </Card>
  );
}

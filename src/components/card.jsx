import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { useDataContext } from '../context';
import axios from 'axios';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
});

export const ImgMediaCard = ({ data }) => {
    const classes = useStyles();

    const { contextData: { user }, setContextData } = useDataContext();

    const clickHandler = async (e) => {
        const newData = user.email ? user : JSON.parse(localStorage.getItem("user"));
        if (newData.email) {
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
    const UserData = user.email ? user : JSON.parse(localStorage.getItem("user"));

    return (
        <div>
            <Card className={classes.root} style={{ width: "15rem", height: "100%", margin: "5px" }}>
                <CardActionArea>
                    <img src={data.image} alt="img" style={{ width: "90%", height: "12rem" }} />
                    <CardContent>
                        <Typography gutterBottom variant="h6" component="h2">
                            {data.model.length < 19 ? data.model : `${data.model.slice(0, 14)}...`}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            Rs {data.price}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button
                        onClick={() => clickHandler(data)}
                        size="small" color="primary">
                        Add To Cart
                    </Button>
                </CardActions>
            </Card>
        </div>
    );
}

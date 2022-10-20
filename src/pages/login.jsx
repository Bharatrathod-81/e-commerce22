import React, { useEffect, useState } from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import { TextField, Typography } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { LoginValidChecker } from '../components/formValidation';
import { useDataContext } from '../context';



export default function LoginPage() {

    const { setContextData } = useDataContext();

    const navigate = useNavigate();

    const [editData, setEditData] = useState({
        email: "",
        password: ""
    });
    const [validation, setValidation] = useState({});
    const [errorMsge, setErrorMsge] = useState(false);

    const submitHandler = async () => {
        const error = LoginValidChecker(editData);
        setValidation(error);
        if (!error.isError) {
            try {
                const { data } = await axios.get(`https://api-generator.retool.com/8bKwAR/data?email=${editData.email}&password=${editData.password}`)
                if (data[0]) {
                    localStorage.removeItem("user");
                    localStorage.setItem("user", JSON.stringify(data[0]));
                    setContextData({ type: "GET_USER", payload: data[0] })
                    setErrorMsge(false)
                    console.log(data);
                    navigate('/')
                } else {
                    setErrorMsge(true)
                }

            } catch (err) {
                console.log(err);
            }
        }
    };


    return (
        <Box display="flex" alignItems="center" justifyContent="center">
            <Card
                style={{ border: "2px solid", width: "17rem" }}
            >
                <Typography variant="h6" noWrap style={{ textAlign: "center" }}>
                    LOGIN
                </Typography>
                <CardContent>

                    <form noValidate autoComplete="off">
                        <TextField
                            style={{ marginBottom: "0.5rem" }}
                            onChange={e => setEditData({ ...editData, email: e.target.value })}
                            id="outlined-basic"
                            label="Email" value={editData.email} variant="outlined" required />

                        {validation.email && <p style={{ color: "red" }}>{validation.email}</p>}

                        <TextField
                            style={{ marginBottom: "0.5rem" }}
                            onChange={e => setEditData({ ...editData, password: e.target.value })}
                            id="outlined-basic"
                            label="Password" value={editData.password} variant="outlined" required />

                        {validation.password && <p style={{ color: "red" }}>{validation.password}</p>}
                        {errorMsge && <p style={{ color: "red" }} >password or email is incorrect</p>}
                    </form>
                </CardContent>
                <CardActions>
                    <Button
                        onClick={submitHandler}
                        size="small">LOGIN</Button>
                    <Button
                        onClick={() => {
                            //   setOpenForm(false)
                            //   setEditData({})
                        }}
                        size="small"><Link to="/register" style={{ color: "black" }}>Register</Link></Button>
                </CardActions>
            </Card>
        </Box>
    );
}

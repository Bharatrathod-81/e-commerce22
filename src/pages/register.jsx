import React, { useState } from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import { TextField, Typography } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import { SignupValidChecker } from '../components/formValidation';
import axios from 'axios';
import { useDataContext } from '../context';
import { useNavigate } from 'react-router-dom';




export default function RegisterPage() {

    const {setContextData} = useDataContext();
    const navigate = useNavigate();

    const [editData, setEditData] = useState({
        name: "",
        password: "",
        confirmPassword: "",
        email: "",
    });

    const [error, setError] = useState({})

    const SubmitHandler = async () => {
        const error = SignupValidChecker(editData);
        setError(error);
        if (!error.isError) {
            try {
                const { data } = await axios.post('https://api-generator.retool.com/8bKwAR/data',
                    {
                        cart: [],
                        email: editData.email,
                        fullName: editData.name,
                        password: editData.password
                    });
                localStorage.removeItem("user");
                localStorage.setItem("user", JSON.stringify(data[0]));
                setContextData({ type: "GET_USER", payload: data[0] });
                navigate('/')
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

                    <form noValidate autoComplete="off" >
                        <TextField
                            style={{ marginBottom: "0.5rem" }}
                            onChange={e => setEditData({ ...editData, name: e.target.value })}
                            id="outlined-basic"
                            name='userName'
                            label="Name" value={editData.name} variant="outlined" required />
                        {error.name && <p style={{ color: "red" }}>{error.name}</p>}

                        <TextField
                            style={{ marginBottom: "0.5rem" }}
                            onChange={e => setEditData({ ...editData, email: e.target.value })}
                            id="outlined-basic"
                            name="email"
                            label="Email" value={editData.email} variant="outlined" required />
                        {error.email && <p style={{ color: "red" }}>{error.email}</p>}

                        <TextField
                            style={{ marginBottom: "0.5rem" }}
                            onChange={e => setEditData({ ...editData, password: e.target.value })}
                            id="outlined-basic"
                            name='password'
                            label="Password" value={editData.password} variant="outlined" required />
                        {error.password && <p style={{ color: "red" }}>{error.password}</p>}

                        <TextField
                            style={{ marginBottom: "0.5rem" }}
                            onChange={e => setEditData({ ...editData, confirmPassword: e.target.value })}
                            id="outlined-basic"
                            name='confirmPassword'
                            label="Confirm Password" value={editData.confirmPassword} variant="outlined" required />
                        {error.confirmPassword && <p style={{ color: "red" }}>{error.confirmPassword}</p>}

                    </form>

                </CardContent>
                <CardActions>
                    <Button
                        onClick={SubmitHandler}
                        size="small">Register</Button>
                </CardActions>
            </Card>
        </Box>
    );
}
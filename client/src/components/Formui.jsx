import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { TextField, Button } from '@material-ui/core';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        textAlign:"center",
        flexWrap: 'wrap',
        '& > *': {
            margin: theme.spacing(1),
            width: theme.spacing(110),
        },
    },
}));


export default function SimplePaper() {
    const classes = useStyles();
    const [name, setname] = useState("")
    const [data, setdata] = useState([])
    const [email, setemail] = useState("")
    const [phone, setphone] = useState("")
    const [pass, setpass] = useState("")
    const [conpass, setconpass] = useState("")
    const url = "http://localhost:5000/add"
    var value = {}
    useEffect(() => {
        axios.get("http://localhost:5000")
        .then((item) => (
            setdata(item.data)
        ))
    })
    var sendData = (data) => {
        axios.post(url, data)
            .then(res => alert('Data send successfully...!!'))
            .catch(err => console.log(err))
    }
    // console.log(data);
    const validation = (e, name, email, phone,conpass, pass) => {
        e.preventDefault()
        var emaildata=[]
        data.map(item=>{
            emaildata.push(item.email)
        }   
        )
        if (name === "" || email === "" || phone === "" || pass === "" || conpass === "") {
            alert("fields can not Empty...!!")
        }
        else if (!(/^[a-zA-Z0-9]+@[a-zA-Z0-9.-]+.[a-zA-Z]$/).test(email)) {
            alert("email is not valid...!!")
        }
        else if(emaildata.includes(email)){
            alert("email is already exist..!!")
        }
        else if (!(/[0-9]{10}/).test(phone)) {
            alert(" mobile number is invalid")
        }
        else if(pass !== conpass){
            alert("password Does't Match try again..")
        }
        else {
            value = { "name": name, "email": email, "phone": phone, "pass": pass }
            sendData(value)
        }
    }
    return (
        <div className={classes.root}>
            <Paper elevation={3} className="p-4">
                <h3 className="text-center my-4">
                    Registration Form
                </h3>
                <TextField margin="normal" onChange={(e) => (setname(e.target.value))} className="w-75 my-3" required fullWidth id="username" label="User Name" name="username" autoComplete="name" autoFocus />
                <TextField margin="normal" onChange={(e) => (setemail(e.target.value))} className="w-75 my-3" required fullWidth id="email" label="Email Address" name="email" autoComplete="email" autoFocus />
                <TextField margin="normal" onChange={(e) => (setphone(e.target.value))} className="w-75 my-3" required fullWidth id="number" label="Mobile No." name="phone" autoComplete="number" autoFocus />
                <TextField margin="normal" onChange={(e) => (setpass(e.target.value))} className="w-75 my-3" required fullWidth name="password" label="Password" type="password" id="password" autoComplete="current-password" />
                <TextField margin="normal" onChange={(e) => (setconpass(e.target.value))} className="w-75 my-3" required fullWidth name="confirm_password" label="Confirm Password" type="password" id="confirm_password" autoComplete="current-password" />
                <div className="text-center my-4">
                    {
                        name === "" || email === "" || phone === "" || pass === "" || conpass === ""
                            ?
                            <Button
                            className="w-75"
                                onClick={(e) => validation(e, name, email, phone,conpass, pass)}
                                type="submit"
                                fullWidth
                                color="primary"
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                                disabled
                            >
                                Sign In
                            </Button>
                            :
                            <Button
                            className="w-75"
                                onClick={(e) => validation(e, name, email, phone,conpass, pass)}
                                type="submit"
                                fullWidth
                                color="primary"
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                            >
                                Sign In
                            </Button>
                    }
                </div>
            </Paper >
        </div >
    );
}
import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { TextField, Button } from '@material-ui/core';
import axios from 'axios';
import { withRouter } from 'react-router';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        textAlign: "center",
        flexWrap: 'wrap',
        '& > *': {
            margin: theme.spacing(1),
            width: theme.spacing(110),
        },
    },
}));


function UpdatePage(props) {
    var id = props.match.params.id;
    const url = `http://localhost:5000/user/update/${id}`
    const [data, setdata] = useState([])
    var value = {}
    useEffect(() => {
        axios.get("http://localhost:5000")
            .then((item) => (
                setdata(item.data)
            ))
    })
    var user=data[id];
    
    const classes = useStyles();
    // const [name, setname] = useState("")
    // const [email, setemail] = useState("")
    // const [phone, setphone] = useState("")
    // const [pass, setpass] = useState("")
    // const [conpass, setconpass] = useState("")
    var sendData = (data) => {
        axios.put(url, data)
            .then(res => {
                alert('Data send successfully...!!')
        })
            .catch(err => console.log(err))
    }
    // console.log(data);
    const validation = (e) => {
        e.preventDefault()
        var emaildata = []
        data.map(item => {
            emaildata.push(item.email)
        }
        )
        var name = document.getElementById('name').value
        var email = document.getElementById('email').value
        var phone = document.getElementById('phone').value
        var pass = document.getElementById('pass').value
        if (!(/^[a-zA-Z0-9]+@[a-zA-Z0-9.-]+.[a-zA-Z]$/).test(email)) {
            alert("email is not valid...!!")
        }
        else if (!(/[0-9]{10}/).test(phone)) {
            alert(" mobile number is invalid")
        }
        else {
            value = { "name": name, "email": email, "phone": phone, "pass": pass }
            sendData(value)
            window.location = "/users"
        }
    }
    return (
        <div className={classes.root}>
            <Paper elevation={3} className="p-4">
                <h3 className="text-center my-4">
                    User Update Form
                </h3>
                {
                    user === undefined ?
                        null :
                        <>
                            <TextField margin="normal" defaultValue={user.name} className="w-75 my-3" required fullWidth id="name" label="Username" name="username" autoComplete="name" autoFocus />
                            <TextField margin="normal" value={user.email} className="w-75 my-3" required fullWidth id="email" label="Email Address" name="email" autoComplete="email" autoFocus />
                            <TextField margin="normal" defaultValue={user.phone} className="w-75 my-3" required fullWidth id="phone" label="Mobile No." name="phone" autoComplete="number" autoFocus />
                            <TextField margin="normal" defaultValue={user.pass} className="w-75 my-3" required fullWidth name="password" label="Password" type="password" id="pass" autoComplete="current-password" />

                            <div className="text-center my-4">

                                <Button
                                    className="w-75"
                                    onClick={(e) => validation(e)}
                                    type="submit"
                                    fullWidth
                                    color="primary"
                                    variant="contained"
                                    sx={{ mt: 3, mb: 2 }}
                                >
                                    Sign In
                                </Button>
                            </div>
                        </>
                }
            </Paper >
        </div >
    );
}

export default withRouter(UpdatePage)
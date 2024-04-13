import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button, Typography } from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Signup = () => {
  const [users, setUsers] = useState({});
  const navigate = useNavigate();

  const inputHandler = (e) => {
    setUsers({ ...users, [e.target.name]: e.target.value });
  };

  const addHandler = () => {
    console.log("clicked", users);
    axios
      .post("http://localhost:3002/admin", users)
      .then((res) => {
        console.log(res);
        alert(res.data.message);
        console.log(res.data.token);
        sessionStorage.setItem("userToken", res.data.token);
        navigate("/viewemployees");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="box"
      style={{
        background: '#b10e3f',
    background: '#b99fa4', 
    background: '-webkit-linear-gradient(to right, #240b36, #58ca5e)',
    background: 'linear-gradient(to right, #240b36, #5546a8)',
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": {
            m: 1,
            width: "35ch",
            borderRadius: "10px",
            "& input": {
              color: "white",
            },
            "& input::placeholder": {
              color: "white",
            },
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: "white",
            },
          },
          bgcolor: "rgba(255, 255, 255, 0.2)",
          p: 4,
          borderRadius: "20px",
          textAlign: "center",
          height: "500px",
          width: "380px",
        }}
        noValidate
        autoComplete="off"
      >
        <Typography
          variant="h4"
          style={{ color: "white", marginBottom: "20px" }}
        >
           SignUp
        </Typography>
        <div style={{ marginBottom: "20px" }}>
          <TextField
            fullWidth
            label="Name"
            name="Username"
            onChange={inputHandler}
          />
        </div>
        <div style={{ marginBottom: "20px" }}>
          <TextField
            fullWidth
            label="Email"
            name=" Email"
            onChange={inputHandler}
          />
        </div>
        
        <div style={{ marginBottom: "20px" }}>
          <TextField
            fullWidth
            label="Password"
            name="Password"
            type="password"
            onChange={inputHandler}
          />
        </div>
        <Button variant="contained" color="secondary" onClick={addHandler}>
          Signup
        </Button>
      </Box>
    </div>
  );
};

export default Signup;

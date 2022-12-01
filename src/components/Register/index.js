import React, { useState, useEffect } from "react";
import UndrawImage from "../../assets/undraw-in-thought-re-qyxl-1-2@2x.png";
import { whiteLogo } from "../utility/constants";
import { TextField, Typography, Button, Grid } from "@mui/material";
import Stack from "@mui/material/Stack";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import { useLocation } from "react-router-dom";
import arrowUp from "../../assets/arrow-up.svg";
import axios from "axios";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Register = () => {
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  function addUser() {
    console.log(name);
    console.log(email);
    console.log(password);
    axios
      .post("http://localhost:8000/users/register", {
        name: name,
        username: email,
        password: password,
      })
      .then(function (response) {
        console.log(response);

        window.location.href = "/";
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  const search = useLocation().search;

  return (
    <Grid
      container
      direction="row"
      style={{
        width: "100%",
        height: "100%",
        background: "#ffffff",
      }}
    >
      <Grid item md={1.5} lg={1.5} xl={1.5} />
      <Grid
        item
        container
        direction="column"
        xs={12}
        sm={12}
        md={4.5}
        lg={4.5}
        xl={4.5}
      >
        <Grid
          item
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <img
            src={whiteLogo}
            style={{
              width: "112.58px",
              height: "112.93px",
              cursor: "pointer",
              marginTop: "14.27px",
            }}
          />
          <h1
            style={{
              display: "inline-block",
              verticalAlign: "middle",
              fontSize: "50px",
            }}
          >
            Loggle
          </h1>
        </Grid>
        <Grid item>
          <span
            style={{
              fontFamily: "Work Sans",
              fontStyle: "normal",
              fontWeight: "normal",
              fontSize: "18px",
              color: "#000000",
            }}
          >
            Real Time Log Analytics
          </span>
        </Grid>
        <Grid item>
          <Typography
            style={{
              width: "116px",
              height: "45px",
              fontFamily: "Work Sans",
              fontStyle: "normal",
              fontWeight: "bold",
              fontSize: "30px",
              color: "#000000",
              marginTop: "25px",
            }}
          >
            Sign Up
          </Typography>
        </Grid>
        <form onSubmit={handleSubmit}>
          <Grid item>
            <TextField
              required
              type="name"
              placeholder="Name"
              // disabled={validInviteLink ? true : false}
              value={name}
              style={{
                width: "395px",
                height: "67px",
                boxSizing: "border-box",
                borderRadius: "5px",
                marginTop: "30px",
              }}
              // error={error != "" ? true : false}
              onChange={(e) => setName(e.target.value)}
            />
          </Grid>
          <Grid item>
            <TextField
              required
              type="email"
              placeholder="Email Address"
              // disabled={validInviteLink ? true : false}
              value={email}
              style={{
                width: "395px",
                height: "67px",
                boxSizing: "border-box",
                borderRadius: "5px",
                marginTop: "5px",
              }}
              // error={error != "" ? true : false}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Grid>
          <Grid item>
            <TextField
              required
              type="password"
              placeholder="Password"
              style={{
                width: "395px",
                height: "67px",
                boxSizing: "border-box",
                borderRadius: "5px",
                marginTop: "5px",
              }}
              onChange={(e) => setPassword(e.target.value)}
              // error={error != "" ? true : false}
            />
          </Grid>
          <Grid item>
            <Button
              type="submit"
              style={{
                width: "395px",
                height: "68px",
                cursor: "pointer",
                background: "#2183DF",
                borderRadius: "5px",
                color: "#ffffff",
                textTransform: "none",
                fontFamily: "Work Sans",
                fontStyle: "normal",
                fontWeight: "bold",
                fontSize: "18px",
                marginTop: "12px",
              }}
              onClick={(e) => addUser(e.target)}
            >
              <img
                src={arrowUp}
                style={{
                  position: "static",
                  width: "24px",
                  height: "24px",
                  flex: "none",
                  order: 0,
                  flexGrow: 0,
                  margin: "0px 8px",
                }}
              />
              Register
            </Button>
          </Grid>
        </form>
        <Grid
          item
          container
          direction="row"
          style={{
            marginTop: "25px",
            fontFamily: "Work Sans",
            fontStyle: "normal",
            fontWeight: "normal",
            fontSize: "18px",
          }}
        >
          <Grid
            item
            style={{
              color: "#000000",
              opacity: 0.5,
            }}
          >
            <div>Already have an account?</div>
          </Grid>
          <Grid item>
            <a
              style={{
                cursor: "pointer",
                color: "#3086dd",
                fontWeight: "bold",
                marginLeft: "10px",
              }}
              onClick={() => {
                window.location.href = "/";
              }}
            >
              Sign In Now
            </a>
          </Grid>
        </Grid>
        <Stack sx={{ width: "100%" }}></Stack>
      </Grid>
      <Grid
        item
        sx={{
          display: {
            xs: "none",
            sm: "none",
            md: "block",
            lg: "block",
            xl: "block",
          },
        }}
        md={6}
        lg={6}
        xl={6}
      >
        <img
          src={UndrawImage}
          style={{
            marginTop: "30px",
          }}
        />
      </Grid>
    </Grid>
  );
};

export default Register;

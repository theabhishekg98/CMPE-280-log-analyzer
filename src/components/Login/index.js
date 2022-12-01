import React, { useState } from "react";
import UndrawImage from "../../assets/undraw-in-thought-re-qyxl-1-2@2x.png";
import arrowUp from "../../assets/arrow-up.svg";
import { whiteLogo } from "../utility/constants";
import { TextField, Typography, Button, Grid } from "@mui/material";
import Stack from "@mui/material/Stack";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Login = ({ ...props }) => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [open, setOpen] = useState(false);
  // const currentUser = useAuth().currentUser;

  // useEffect( ()=>{
  //   if(currentUser && !props?.location?.state?.errorMessage) {window.location.href = "/dashboard";}
  // },[]);

  // const { login } = useAuth();

  const errorMessage = props?.location?.state?.errorMessage;

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // login(email, password)
    //   .then(() => {
    //     if (props?.location?.state?.from.pathname) {
    //       window.location.href = props.location.state.from.pathname;
    //       if(props?.location?.state?.errorMessage) props.location.state.errorMessage = undefined;
    //     } else {
    //       window.location.href = "/dashboard";
    //     }
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //     setOpen(true);
    //   });
  };

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
              fontFamily: "Time Sans",
              fontStyle: "normal",
              fontWeight: "normal",
              fontSize: "18px",
              color: "#000000",
              alignItems: "center",
            }}
          >
            Real Time Log Analytics
          </span>
        </Grid>
        <Snackbar
          open={errorMessage}
          autoHideDuration={6000}
          onClose={handleClose}
        >
          <Alert severity="error" sx={{ width: "100%" }}>
            {errorMessage}
          </Alert>
        </Snackbar>
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
            Sign In
          </Typography>
        </Grid>
        <form onSubmit={handleSubmit}>
          <Grid item>
            <TextField
              required
              type="email"
              autoComplete="email"
              placeholder="Email Address"
              value={email}
              style={{
                width: "395px",
                height: "67px",
                boxSizing: "border-box",
                borderRadius: "5px",
                marginTop: "30px",
              }}
              error={open ? true : false}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Grid>
          <Grid item>
            <TextField
              required
              type="password"
              autoComplete="current-password"
              placeholder="Password"
              style={{
                width: "395px",
                height: "67px",
                boxSizing: "border-box",
                borderRadius: "5px",
                marginTop: "5px",
              }}
              onChange={(e) => setPassword(e.target.value)}
              error={open ? true : false}
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
              Sign In
            </Button>
          </Grid>
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
              <div>Don't have an account?</div>
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
                  window.location.href = "/register";
                }}
              >
                Sign Up Now
              </a>
            </Grid>
          </Grid>
        </form>
        <Stack sx={{ width: "100%" }}>
          <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
            <Alert
              onClose={handleClose}
              severity="error"
              sx={{ width: "100%" }}
            >
              Invalid Username/Password
            </Alert>
          </Snackbar>
        </Stack>
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

export default Login;

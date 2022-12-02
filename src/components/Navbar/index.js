import { whiteLogo, blackLogo } from "../utility/constants";
import avatar from "../../assets/avatar4.svg";
import { Typography, Grid } from "@mui/material";
import ProfileIconData from "./ProfileIconData";
import { useEffect, useState } from "react";
import placeholder from "../../assets/placeholder.png";

const Navbar = ({ isBlack }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [currentUser, setCurrentUser] = useState("Praddy");

  const open = Boolean(anchorEl);
  const backgroundColor = isBlack ? "#171717" : "#FFFFFF";
  const textColor = isBlack ? "#FFFFFF" : "#171717";
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("userData"));
    console.log(userData);
    setCurrentUser(userData);
  }, []);

  return (
    <Grid
      item
      container
      direction="row"
      style={{
        position: "absolute",
        background: backgroundColor,
        height: "54px",
        boxShadow: "inset 0px -1px 0px rgba(0, 0, 0, 0.12)",
      }}
    >
      <Grid item md={1.3} />
      <Grid item container md={2} direction="row">
        <Grid item>
          <img
            src={isBlack ? blackLogo : whiteLogo}
            style={{
              height: "50px",
              cursor: "pointer",
            }}
            onClick={() => {
              window.location.href = "/";
            }}
          />
        </Grid>
        <Grid
          item
          style={{
            margin: "5px",
            fontSize: "30px",
            fontFamily: "Roboto",
          }}
        >
          Loggle
        </Grid>
      </Grid>
      <Grid item md={6.3} />
      <Grid
        item
        container
        direction="row"
        md={2}
        style={{
          alignItems: "right",
          marginTop: "13px",
        }}
      >
        <Grid
          item
          style={{
            alignItems: "right",
          }}
        >
          <Typography
            style={{
              // width: "95px",
              height: "24px",
              fontFamily: "Work Sans",
              fontStyle: "normal",
              fontWeight: 500,
              fontSize: "16px",
              lineHeight: "24px",
              color: textColor,
              paddingRight: "10px",
            }}
          >
            {"Hello " + currentUser.name + "!"}
          </Typography>
        </Grid>
        <Grid
          item
          style={{
            alignItems: "right",
          }}
        >
          <img
            src={placeholder}
            style={{
              alignItems: "right",
              width: "24px",
              height: "24px",
              cursor: "pointer",
            }}
            onClick={handleClick}
          />
        </Grid>
      </Grid>
      <Grid item md={1.3} />
      {open ? (
        <ProfileIconData
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          onClick={handleClose}
        />
      ) : null}
    </Grid>
  );
};

export default Navbar;

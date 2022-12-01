import React from "react";
import { Menu, MenuItem, Typography, Divider } from "@mui/material";
// import { ListItemIcon } from "@material-ui/core";
import { Link } from "react-router-dom";
// import { useAuth } from "../contexts/AuthContext";
import logoutIcon from "../../assets/log-out.svg";
import settingsIcon from "../../assets/settings.svg";
import helpIcon from "../../assets/help-circle.svg";

const ProfileIconData = (props) => {
  // const { logout } = useAuth();

  // const handleLogout = (e) => {
  //   e.preventDefault();
  //   logout();
  //   localStorage.clear();
  //   window.location.href = "/login";
  // };

  return (
    <React.Fragment>
      <Menu
        anchorEl={props.anchorEl}
        open={props.open}
        onClose={props.onClose}
        onClick={props.onClick}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
            width: "163px",
            height: "128.5px",
            background: "#FFFFFF",
            boxShadow:
              "0px 8px 10px rgba(0, 0, 0, 0.06), 0px 3px 14px rgba(0, 0, 0, 0.04), 0px 5px 5px rgba(0, 0, 0, 0.08)",
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <Link to="/#" style={{ textDecoration: "none" }}>
          <MenuItem
            style={{
              fontFamily: "Work Sans",
              fontStyle: "normal",
              fontWeight: 500,
              fontSize: "16px",
              lineHeight: "26px",
              color: "rgba(33, 33, 33, 0.52)",
            }}
          >
            {/* <ListItemIcon>
              <img src={helpIcon} />
            </ListItemIcon> */}
            Help
          </MenuItem>
        </Link>

        <Link to="/#" style={{ textDecoration: "none" }}>
          <MenuItem
            style={{
              fontFamily: "Work Sans",
              fontStyle: "normal",
              fontWeight: 500,
              fontSize: "16px",
              lineHeight: "26px",
              color: "rgba(33, 33, 33, 0.52)",
            }}
          >
            {/* <ListItemIcon>
              <img src={settingsIcon} />
            </ListItemIcon> */}
            Settings
          </MenuItem>
        </Link>

        <Divider />

        <Link to="#" style={{ textDecoration: "none" }}>
          <MenuItem
            style={{
              fontFamily: "Work Sans",
              fontStyle: "normal",
              fontWeight: 500,
              fontSize: "16px",
              lineHeight: "26px",
              color: "rgba(33, 33, 33, 0.52)",
            }}
          >
            {/* <ListItemIcon>
              <img src={logoutIcon} />
            </ListItemIcon> */}
            Logout
          </MenuItem>
        </Link>
      </Menu>
    </React.Fragment>
  );
};

export default ProfileIconData;

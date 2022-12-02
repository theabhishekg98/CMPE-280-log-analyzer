import { Typography, Grid } from "@mui/material";
import Navbar from "../Navbar";
import Sidebar from "./Sidebar";
import VideoLibrary from "./VideoLibrary";
import { useState, useEffect } from "react";

const Dashboard = (props) => {
  const [itemData, setItemData] = useState(null);
  const [uploadModal, setUploadModal] = useState(false);
  const [uploadPercentage, setUploadPercentage] = useState(0);
  const [fileName, setFileName] = useState(null);
  const [thumbnailURI, setThumbnailURI] = useState(null);
  const [serverId, setServerId] = useState(0);
  const [open, setOpen] = useState(false);
  // var userData = localStorage.getItem("userData");
  return (
    <Grid container direction="column">
      <Grid item container>
        <Navbar isBlack={false} />
      </Grid>
      <Grid
        item
        container
        direction="row"
        style={{
          width: "100%",
        }}
      >
        <Grid item md={1.3} />
        <Grid item md={2.5}>
          <Sidebar setServerId={setServerId} serverId={serverId} />
        </Grid>
        <Grid item container direction="column" md={6.9}>
          <Grid
            item
            style={{
              marginTop: "75px",
            }}
          ></Grid>
          <Grid item container>
            <VideoLibrary
              itemData={itemData}
              uploadModal={uploadModal}
              uploadPercentage={uploadPercentage}
              fileName={fileName}
              thumbnailURI={thumbnailURI}
              open={open}
              setOpen={setOpen}
              serverId={serverId}
            />
          </Grid>
        </Grid>
        <Grid item md={1.3} />
      </Grid>
    </Grid>
  );
};

export default Dashboard;

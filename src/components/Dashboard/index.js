import { Typography, Grid } from "@mui/material";
import Navbar from "../Navbar";
import Sidebar from "./Sidebar";
import VideoLibrary from "./VideoLibrary";
import { useState, useEffect } from "react";

// const FileUploadThumbnail = require("file-upload-thumbnail");

const Dashboard = () => {
  const [collectionData, setCollectionData] = useState(null);
  const [collectionUnsub, setCollectionUnsub] = useState({ f: null });
  const [itemData, setItemData] = useState(null);
  const [searchKeyword, setSearchKeyword] = useState("");
  const [uploadModal, setUploadModal] = useState(false);
  const [uploadPercentage, setUploadPercentage] = useState(0);
  const [fileName, setFileName] = useState(null);
  const [thumbnailURI, setThumbnailURI] = useState(null);
  const [serverId, setServerId] = useState(0);
  const [open, setOpen] = useState(false);


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
          // background: "#F8F8F8",
          width: "100%",
        }}
      >
        <Grid item md={1.3} />
        <Grid item md={2.5}>
          <Sidebar setServerId = {setServerId}/>
        </Grid>
        <Grid item container direction="column" md={6.9}>
          <Grid
            item
            style={{
              marginTop: "75px",
            }}
          >
          </Grid>
          <Grid item container>
            <VideoLibrary
              setSearchKeyword={setSearchKeyword}
              itemData={itemData}
              uploadModal={uploadModal}
              uploadPercentage={uploadPercentage}
              fileName={fileName}
              thumbnailURI={thumbnailURI}
              open={open}
              setOpen={setOpen}
              serverId={serverId}
              // user={currentUser.uid}
            />
          </Grid>
        </Grid>
        <Grid item md={1.3} />
      </Grid>
    </Grid>
  );
};

export default Dashboard;

import { Typography, Grid } from "@mui/material";
import ImageList from "@mui/material/ImageList";
import IconButton from "@mui/material/IconButton";
import VideoCard from "./VideoCard";
import UploadCard from "./UploadCard";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import Paper from "@mui/material/Paper";
import DragDropZone from "./DragDropZone";
import { useEffect, useState } from 'react';
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import axios from 'axios';
 
export default function VideoLibrary(props) {

  const [data,setData] = React.useState(() => {
    axios.get("http://localhost:8000/logs/"+props.serverId)
      .then(res => setData(res.data))
 });
 
  // useEffect(async () => {
  //   console.log("^^^^^^^^^^^^^^^^");
  //   const url = `http://localhost:8000/logs/`+props.serverId;
  //   const response = await axios.get(url);
  //   setData(response.data);
  //   console.log(response.data);
  // }, [props.serverId]);

  useEffect(() => {
    console.log("useEffect called");
    const getWeather = async () => {
      try {
        const res = await axios.get(
          `http://localhost:8000/logs/`+props.serverId,
        );
        setData(res.data);
      } catch (e) {
        console.log(e);
      }
    };
    getWeather();
  }, [props.serverId]);
  // const data = await axios.get(`http://localhost:8000/logs/101`);
  // console.log(data.data.log)
  // const rows = [
  //   createData(1, "info", "init", "HOLD", 4.0, 1),
  //   createData(1, "info", "init", "HOLD", 4.0, 1),
  //   createData(1, "info", "init", "HOLD", 4.0, 1),
  //   createData(1, "info", "init", "HOLD", 4.0, 1),
  //   createData(1, "info", "init", "HOLD", 4.0, 1),
  // ];
  return (
    <Grid item container direction="row">
      <Grid item container direction="row" md={12}>

        <Grid
          item
          xs={12}
          style={{
            textAlign: "right",
            height: "30px",
            fontFamily: "Work Sans",
            fontStyle: "normal",
            fontWeight: "bold",
            fontSize: "24px",
            lineHeight: "30px",
            color: "#000000",
            marginTop:"10px",
            marginBottom: "50px"
          }}
        >
          <Paper
            component="form"
            sx={{ p: "2px", display: "flex", alignItems: "right" }}
          >
            <InputBase
              sx={{ ml: 1, flex: 1 }}
              placeholder="Search Connections"
              onChange={(e) => props.setSearchKeyword(e.target.value)}
              inputProps={{ "aria-label": "search google maps" }}
            />
            <IconButton type="submit" sx={{ p: "10px" }} aria-label="search">
              <SearchIcon />
            </IconButton>
          </Paper>
        </Grid>
      </Grid>
      <TableContainer component={Paper}
      style={
        {
          marginTop: "10px"
        }
      }>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="right">{"Log Id"}</TableCell>
            <TableCell align="right">{"Level"}</TableCell>
            <TableCell align="right">{"Escalation"}</TableCell>
            <TableCell align="right">{"Status"}</TableCell>
            <TableCell align="right">{"Priority"}</TableCell>
            <TableCell align="right">{"Timestamp"}</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data && data.logs.map((row, index) => (
            <TableRow
              key={index}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="right">{row.logId}</TableCell>
              <TableCell align="right">{row.level}</TableCell>
              <TableCell align="right">{row.escalation}</TableCell>
              <TableCell align="right">{row.status}</TableCell>
              <TableCell align="right">{row.priority}</TableCell>
              <TableCell align="right">{row.timestamp}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
      {/* <Grid item>
        {props.itemData ? (
          props.itemData.length > 0 ? (
            <ImageList cols={3} gap={24}>
              <UploadCard
                handleFileChange={props.handleFileChange}
                uploadModal={props.uploadModal}
                uploadPercentage={props.uploadPercentage}
                fileName={props.fileName}
                thumbnailURI={props.thumbnailURI}
                handleClose={props.handleClose}
              />
              {props.itemData.map((item) => (
                <VideoCard
                  videoItem={item}
                  open={props.open}
                  setOpen={props.setOpen}
                  user={props.user}
                />
              ))}
            </ImageList>
          ) : (
            <DragDropZone
              handleFileChange={props.handleFileChange}
              uploadModal={props.uploadModal}
              uploadPercentage={props.uploadPercentage}
              fileName={props.fileName}
              thumbnailURI={props.thumbnailURI}
              handleClose={props.handleClose}
            />
          )
        ) : null}
      </Grid> */}
    </Grid>
  );
}

import { TextField, Typography, Modal, Button, Grid, Box} from "@mui/material";
import placeholder from "../../assets/placeholder.png";
import * as React from 'react';
import axios from 'axios';
import AddIcon from '@mui/icons-material/Add';
import StorageIcon from '@mui/icons-material/Storage';

const Sidebar = (props) => {

  const [data,setData] = React.useState(() => {
    axios.get("http://localhost:8000/servers?userId=0")
      .then(res => setData(res.data.data))
  });

  function addServer(){
    console.log(serverIP);
    console.log(serverName);
    console.log(serverPriority);
    axios.post('http://localhost:8000/servers', {
      userId: 1,
      priority: serverPriority,
      name: serverName
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }

 const [open, setOpen] = React.useState(false);
 const [serverIP, setServerIP] = React.useState();
 const [serverName, setServerName] = React.useState();
 const [serverPriority, setServerPriority] = React.useState();
  return (
    <Grid item container direction="column">
      <Grid item container direction="row" style={{ marginTop: "83px" }}>
        <Grid item>
          <img
            src={placeholder}
            style={{
              width: "48px",
              height: "48px",
            }}
          />
        </Grid>
        <Grid item>
          <Grid
            item
            style={{
              fontFamily: "Work Sans",
              fontStyle: "normal",
              fontWeight: "bold",
              fontSize: "20px",
              lineHeight: "24px",
              letterSpacing: "-0.35px",
              color: "#000000",
              height: "24px",
              marginTop: "15px",
              marginLeft: "10px",
            }}
          >
            My Dashboard
          </Grid>
        </Grid>
      </Grid>
      <Grid item>{/* progress bar */}</Grid>

      <Grid item>
             <Button
             style={{
               width: "269px",
               height: "52px",
               fontFamily: "Work Sans",
               fontStyle: "normal",
               fontWeight: 500,
               fontSize: "16px",
               lineHeight: "24px",
               color: "rgba(33, 33, 33, 0.52)",
               textTransform: "none",
               justifyContent: "flex-start",
             }}
             sx={{
               ":hover": {
                 bgcolor: "rgba(33, 33, 33, 0.04)",
               },
             }}
             onClick={()=>setOpen(true)}
           >
             <AddIcon style={{ marginRight: "15px" }}></AddIcon>
             Add Connection
           </Button>     
           <Modal
              open={open}
              onClose={()=>setOpen(false)}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
             <Box sx={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: 400,
                bgcolor: 'background.paper',
                border: '2px solid #000',
                boxShadow: 24,
                p: 4,
              }}>
                <Typography style={{
                  fontStyle:"bold",
                  color: "black",
                  fontWeight: 500,
                }}>Server Details</Typography>
                <Grid container
                direction="column"
                alignItems="center"
                >
                <Grid item
                style={{
                  margin:"10px"
                }}>
                <TextField id="serverIP" label="Server IP" variant="outlined" onChange={(e) => { setServerIP(e.target.value); }} />
                </Grid>
                <Grid item style={{
                  margin:"10px"
                }}>
                <TextField id="serverName" label="Server Name" variant="outlined" onChange={(e) => { setServerName(e.target.value); }} />
                </Grid>
                <Grid item style={{
                  margin:"10px"
                }}>
                <TextField id="serverPriority" label="Server Priority" variant="outlined" onChange={(e) => { setServerPriority(e.target.value); }} />
                </Grid>
                </Grid>
                <Button
                  variant="contained"
                  onClick={()=> addServer()}>
                  Add
                </Button>
              </Box>
            </Modal>  
      </Grid>
      <Grid item>
      <Typography
         style={{
          width: "269px",
          fontFamily: "Work Sans",
          fontStyle: "bold",
          fontWeight: 700,
          fontSize: "16px",
          lineHeight: "24px",
          color: "black",
          textTransform: "none",
          marginLeft:"10px",
          textAlign:"center",
          justifyContent: "flex-start",
        }}
        >          All Servers
        </Typography>
      </Grid>
      <Grid item>
        {data && data.map((row, index) => (
             <Button
             style={{
               width: "269px",
               height: "52px",
               fontFamily: "Work Sans",
               fontStyle: "normal",
               fontWeight: 500,
               fontSize: "16px",
               lineHeight: "24px",
               color: "rgba(33, 33, 33, 0.52)",
               textTransform: "none",
               justifyContent: "flex-start",
             }}
             sx={{
               ":hover": {
                 bgcolor: "rgba(33, 33, 33, 0.04)",
               },
             }}
             onClick={()=>props.setServerId(row.serverId)}
           >
          <StorageIcon style={{ marginRight: "15px" }}></StorageIcon>
             {row.name}
           </Button>
          ))}
       
      </Grid>
    </Grid>
  );
};

export default Sidebar;

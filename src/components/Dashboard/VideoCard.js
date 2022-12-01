// import ImageListItem from "@mui/material/ImageListItem";
// import * as React from "react";
// import { useEffect } from "react";
// import { Typography, Grid, Button } from "@mui/material";
// import DeleteOutlined from "@mui/icons-material/DeleteOutlined";
// import { IconButton } from "@mui/material";
// import Dialog from "@mui/material/Dialog";
// import DialogActions from "@mui/material/DialogActions";
// import DialogContent from "@mui/material/DialogContent";
// import DialogContentText from "@mui/material/DialogContentText";
// import DialogTitle from "@mui/material/DialogTitle";
// import LinearProgress from "@mui/material/LinearProgress";

// export default function VideoCard(props) {
//   const [hover, setHover] = React.useState(false);

//   const item = props.videoItem;

//   const styles = {
//     paperContainer: {
//       backgroundImage: `url(${item.thumbnail})`,
//     },
//   };

//   const handleClickOpen = (e) => {
//     e.preventDefault();
//     props.setOpen(true);
//   };

//   const handleClose = (e) => {
//     e.preventDefault();
//     props.setOpen(false);
//   };

//   const handleClosePositive = (e) => {
//     e.preventDefault();
//     props.videoItem.is_trashed = true;
//     console.log("Updated item: ", item);
//     props.setOpen(false);
//   };

//   return (
//     <ImageListItem key={item.thumbnail}>
//       <Grid
//         item
//         container
//         direction="column-reverse"
//         style={{
//           marginTop: "25px",
//           width: "270px",
//           height: "196px",
//           cursor: "pointer",
//           textAlign: "center",
//           backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 46.06%, rgba(0, 0, 0, 0.5) 71.06%, #000000 100%), url(${item.thumbnail})`,

//           backgroundSize: "contain",
//           filter: `${item.state == "CONVERTING" ? "grayscale(100%)" : ""}`,
//         }}
//         onMouseEnter={() => setHover(true)}
//         onMouseLeave={() => setHover(false)}
//       >
//         <Grid
//           item
//           style={{
//             backgroundColor: "#FFFFFF",
//             textAlign: "left",
//           }}
//           direction="row"
//           padding="8px"
//         >
//           <Typography
//             style={{
//               fontFamily: "Work Sans",
//               fontStyle: "normal",
//               fontSize: "14px",
//             }}
//           >
//             {item.title.length < 30
//               ? item.title
//               : item.title.substr(0, 30) + "..."}
//           </Typography>
//         </Grid>
//         {item.state== "PRE_PROCESSING" || item.state == "POST_PROCESSING" && (
//           <LinearProgress variant="determinate" value={item.progress * 100} />
//         )}

//         <Grid item direction="column">
//           {item.state != "CONFIG" && item.state != "PUBLISHED" && (
//             <Typography
//               style={{
//                 fontFamily: "Work Sans",
//                 fontStyle: "normal",
//                 fontSize: "12px",
//                 textAlign: "left",
//                 color: "rgba(255, 255, 255, 0.8)",
//                 backgroundColor: "rgba(0, 0, 0, 0.4)",
//               }}
//               padding="8px"
//             >
//               CONVERTING... ({item.processing_step})
//             </Typography>
//           )}
//         </Grid>

//         <Grid item md={3.5} />

//         <Grid item>
//           {!(item.state== "PRE_PROCESSING" || item.state == "POST_PROCESSING") && hover && (
//             <>
//               {item.state == "CONFIG" || item.state == "PUBLISHED" ? (
//                 <Button
//                   style={{
//                     width: "103px",
//                     height: "38px",
//                     fontFamily: "Work Sans",
//                     fontWeight: 600,
//                     fontSize: "9px",
//                     fontStyle: "normal",
//                     border: "105px",
//                     background: "rgba(33, 33, 33, 0.52)",
//                     backdropFilter: "blur(4px)",
//                     color: "#FFFFFF",
//                   }}
//                   onClick={() => {
//                     window.location.href = "/editor?videoId=" + item.id;
//                   }}
//                 >
//                   EDIT VIDEO
//                 </Button>
//               ) : null}
//               &nbsp;&nbsp;
//               {item.state == "PUBLISHED" ? (
//                 <Button
//                   style={{
//                     width: "103px",
//                     height: "38px",
//                     fontFamily: "Work Sans",
//                     fontWeight: 600,
//                     fontSize: "9px",
//                     fontStyle: "normal",
//                     border: "105px",
//                     background: "rgba(33, 33, 33, 0.52)",
//                     backdropFilter: "blur(4px)",
//                     color: "#FFFFFF",
//                   }}
//                   onClick={() => {
//                     window.location.href =
//                       "/player?videoId=" + item.id + "&userId=" + props.user;
//                   }}
//                 >
//                   VIEW VIDEO
//                 </Button>
//               ) : null}
//             </>
//           )}
//         </Grid>

//         <Grid item md={1.75} />

//         <Grid
//           item
//           style={{
//             textAlign: "right",
//             paddingRight: "10px",
//           }}
//           md={1}
//         >
//           {!(item.state== "PRE_PROCESSING" || item.state == "POST_PROCESSING") && hover && (
//             <IconButton
//               size="large"
//               style={{
//                 width: "23px",
//                 height: "23px",
//                 background: "rgba(33, 33, 33, 0.52)",
//                 backdropFilter: "blur(4px)",
//                 color: "#FFFFFF",
//               }}
//               onClick={handleClickOpen}
//             >
//               <DeleteOutlined />
//             </IconButton>
//           )}
//         </Grid>

//         <Grid></Grid>
//       </Grid>
//       <Dialog open={props.open} onClose={handleClose}>
//         <DialogTitle></DialogTitle>
//         <DialogContent>
//           <DialogContentText>
//             Are you sure you want to delete the video?
//           </DialogContentText>
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={handleClose}>Cancel</Button>
//           <Button onClick={handleClosePositive}>Yes</Button>
//         </DialogActions>
//       </Dialog>
//     </ImageListItem>
//   );
// }

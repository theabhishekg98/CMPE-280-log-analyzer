// import PropTypes from "prop-types";
// import Button from "@mui/material/Button";
// import { styled } from "@mui/material/styles";
// import Dialog from "@mui/material/Dialog";
// import Divider from "@mui/material/Divider";
// import DialogTitle from "@mui/material/DialogTitle";
// import DialogContent from "@mui/material/DialogContent";
// import IconButton from "@mui/material/IconButton";
// import CloseIcon from "@mui/icons-material/Close";
// import LinearProgress from "@mui/material/LinearProgress";
// import Typography from "@mui/material/Typography";
// import Grid from "@mui/material/Grid";
// import xCircle from "../../assets/x-circle.svg";

// const BootstrapDialog = styled(Dialog)(({ theme }) => ({
//   "& .MuiDialogContent-root": {
//     padding: theme.spacing(2),
//     height: "100%",
//   },
//   "& .MuiDialogActions-root": {
//     padding: theme.spacing(1),
//   },
// }));

// function LinearProgressWithLabel(props) {
//   return (
//     <>
//       <LinearProgress
//         variant="determinate"
//         sx={{
//           height: "42px",
//           background: "rgba(33, 33, 33, 0.12)",
//           width: "450px",
//           paddingLeft: "20px"
//         }}
//         {...props}
//       />
//       <Typography
//         variant="body2"
//         color="text.secondary"
//         style={{
//           fontFamily: "Work Sans",
//           fontStyle: "normal",
//           fontWeight: 600,
//           fontSize: "12px",
//           lineHeight: "16px",
//           letterSpacing: "0.4px",
//           textTransform: "uppercase",
//           color: "rgba(33, 33, 33, 0.52)",
//         }}
//       >
//         {`${Math.round(props.value)}%`}
//       </Typography>
//     </>
//   );
// }

// const BootstrapDialogTitle = (props) => {
//   const { children, onClose, ...other } = props;

//   return (
//     <DialogTitle
//       sx={{
//         m: 0,
//         p: 2,
//         fontFamily: "Work Sans",
//         fontStyle: "normal",
//         fontWeight: "bold",
//         fontSize: "24px",
//         lineHeight: "30px",
//         letterSpacing: "-0.28px",
//         color: "#000000",
//       }}
//       {...other}
//     >
//       {children}
//       <IconButton
//         aria-label="close"
//         onClick={onClose}
//         sx={{
//           position: "absolute",
//           right: 8,
//           top: 8,
//           color: (theme) => theme.palette.grey[500],
//         }}
//       >
//         <CloseIcon />
//       </IconButton>
//     </DialogTitle>
//   );
// };

// BootstrapDialogTitle.propTypes = {
//   children: PropTypes.node,
//   onClose: PropTypes.func.isRequired,
// };

// export default function UploadModal({
//   open,
//   handleClose,
//   percent,
//   fileName,
//   thumbnailURI,
// }) {
//   return (
//     <div>
//       <BootstrapDialog
//         onClose={handleClose}
//         aria-labelledby="customized-dialog-title"
//         open={open}
//         sx={{
//           boxShadow:
//             "0px 12px 17px rgba(0, 0, 0, 0.06), 0px 5px 22px rgba(0, 0, 0, 0.04), 0px 7px 8px rgba(0, 0, 0, 0.08)",
//           borderRadius: "10px",
//         }}
//       >
//         <BootstrapDialogTitle
//           id="customized-dialog-title"
//           onClose={handleClose}
//         >
//           Upload a Video
//         </BootstrapDialogTitle>
//         <Divider />
//         <DialogContent>
//           <Grid
//             container
//             direction="row"
//             style={{
//               marginTop: "25px",
//             }}
//           >
//             <Grid item md={2.2}>
//               <img
//                 src={thumbnailURI}
//                 style={{
//                   width: "101px",
//                   height: "101px",
//                 }}
//               />
//             </Grid>
//             <Grid item md={9.8} container direction="column">
//               <Grid
//                 item
//                 style={{
//                   height: "24px",
//                   fontFamily: "Work Sans",
//                   fontStyle: "normal",
//                   fontWeight: "bold",
//                   fontSize: "16px",
//                   lineHeight: "24px",
//                   color: "rgba(33, 33, 33, 0.52)",
//                 }}
//               >
//                 {fileName}
//               </Grid>
//               <Grid
//                 item
//                 style={{
//                   marginTop: "10px",
//                 }}
//               >
//                 <LinearProgressWithLabel value={percent} />
//               </Grid>
//             </Grid>
//           </Grid>
//         </DialogContent>
//         <div
//           style={{
//             textAlign: "center",
//             marginBottom: "25px",
//             marginTop: "50px",
//           }}
//         >
//           <Button
//             onClick={handleClose}
//             style={{
//               padding: "12px 16px",
//               width: "173px",
//               height: "48px",
//               background: "#FFFFFF",
//               border: "1px solid rgba(33, 33, 33, 0.52)",
//               boxSizing: "border-box",
//               borderRadius: "5px",
//             }}
//           >
//             <img
//               src={xCircle}
//               style={{
//                 width: "24px",
//                 height: "24px",
//                 marginRight: "5px",
//               }}
//             />
//             <Typography
//               style={{
//                 fontFamily: "Work Sans",
//                 fontStyle: "normal",
//                 fontWeight: 600,
//                 fontSize: "14px",
//                 lineHeight: "24px",
//                 color: "rgba(33, 33, 33, 0.52)",
//                 textTransform: "none",
//               }}
//             >
//               Cancel Upload
//             </Typography>
//           </Button>
//         </div>
//       </BootstrapDialog>
//     </div>
//   );
// }

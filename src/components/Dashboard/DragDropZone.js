// import { Typography, Grid, Button } from "@mui/material";
// import uploadCloud from "../../assets/upload-cloud.svg";
// import UploadModal from "./UploadModal";
// import Dropzone from "react-dropzone";
// import ZoomLogo from "../../assets/zoom-logo.png";
// import PlayIcon from "../../assets/play.png";

// const DragDropZone = ({
//   handleFileChange,
//   uploadModal,
//   uploadPercentage,
//   fileName,
//   thumbnailURI,
//   handleClose,
// }) => {
//   return (
//     <>
//       <Dropzone onDrop={(acceptedFiles) => handleFileChange(acceptedFiles[0])}>
//         {({ getRootProps, getInputProps }) => (
//           <section>
//             <div {...getRootProps()}>
//               <input {...getInputProps()} />
//               <Grid
//                 item
//                 container
//                 direction="column"
//                 style={{
//                   width: "857px",
//                   height: "540px",
//                   background: "rgba(33, 33, 33, 0.04)",
//                   marginTop: "35px",
//                   marginBottom: "35px",
//                   textAlign: "center",
//                   alignItems: "center",
//                 }}
//               >
//                 <Grid
//                   item
//                   style={{
//                     width: "711px",
//                     height: "448px",
//                     border: "2px dashed rgba(33, 33, 33, 0.52)",
//                     boxSizing: "border-box",
//                     borderRadius: "20px",
//                     marginTop: "48px",
//                     textAlign: "center",
//                   }}
//                 >
//                   <Grid
//                     item
//                     style={{
//                       marginTop: "60px",
//                     }}
//                   >
//                     <img
//                       src={uploadCloud}
//                       style={{
//                         width: "105px",
//                         height: "105px",
//                       }}
//                     />
//                   </Grid>
//                   <Grid
//                     item
//                     style={{
//                       height: "48px",
//                       fontFamily: "Work Sans",
//                       fontStyle: "normal",
//                       fontSize: "20px",
//                       lineHeight: "24px",
//                       textAlign: "center",
//                       letterSpacing: "-0.35px",
//                       color: "#000000",
//                     }}
//                   >
//                     <Typography
//                       style={{
//                         marginTop: "25px",
//                       }}
//                     >
//                       <b>Drag &amp; Drop</b> a video
//                     </Typography>
//                     <Typography>
//                       or click to{" "}
//                       <a>
//                         <b style={{ color: "#2183DF", cursor: "pointer" }}>
//                           browse
//                         </b>
//                       </a>
//                     </Typography>
//                     <Typography
//                       style={{
//                         height: "16px",
//                         fontFamily: "Work Sans",
//                         fontStyle: "normal",
//                         fontWeight: 600,
//                         fontSize: "9px",
//                         lineHeight: "16px",
//                         letterSpacing: "0.4px",
//                         textTransform: "uppercase",
//                         color: "rgba(33, 33, 33, 0.52)",
//                         marginTop: "25px",
//                       }}
//                     >
//                       or
//                     </Typography>
//                     <Grid
//                       item
//                       container
//                       direction="row"
//                       style={{ marginTop: "20px", textAlign: "center" }}
//                       spacing={3}
//                     >
//                       <Grid item>
//                         <Button
//                           style={{
//                             display: "flex",
//                             flexDirection: "column",
//                             padding: "12px 16px",
//                             width: "191px",
//                             height: "48px",
//                             background: "#2183DF",
//                             borderRadius: "5px",
//                             border: "1px solid rgba(33, 131, 223, 0.52)",
//                             boxSizing: "border-box",
//                             marginLeft: "150px",
//                           }}
//                         >
//                           <Typography
//                             style={{
//                               height: "24px",
//                               fontFamily: "Work Sans",
//                               fontStyle: "normal",
//                               fontWeight: 600,
//                               fontSize: "14px",
//                               lineHeight: "24px",
//                               color: "#FFFFFF",
//                               textTransform: "none",
//                             }}
//                           >
//                             Import from Zoom
//                           </Typography>
//                         </Button>
//                       </Grid>
//                       <Grid item>
//                         <Button
//                           style={{
//                             display: "flex",
//                             flexDirection: "column",
//                             padding: "12px 16px",
//                             width: "191px",
//                             height: "48px",
//                             background: "#FFFFFF",
//                             border: "1px solid rgba(33, 131, 223, 0.52)",
//                             boxSizing: "border-box",
//                             borderRadius: "5px",
//                           }}
//                         >
//                           <Typography
//                             style={{
//                               height: "24px",
//                               fontFamily: "Work Sans",
//                               fontStyle: "normal",
//                               fontWeight: 600,
//                               fontSize: "14px",
//                               lineHeight: "24px",
//                               color: "#2183DF",
//                               textTransform: "none",
//                             }}
//                           >
//                             Try Demo Video
//                           </Typography>
//                         </Button>
//                       </Grid>
//                     </Grid>
//                     <Grid
//                       item
//                       style={{
//                         textAlign: "center",
//                         marginTop: "25px",
//                       }}
//                     >
//                       <Typography
//                         style={{
//                           height: "16px",
//                           fontFamily: "Work Sans",
//                           fontStyle: "normal",
//                           fontWeight: 600,
//                           fontSize: "9px",
//                           lineHeight: "16px",
//                           letterSpacing: "0.4px",
//                           textTransform: "uppercase",
//                           color: "rgba(33, 33, 33, 0.52)",
//                         }}
//                       >
//                         .MOV, .MP4, .Avi formats only.
//                       </Typography>
//                     </Grid>
//                   </Grid>
//                 </Grid>
//               </Grid>
//             </div>
//           </section>
//         )}
//       </Dropzone>
//       <UploadModal
//         open={uploadModal}
//         handleClose={handleClose}
//         percent={uploadPercentage}
//         fileName={fileName}
//         thumbnailURI={thumbnailURI}
//       />
//     </>
//   );
// };

// export default DragDropZone;

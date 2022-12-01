import ImageListItem from "@mui/material/ImageListItem";
import { Typography, Grid } from "@mui/material";
import uploadCloud from "../../assets/upload-cloud.svg";
import UploadModal from "./UploadModal";

const UploadCard = ({
  handleFileChange,
  uploadModal,
  uploadPercentage,
  fileName,
  thumbnailURI,
  handleClose,
}) => {
  return (
    <>
      <ImageListItem key={"."}>
        <Grid
          item
          container
          direction="row"
          style={{
            marginTop: "25px",
          }}
        >
          <Grid
            item
            container
            direction="column"
            style={{
              width: "270px",
              height: "196px",
              background: "rgba(33, 33, 33, 0.12)",
              borderRadius: "10px",
              textAlign: "center",
              marginRight: "25px",
              cursor: "pointer",
            }}
            onClick={() => {
              document.getElementById("file").click();
            }}
          >
            <input
              type="file"
              style={{ display: "none" }}
              id="file"
              name="file"
              onChange={(e) => {
                handleFileChange(e.target.files[0]);
              }}
            />
            <Grid
              item
              style={{
                marginTop: "60px",
              }}
            >
              <img
                src={uploadCloud}
                style={{
                  width: "41px",
                  height: "41p",
                }}
              />
            </Grid>
            <Grid item>
              <Typography
                style={{
                  fontFamily: "Work Sans",
                  fontStyle: "normal",
                  fontWeight: 600,
                  fontSize: "14px",
                  lineHeight: "24px",
                  color: "rgba(33, 33, 33, 0.52)",
                  textAlign: "center",
                }}
              >
                Upload a Video
              </Typography>
            </Grid>
          </Grid>
          <UploadModal
            open={uploadModal}
            percent={uploadPercentage}
            fileName={fileName}
            thumbnailURI={thumbnailURI}
            handleClose={handleClose}
          />
        </Grid>
      </ImageListItem>
    </>
  );
};

export default UploadCard;

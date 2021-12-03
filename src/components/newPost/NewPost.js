import { Check, Close, CloudUpload } from "@mui/icons-material";
import {
  Grid,
  IconButton,
  TextField,
  Typography,
  Snackbar,
} from "@mui/material";
import MuiAlert from "@mui/material/Alert";
import Carousel from "react-material-ui-carousel";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { storeNewPost } from "../../actions/newPostActions";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";

const NewPost = () => {
  const [content, setContent] = useState("");
  const [imageDetails, setImageDetails] = useState("");
  const [completePosting, setCompletePosting] = useState(false);
  const [imagePreviewUrl, setImagePreviewUrl] = useState("");

  const dispatch = useDispatch();
  const logIn = useSelector((state => state.userLogin));
  const userId = logIn.userInfo._id;
  let imgUrls = [];


  useEffect(() => {
    console.log(content);
  }, [content]);

  const setImagePreviewUrlHandler = (e) => {
    const files = e.target.files;
    setImageDetails(files);

    Object.keys(files).forEach((i) => {
      const file = files[i];
      const reader = new FileReader();
      reader.onload = () => {
        setImagePreviewUrl((prev) => [...prev, reader.result]);
      };
      reader.readAsDataURL(file);
    });
  };

  const clearNewPostHandler = () => {
    setImagePreviewUrl("");
    setImageDetails("");
    setContent("");
  };

  const storeImagesHandler = (e) => {
    if (imageDetails.length === 0 || content.length === 0) return;
    e.preventDefault();

    for (let i = 0; i < imageDetails.length; i++) {
      const formData = new FormData();
      //first parameter must be file
      formData.append("file", imageDetails[i]);
      formData.append("upload_preset", "photomaton");
      formData.append("cloud_name", "drvfa2o9f");

      axios
        .post(
          "https://api.cloudinary.com/v1_1/drvfa2o9f/image/upload",
          formData
        )
        .then((data) => {
          const imgUrl = data.data.url.toString();
          createNewPostHandler(imgUrl, imageDetails.length);
        })
        .catch((err) => console.error(err));
    }
  };

  const createNewPostHandler = (imgUrl, imageUrlsLength) => {
    imgUrls.push(imgUrl)

    if(imageUrlsLength === imgUrls.length) {
      axios
      .post("api/post", { userId: userId, content: content, imageUrl: imgUrls })
      .then((res) => {
        console.log("res", res);
        setCompletePosting(true);
      })
      .then(() => {
        clearNewPostHandler();
      })
      .catch((err) => console.error(err));
    }
  }

  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

  const closeCompletePostingMessage = () => {
    setTimeout(() => setCompletePosting(false), 2500);
  };

  return (
    <div className="newPostWrapper">
      {completePosting && (
        <div>
          <Snackbar
            anchorOrigin={{ vertical: "top", horizontal: "center" }}
            open={completePosting}
          >
            <Alert
              onClose={closeCompletePostingMessage()}
              severity="success"
              sx={{ width: "100%" }}
            >
              Posted Successfully!
            </Alert>
          </Snackbar>
        </div>
      )}
      <Grid container>
        <Grid
          container
          width="100vw"
          display="flex"
          direction="row"
          justifyContent="space-between"
        >
          <IconButton onClick={clearNewPostHandler}>
            <Close className="icons"></Close>
          </IconButton>
          <Typography variant="h5" color="white">
            New Post
          </Typography>
          <IconButton
            onClick={(e) => {
              storeImagesHandler(e);
            }}
          >
            <Check className="icons"></Check>
          </IconButton>
        </Grid>
        <Grid item>
          <form className="imgUpload">
            <label htmlFor="chooseFile">
              <CloudUpload id="uploadIcon" />
            </label>
            <input
              id="chooseFile"
              type="file"
              accept="image/png, image/jpeg"
              onChange={(e) => {
                setImagePreviewUrlHandler(e);
              }}
              multiple
            />
            <Grid container justifyContent="center">
              <TextField
                id="standard-multiline-flexible"
                className="postContent"
                // label="Say something..."
                multiline
                placeholder="Write a caption"
                rows={4}
                value={content}
                onChange={(event) => setContent(event.target.value)}
                variant="standard"
                style={{
                  backgroundColor: "white",
                  color: "red",
                }}
              />
            </Grid>
          </form>
        </Grid>
      </Grid>
      <Grid>
        <Carousel>
          {imagePreviewUrl &&
            imagePreviewUrl.map((image) => {
              return (
                <img
                  className="previewImages"
                  key={uuidv4()}
                  src={image}
                  alt="newPostImage"
                />
              );
            })}
        </Carousel>
      </Grid>
    </div>
  );
};

export default NewPost;

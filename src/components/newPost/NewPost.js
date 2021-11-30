import { Check, Close, CloudUpload } from "@mui/icons-material";
import { Grid, IconButton, TextField, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import axios from "axios";

const NewPost = () => {
  const [content, setContent] = useState("");
  const [imageURL, setImageURL] = useState("");

  useEffect(() => {
    console.log(content);
  }, [content]);

  const setImageURLHandler = (e) => {
    console.log(e.target.files);
    if (!e.target.files) return;
    setImageURL(e.target.files[0]);
  };

  const createNewPost = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("imageURL", imageURL);
    formData.append("description", content);
    axios
      .post("http://localhost:5000/posts", formData)
      .then((res) => {
        console.log("res", res);
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="newPostWrapper">
      <Grid container>
        <Grid
          container
          width="100vw"
          display="flex"
          direction="row"
          justifyContent="space-between"
        >
          <IconButton>
            <Close className="icons"></Close>
          </IconButton>
          <Typography variant="h5" color="white">
            New Post
          </Typography>
          <IconButton>
            <Check className="icons"></Check>
          </IconButton>
        </Grid>
        <Grid item>
          <form
            className="imgUpload"
            onSubmit={(e) => {
              createNewPost(e);
            }}
          >
            <label htmlFor="chooseFile">
              <CloudUpload id="uploadIcon" />
            </label>
            <input
              id="chooseFile"
              type="file"
              accept="image/png, image/jpeg"
              onChange={(e) => {
                setImageURLHandler(e);
              }}
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
            <Grid>
              <button variant="contained" color="primary">
                Upload
              </button>
            </Grid>
          </form>
        </Grid>
      </Grid>
    </div>
  );
};

export default NewPost;

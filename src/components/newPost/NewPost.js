import { Check, Close, CloudUpload } from "@mui/icons-material";
import { Grid, IconButton, TextField, Typography } from "@mui/material";
import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { storeNewPost } from "../../actions/actions";
import { useDispatch, useSelector } from "react-redux";

const NewPost = () => {
  const imageRef = useRef(null);
  const [content, setContent] = useState("");
  const [imageURL, setImageURL] = useState("");
  const dispatch = useDispatch();
  const newPosts = useSelector((state) => state);
  const [file, setFile] = useState("");
  const [imagePreviewUrl, setImagePreviewUrl] = useState("");

  console.log("newPosts", newPosts);

  useEffect(() => {
    console.log(content);
  }, [content]);

  const setImageURLHandler = (e) => {
    console.log(e.target.files);
    if (!e.target.files) return;
    let reader = new FileReader();
    let file = e.target.files[0];
    reader.onloadend = () => {
      setFile(file);
      setImagePreviewUrl(reader.result);
    };
    reader.readAsDataURL(file);
    setImageURL(e.target.files);
  };

  const createNewPost = (e) => {
    if (imageURL.length === 0 || content.length === 0) return;
    e.preventDefault();
    const formData = new FormData();

    for (let i = 0; i < imageURL.length; i++) {
      console.log("imageURL[i]", imageURL[i]);
      formData.append("file", imageURL[i]);
    }
    // formData.append("description", content);
    //first parameter must be file
    // formData.append("file", imageURL);
    formData.append("upload_preset", "photomaton");
    formData.append("cloud_name", "drvfa2o9f");

    const config = {
      method: "POST",
      body: formData,
    };

    axios
      .post("https://api.cloudinary.com/v1_1/drvfa2o9f/image/upload", formData)
      //   .then((res) => res.json())
      .then((data) => {
        console.log("data.url.toString()", data.data.url.toString());
      })
      .catch((err) => console.error(err));

    // axios
    //   .post("http://localhost:5000/posts", formData)
    //   .then((res) => {
    //     console.log("res", res);
    //     dispatch(storeNewPost(res.data));
    //   })
    //   .catch((err) => console.error(err));
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
          <IconButton
            onClick={(e) => {
              createNewPost(e);
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
              ref={imageRef}
              onChange={(e) => {
                setImageURLHandler(e);
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
    </div>
  );
};

export default NewPost;

// <Grid>
// {imageURL &&
//   [imageURL].map((image, i) => {
//     console.log(image);
//     return (
//       <div>
//         <p>{image[i].name}</p>
//         <img
//           className="previewImages"
//           src={imagePreviewUrl}
//           alt="newPostImage"
//         />
//       </div>
//     );
//   })}
// </Grid>

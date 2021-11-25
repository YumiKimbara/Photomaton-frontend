import { Check, Close, CloudUpload } from '@mui/icons-material';
import { Grid, IconButton, TextField, Typography, Button } from '@mui/material';
import React, { useState, useEffect, useRef } from 'react';

const NewPost = () => {
    const imageRef = useRef(null)
    const [content, setContent] = useState('')
    useEffect(() => {
        console.log(content)
    }, [content])
    
    const createNewPost = async (e) => {
        e.preventDefault();
        console.log('submit')
        try {
            const res = await fetch('http://localhost:5000/posts', {
                method: "POST",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify({
                description: content
                })
            });

        const postJsonData = await res.json();
        console.log("postJsonData", postJsonData);
        }catch(err) {
            console.error(err)
        }
    } 

    return (
        <div className="newPostWrapper">
            <Grid container>
                <Grid container width="100vw" display="flex" direction="row" justifyContent="space-between">
                    <IconButton>
                        <Close className="icons"></Close>
                    </IconButton>
                    <Typography variant="h5" color="white">New Post</Typography>
                    <IconButton>
                        <Check className="icons"></Check>
                    </IconButton>
                </Grid>
                <Grid item>
                    <form className="imgUpload" onSubmit={(e) => {createNewPost(e)}}>
                        <label htmlFor="chooseFile">
                            <CloudUpload id="uploadIcon"/>
                        </label>
                        <input id="chooseFile" type="file" accept="image/png, image/jpeg" ref={imageRef} onChange={() => console.log(
                            console.log(imageRef.current.value)
                        )} />
                        <Grid>
                        <Button variant="contained" color="primary">Upload</Button>
                        </Grid>
                    </form>
                </Grid>
                <Grid container justifyContent="center" >
                    <TextField
                        id="standard-multiline-flexible"
                        className="postContent"
                        // label="Say something..."
                        multiline
                        placeholder="Write a caption"
                        rows={4}
                        value={content}
                        onChange={(event)=>setContent(event.target.value)}
                        variant="standard"
                        style={{
                            backgroundColor: 'white',
                            color: 'red'
                        }}
                    />
                </Grid>
            </Grid>
        </div>
    )
}

export default NewPost;
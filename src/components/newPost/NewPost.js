import { Check, Close, CloudUpload } from '@mui/icons-material';
import { Grid, IconButton, TextField, Typography } from '@mui/material';
import React, { useState, useEffect } from 'react';

const NewPost = () => {
    const [content, setContent] = useState('')
    useEffect(() => {
        console.log(content)
    }, [content])
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
                    <form className="imgUpload">
                        <label for="chooseFile">
                            <CloudUpload id="uploadIcon"/>
                        </label>
                        <input id="chooseFile" type="file" />
                    </form>
                </Grid>
                <Grid container justifyContent="center" >
                    <TextField
                        id="standard-multiline-flexible"
                        className="postContent"
                        // label="Say something..."
                        multiline
                        placeholder="Leave some coments..."
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
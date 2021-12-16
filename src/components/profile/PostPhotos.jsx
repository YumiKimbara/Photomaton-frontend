import { ImageList, ImageListItem } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const PostPhotos = (props) => {
    const [rowHeight, setRowHeight] = useState(window.innerWidth/3)
    // useEffect(() => {
    //     // setRowHeight(window.innerWidth/3)
    //     // console.log(window.innerWidth)
    // }, [])

    window.addEventListener('resize', () => {
        setRowHeight(window.innerWidth/3)
    })

    return (
        <ImageList cols={3} gap={3} rowHeight={rowHeight} style={{width: '100%'}}>
            {props.img.map((data) =>
                <ImageListItem className='imgLi' key={uuidv4()}>
                    <img className='img' src={data.imageUrl[0]} onClick={() => alert('hi')} />
                </ImageListItem>
            )}
        </ImageList>
    )
}

export default PostPhotos;
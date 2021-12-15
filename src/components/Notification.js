import { Box, Button, Modal, Fade, Avatar, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleModal } from "../actions/modalActions";
import axios from 'axios';

const Notification = () => {
  const modalSelecor = useSelector((state) => state.modalReducer);
  const dispatch = useDispatch();
  const userInfo = JSON.parse(localStorage.getItem('userInfo'))
  const [friendReq, setFriendReq] = useState([])
  // const [friendRequest, setFriendRequest] = useState([])
  // const [likes, setLikes] = useState([])
  // const [comments, setComments] = useState([])
  
  
  useEffect(async() => {
    const res = await axios.get(`http://localhost:3333/api/users/getUser/${userInfo._id}`)
    setFriendReq(res.data.data.friends.request)
    console.log(res)
    
  }, [])

  const handleAccept = async(senderID) => {
    const res = await axios.put('http://localhost:3333/api/users/friendAccept', {
      senderID: senderID,
      receiverID: userInfo._id
    })
    dispatch(toggleModal())
    console.log('Accept:', senderID, userInfo._id)
    console.log(res)
  }

  const handleReject = async(senderID) => {
    const res = await axios.put('http://localhost:3333/api/users/friendReject', {
      senderID: senderID,
      receiverID: userInfo._id
    })
    dispatch(toggleModal())
    console.log('Reject', senderID, userInfo._id)
    console.log(res)
  }

  return (
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          open={modalSelecor}
          onClose={() => dispatch(toggleModal())}
          closeAfterTransition
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={modalSelecor}>
            <Box className="modalWindow">
            {friendReq.map((obj) => {
              return (
                <div key={obj.userID} className="friendRequest">
                  <Avatar alt='' src={obj.avatarUrl} />
                  <Typography variant='body2'>{obj.userName} sent a friend request</Typography>
                  <Button onClick={()=>handleAccept(obj.userID)}>Accept</Button>
                  <Button onClick={()=>handleReject(obj.userID)}>Reject</Button>
                </div>
                  )
            })}
            <hr/>
              <div className="latestEvent">

              </div>
            </Box>
          </Fade>
        </Modal>
  )
};

export default Notification;

import { Box, Modal, Fade, Avatar } from "@mui/material";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleModal } from "../actions/modalActions";
import axios from 'axios';

const Notification = () => {
  const modalSelecor = useSelector((state) => state.modalReducer);
  const dispatch = useDispatch();
  const userInfo = JSON.parse(localStorage.getItem('userInfo'))
  const [notification, setNotification] = useState(null)
  // const [friendRequest, setFriendRequest] = useState([])
  // const [likes, setLikes] = useState([])
  // const [comments, setComments] = useState([])

  const userLogin = useSelector(state => state.userLogin);
  const { userInfo } = userLogin;
  useEffect(async() => {
    const res = await axios.get(`http://localhost:3333/api/users/getNotifications/${userInfo._id}`)
    // setNotification(res.data.data.friends)
  }, [])

  return notification?(

        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          open={userInfo ? modalSelecor : null}
          onClose={() => dispatch(toggleModal())}
          closeAfterTransition
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={modalSelecor}>
            <Box className="modalWindow">
              
            </Box>
          </Fade>
        </Modal>
  ) : (
      <div>waiting....</div>
  );
};

export default Notification;

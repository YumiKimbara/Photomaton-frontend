import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { commentModal } from "../actions/modalActions";

import axios from "axios";

import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  Avatar,
  IconButton,
} from "@mui/material";
import { MoreVertIcon } from "@mui/icons-material/MoreVert";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Collapse from "@mui/material/Collapse";
import Carousel from "react-material-ui-carousel";

import { styled, createTheme, ThemeProvider } from "@mui/material/styles";

import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";

import { v4 as uuidv4 } from "uuid";

const moment = require("moment-timezone");

// const LightTooltip = styled(({ className, ...props }) => (
//   <Tooltip {...props} classes={{ popper: className }} />
// ))(({ theme }) => ({
//   [`& .${tooltipClasses.tooltip}`]: {
//     backgroundColor: theme.palette.common.white,
//     color: "rgba(0, 0, 0, 0.87)",
//     boxShadow: theme.shadows[1],
//     fontSize: 11,
//   },
// }));

const customButtonTheme = createTheme({
  components: {
    MuiButton: {
      variants: [
        {
          props: { variant: "neonBtn" },
          style: {
            color: "#fff",
            boxShadow: "0 0 10px #2BC20E",
            fontSize: "12px",
            borderRadius: "50px",
            height: "4vh",
            fontFamily: "Zen Kaku Gothic New, sans-serif",
          },
        },
      ],
    },
  },
});

const customCardTheme = createTheme({
  components: {
    MuiTypography: {
      variants: [
        {
          props: { variant: "cardText" },
          style: {
            fontFamily: "Zen Kaku Gothic New, sans-serif",
          },
        },
      ],
    },
  },
});

const HomeCard = ({ postedData, setObjectId, avatarAndUserId }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userID = JSON.parse(localStorage.getItem("userInfo"))
    ? JSON.parse(localStorage.getItem("userInfo"))._id
    : "";
  // const modalSelecor = useSelector((state) => state.modalReducer.commentModal);
  // const loginSelecor = useSelector((state) => state.userLogin.userInfo);
  const [favorite, setFavorite] = useState(false);

  const timestamp = moment(postedData.createdAt)
    .utc()
    .local()
    .format("YYYY/MM/DD HH:mm");

  const favoriteHandler = () => {
    setFavorite((prev) => !prev);
  };

  // const submitCommentHandler = () => {
  //   objectId && console.log("objectId", objectId);

  //   if (comment) {
  //     axios
  //       .put("api/updatePost", {
  //         ...postedData,
  //         id: objectId,
  //         postedBy: loginSelecor.userName,
  //         comment: comment,
  //       })
  //       .then((res) => {
  //         console.log("res", res);
  //       })
  //       .catch((err) => console.error(err));
  //   }

  //   // axios
  //   //   .post("api/post", {
  //   //     userId: userId,
  //   //     content: content,
  //   //     imageUrl: imgUrls,
  //   //     userName: logIn.userInfo.userName,
  //   //   })
  //   //   .then((res) => {
  //   //     console.log("res", res);
  //   //     setCompletePosting(true);
  //   //   })
  //   //   .then(() => {
  //   //     clearNewPostHandler();
  //   //   })
  //   //   .catch((err) => console.error(err));
  // };

  return (
    <>
      <ThemeProvider theme={customCardTheme}>
        <Card sx={{ maxWidth: 414 }}>
          {avatarAndUserId &&
            avatarAndUserId.map((data) => {
              return (
                data.id === postedData.userId && (
                  <CardHeader
                    variant="cardText"
                    title={postedData.userName}
                    avatar={
                      <Avatar
                        onClick={() => navigate(`/profile/${data.id}`)}
                        alt="User's picture"
                        src={data.avatarUrl}
                      />
                    }
                    subheader={timestamp}
                  />
                )
              );
            })}
          <Carousel
            autoPlay={false}
            animation="slide"
            indicators={postedData.imageUrl.length === 1 ? false : true}
            navButtonsAlwaysInvisible={
              postedData.imageUrl.length === 1 ? true : false
            }
          >
            {postedData.imageUrl.map((image) => {
              return (
                <CardMedia
                  key={uuidv4()}
                  component="img"
                  height="280"
                  image={image}
                  alt="Posted image"
                />
              );
            })}
          </Carousel>
          <ThemeProvider theme={customButtonTheme}>
            <IconButton aria-label="add to favorites">
              {favorite ? (
                <FavoriteIcon variant="neonBtn" onClick={favoriteHandler} />
              ) : (
                <FavoriteBorderIcon
                  variant="neonBtn"
                  onClick={favoriteHandler}
                />
              )}
            </IconButton>
            <IconButton aria-label="open chatbox">
              <ChatBubbleOutlineIcon
                onClick={() => {
                  dispatch(commentModal());
                  setObjectId(postedData._id);
                }}
              />
            </IconButton>
          </ThemeProvider>
          <CardContent className="content">
            <Typography variant="cardText" color="text.secondary">
              {postedData.content}
            </Typography>
          </CardContent>
        </Card>
      </ThemeProvider>
    </>
  );
};

export default HomeCard;

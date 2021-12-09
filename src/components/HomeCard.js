import { useState, useMemo } from "react";
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

import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import SentimentDissatisfiedIcon from "@mui/icons-material/SentimentDissatisfied";
import SentimentSatisfiedIcon from "@mui/icons-material/SentimentSatisfied";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAltOutlined";
import SentimentVerySatisfiedIcon from "@mui/icons-material/SentimentVerySatisfied";
import ThumbUpAltOutlinedIcon from "@mui/icons-material/ThumbUpAltOutlined";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";

import { v4 as uuidv4 } from "uuid";

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

const HomeCard = ({ postedData }) => {
  const [favorite, setFavorite] = useState(false);
  // const customIcons = {
  //   1: {
  //     icon: <ThumbUpAltOutlinedIcon />,
  //     label: "ThumbUp",
  //   },
  //   2: {
  //     icon: <FavoriteIcon />,
  //     label: "Favorite",
  //   },
  //   3: {
  //     icon: <SentimentVeryDissatisfiedIcon />,
  //     label: "sad",
  //   },
  //   4: {
  //     icon: <SentimentSatisfiedAltIcon />,
  //     label: "Satisfied",
  //   },
  //   5: {
  //     icon: <SentimentVerySatisfiedIcon />,
  //     label: "Very Satisfied",
  //   },
  // };

  // function IconContainer({ value, ...other }) {
  //   return <span {...other}>{customIcons[value].icon}</span>;
  // }

  const favoriteHandler = () => {
    setFavorite((prev) => !prev);
  };

  console.log(postedData.userName);

  return (
    <>
      <ThemeProvider theme={customCardTheme}>
        <Card sx={{ maxWidth: 414 }}>
          <CardHeader
            variant="cardText"
            avatar={
              <Avatar alt="User's picture" src={postedData.imageUrl[0]} />
            }
            title={postedData.userName}
            subheader="September 14, 2016"
          />
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

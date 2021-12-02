import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  Avatar,
  IconButton,
  Rating,
  Tooltip,
  tooltipClasses,
  Button,
} from "@mui/material";
import { MoreVertIcon } from "@mui/icons-material/MoreVert";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Collapse from "@mui/material/Collapse";

import { styled, createTheme, ThemeProvider } from "@mui/material/styles";

import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import SentimentDissatisfiedIcon from "@mui/icons-material/SentimentDissatisfied";
import SentimentSatisfiedIcon from "@mui/icons-material/SentimentSatisfied";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAltOutlined";
import SentimentVerySatisfiedIcon from "@mui/icons-material/SentimentVerySatisfied";
import ThumbUpAltOutlinedIcon from "@mui/icons-material/ThumbUpAltOutlined";

const LightTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.common.white,
    color: "rgba(0, 0, 0, 0.87)",
    boxShadow: theme.shadows[1],
    fontSize: 11,
  },
}));

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
  const customIcons = {
    1: {
      icon: <ThumbUpAltOutlinedIcon />,
      label: "ThumbUp",
    },
    2: {
      icon: <FavoriteIcon />,
      label: "Favorite",
    },
    3: {
      icon: <SentimentVeryDissatisfiedIcon />,
      label: "sad",
    },
    4: {
      icon: <SentimentSatisfiedAltIcon />,
      label: "Satisfied",
    },
    5: {
      icon: <SentimentVerySatisfiedIcon />,
      label: "Very Satisfied",
    },
  };

  function IconContainer({ value, ...other }) {
    return <span {...other}>{customIcons[value].icon}</span>;
  }

  return (
    <>
      <ThemeProvider theme={customCardTheme}>
        <Card sx={{ maxWidth: 414 }}>
          <CardHeader
            variant="cardText"
            avatar={
              <Avatar alt="User's picture" src={postedData.userImageUrl}>
                R
              </Avatar>
            }
            title="Shrimp and Chorizo Paella"
            subheader="September 14, 2016"
          />
          <CardMedia
            component="img"
            height="194"
            image={postedData.imgUrl}
            alt="Posted image"
          />
          <ThemeProvider theme={customButtonTheme}>
            <IconButton aria-label="add to favorites">
              <LightTooltip
                title={
                  <>
                    <Rating
                      name="highlight-selected-only"
                      IconContainerComponent={IconContainer}
                      highlightSelectedOnly
                    />
                  </>
                }
                placement="top"
              >
                <div className="buttonWrapper">
                  <Button variant="neonBtn">Like</Button>
                </div>
              </LightTooltip>
            </IconButton>
          </ThemeProvider>
          <CardContent>
            <Typography variant="cardText" color="text.secondary">
              {postedData.text}
            </Typography>
          </CardContent>
        </Card>
      </ThemeProvider>
    </>
  );
};

export default HomeCard;

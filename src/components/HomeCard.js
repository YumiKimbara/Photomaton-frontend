import {Card, CardHeader, CardMedia, CardContent, CardActions, Avatar, IconButton, Rating, Tooltip, tooltipClasses, Button} from '@mui/material';
import {MoreVertIcon} from '@mui/icons-material/MoreVert';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Collapse from '@mui/material/Collapse';

import { styled } from '@mui/material/styles';

import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import SentimentDissatisfiedIcon from '@mui/icons-material/SentimentDissatisfied';
import SentimentSatisfiedIcon from '@mui/icons-material/SentimentSatisfied';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAltOutlined';
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied';
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';


const LightTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.common.white,
    color: 'rgba(0, 0, 0, 0.87)',
    boxShadow: theme.shadows[1],
    fontSize: 11,
  },
}));

const HomeCard = ({postedData}) => {

 const customIcons = {
  1: {
    icon: <ThumbUpAltOutlinedIcon />,
    label: 'ThumbUp',
  },
  2: {
    icon: <FavoriteIcon />,
    label: 'Favorite',
  },
  3: {
    icon: <SentimentVeryDissatisfiedIcon />,
    label: 'sad',
  },
  4: {
    icon: <SentimentSatisfiedAltIcon />,
    label: 'Satisfied',
  },
  5: {
    icon: <SentimentVerySatisfiedIcon />,
    label: 'Very Satisfied',
  },
};

function IconContainer({value, ...other}) {
  return <span {...other}>{customIcons[value].icon}</span>;
}

    return (
        <>
     <Card sx={{ maxWidth: 345 }}>
      <CardHeader
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
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {postedData.text}
        </Typography>
      </CardContent>
        <IconButton aria-label="add to favorites">
          <LightTooltip title={
             <>
            <Rating
              name="highlight-selected-only"
              IconContainerComponent={IconContainer}
              highlightSelectedOnly
            />
          </>
          } placement="top">
          <Button>Like</Button>
          </LightTooltip>
        </IconButton>
    </Card>
  </>
  )
}

export default HomeCard;
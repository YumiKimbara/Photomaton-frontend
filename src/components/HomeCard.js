import {Card, CardHeader, CardMedia, CardContent, CardActions, Avatar, IconButton} from '@mui/material';
import {MoreVertIcon} from '@mui/icons-material/MoreVert';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Collapse from '@mui/material/Collapse';

const HomeCard = () => {

  const imgUrl = "https://media.istockphoto.com/photos/colorful-autumn-landscape-of-a-modern-city-by-the-river-picture-id896667814?k=20&m=896667814&s=612x612&w=0&h=ml5BaUKT14TnbZDwypUbgg-D8H0b6zj65QDIgAisVE0="
  const userImageUrl = "https://media.istockphoto.com/photos/learn-to-love-yourself-first-picture-id1291208214?k=20&m=1291208214&s=612x612&w=0&h=WbHbwklzP81iAWV0dPlQWuBLxnbqJFk81a9OZG6qvSM="

    return (
        <>
     <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar alt="User's picture" src={userImageUrl}>
            R
          </Avatar>
        }
        title="Shrimp and Chorizo Paella"
        subheader="September 14, 2016"
      />
      <CardMedia
        component="img"
        height="194"
        image={imgUrl}
        alt="Posted image"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the mussels,
          if you like.
        </Typography>
      </CardContent>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
    </Card>
  </>
  )
}

export default HomeCard;
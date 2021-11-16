import {Grid} from '@mui/material';

import HomeCard from "./HomeCard.js";
import Story from "./Story.js";


const Home = () => {

const dummyData = [
  {userImageUrl: "https://media.istockphoto.com/photos/learn-to-love-yourself-first-picture-id1291208214?k=20&m=1291208214&s=612x612&w=0&h=WbHbwklzP81iAWV0dPlQWuBLxnbqJFk81a9OZG6qvSM=",
          imgUrl: "https://media.istockphoto.com/photos/colorful-autumn-landscape-of-a-modern-city-by-the-river-picture-id896667814?k=20&m=896667814&s=612x612&w=0&h=ml5BaUKT14TnbZDwypUbgg-D8H0b6zj65QDIgAisVE0=",
          text: 'user 1 text'},
  {userImageUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGVyc29ufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60",
          imgUrl: "https://media.istockphoto.com/photos/downtown-or-island-picture-id962362664?b=1&k=20&m=962362664&s=170667a&w=0&h=7gTyErl0xDcPE1vj834rpt8rzzdfoNu-VdKolOnGo6I=",
          text: 'user 2 text'},
  {userImageUrl: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHBlcnNvbnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60",
          imgUrl: "https://images.unsplash.com/photo-1609825488888-3a766db05542?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8dmFuY291dmVyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60",
          text: 'user 3 text'},
  {userImageUrl: "https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHBlcnNvbnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60",
          imgUrl: "https://images.unsplash.com/photo-1544161513-0179fe746fd5?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8dmFuY291dmVyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60",
          text: 'user 4 text'},
  {userImageUrl: "https://media.istockphoto.com/photos/learn-to-love-yourself-first-picture-id1291208214?k=20&m=1291208214&s=612x612&w=0&h=WbHbwklzP81iAWV0dPlQWuBLxnbqJFk81a9OZG6qvSM=",
          imgUrl: "https://media.istockphoto.com/photos/colorful-autumn-landscape-of-a-modern-city-by-the-river-picture-id896667814?k=20&m=896667814&s=612x612&w=0&h=ml5BaUKT14TnbZDwypUbgg-D8H0b6zj65QDIgAisVE0=",
          text: 'user 1 text'},
  {userImageUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGVyc29ufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60",
          imgUrl: "https://media.istockphoto.com/photos/downtown-or-island-picture-id962362664?b=1&k=20&m=962362664&s=170667a&w=0&h=7gTyErl0xDcPE1vj834rpt8rzzdfoNu-VdKolOnGo6I=",
          text: 'user 2 text'},
  {userImageUrl: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHBlcnNvbnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60",
          imgUrl: "https://images.unsplash.com/photo-1609825488888-3a766db05542?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8dmFuY291dmVyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60",
          text: 'user 3 text'},
  {userImageUrl: "https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHBlcnNvbnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60",
          imgUrl: "https://images.unsplash.com/photo-1544161513-0179fe746fd5?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8dmFuY291dmVyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60",
          text: 'user 4 text'},
  {userImageUrl: "https://media.istockphoto.com/photos/learn-to-love-yourself-first-picture-id1291208214?k=20&m=1291208214&s=612x612&w=0&h=WbHbwklzP81iAWV0dPlQWuBLxnbqJFk81a9OZG6qvSM=",
          imgUrl: "https://media.istockphoto.com/photos/colorful-autumn-landscape-of-a-modern-city-by-the-river-picture-id896667814?k=20&m=896667814&s=612x612&w=0&h=ml5BaUKT14TnbZDwypUbgg-D8H0b6zj65QDIgAisVE0=",
          text: 'user 1 text'},
  {userImageUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGVyc29ufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60",
          imgUrl: "https://media.istockphoto.com/photos/downtown-or-island-picture-id962362664?b=1&k=20&m=962362664&s=170667a&w=0&h=7gTyErl0xDcPE1vj834rpt8rzzdfoNu-VdKolOnGo6I=",
          text: 'user 2 text'},
  {userImageUrl: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHBlcnNvbnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60",
          imgUrl: "https://images.unsplash.com/photo-1609825488888-3a766db05542?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8dmFuY291dmVyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60",
          text: 'user 3 text'},
  {userImageUrl: "https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHBlcnNvbnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60",
          imgUrl: "https://images.unsplash.com/photo-1544161513-0179fe746fd5?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8dmFuY291dmVyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60",
          text: 'user 4 text'},
  {userImageUrl: "https://media.istockphoto.com/photos/learn-to-love-yourself-first-picture-id1291208214?k=20&m=1291208214&s=612x612&w=0&h=WbHbwklzP81iAWV0dPlQWuBLxnbqJFk81a9OZG6qvSM=",
          imgUrl: "https://media.istockphoto.com/photos/colorful-autumn-landscape-of-a-modern-city-by-the-river-picture-id896667814?k=20&m=896667814&s=612x612&w=0&h=ml5BaUKT14TnbZDwypUbgg-D8H0b6zj65QDIgAisVE0=",
          text: 'user 1 text'},
  {userImageUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGVyc29ufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60",
          imgUrl: "https://media.istockphoto.com/photos/downtown-or-island-picture-id962362664?b=1&k=20&m=962362664&s=170667a&w=0&h=7gTyErl0xDcPE1vj834rpt8rzzdfoNu-VdKolOnGo6I=",
          text: 'user 2 text'},
  {userImageUrl: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHBlcnNvbnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60",
          imgUrl: "https://images.unsplash.com/photo-1609825488888-3a766db05542?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8dmFuY291dmVyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60",
          text: 'user 3 text'},
  {userImageUrl: "https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHBlcnNvbnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60",
          imgUrl: "https://images.unsplash.com/photo-1544161513-0179fe746fd5?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8dmFuY291dmVyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60",
          text: 'user 4 text'}
]

  return (
    <>
    <div className="homeWrapper">
      <Story/>
      <Grid container spacing={0}>
      {dummyData && dummyData.map((data) => {
      return <Grid item xs={12} sm={6} md={3} paddingTop={'10px'} paddingBottom={'10px'} ><HomeCard postedData={data} borderRadius={'0px'}/></Grid>
      })}
      </Grid>
    </div>
    </>
  );
};

export default Home;

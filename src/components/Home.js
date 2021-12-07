import { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import HomeCard from "./HomeCard.js";
import Story from "./Story.js";
import axios from "axios";

const Home = () => {
  const [allPosts, setAllPosts] = useState("");
  useEffect(() => {
    const getAllPosts = async () => {
      const { data } = await axios.get("api/post");
      console.log("allPosts", data);
      setAllPosts(data);
    };
    getAllPosts();
  }, []);

  return (
    <>
      <div className="homeWrapper">
        <Story />
        <Grid container spacing={0} direction="column-reverse">
          {allPosts &&
            allPosts.map((post) => {
              console.log("post", post);
              return (
                <Grid
                  item
                  xs={12}
                  sm={6}
                  md={3}
                  paddingTop={"10px"}
                  paddingBottom={"10px"}
                >
                  <HomeCard
                    postedData={post}
                    // allPostsData={allPosts}
                    borderRadius={"0px"}
                  />
                </Grid>
              );
            })}
        </Grid>
      </div>
    </>
  );
};

export default Home;

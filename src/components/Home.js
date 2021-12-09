import { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import HomeCard from "./HomeCard.js";
import Story from "./Story.js";
import axios from "axios";
import InfiniteScroll from "react-infinite-scroll-component";
import { v4 as uuidv4 } from "uuid";

const Home = () => {
  const [allPosts, setAllPosts] = useState("");
  const [hasMore, setHasMore] = useState(true);
  const [loadedPostsNum, setLoadedPostsNum] = useState(5);
  const [loadedPosts, setLoadedPosts] = useState("");

  useEffect(() => {
    const getAllPosts = async () => {
      const { data } = await axios.get("api/post");
      setAllPosts(data);
      setLoadedPosts(data.slice(0, loadedPostsNum));
    };
    getAllPosts();
  }, []);

  const fetchMoreData = () => {
    if (loadedPosts.length === allPosts.length) {
      setHasMore(false);
      return;
    } else if (loadedPosts.length <= allPosts.length) {
      setLoadedPostsNum((prev) => (prev += 5));
      setLoadedPosts(allPosts.slice(0, loadedPostsNum));
    }
  };

  return (
    <>
      <div className="homeWrapper">
        <Story />
        <InfiniteScroll
          dataLength={loadedPosts}
          next={fetchMoreData}
          hasMore={hasMore}
          loader={<h4 className="loading">Loading...</h4>}
          endMessage={
            <p className="loaded">
              <b>End of posts</b>
            </p>
          }
        >
          <Grid container spacing={0} direction="column-reverse">
            {loadedPosts &&
              loadedPosts.map((post) => {
                return (
                  <Grid
                    key={uuidv4()}
                    item
                    xs={12}
                    sm={6}
                    md={3}
                    paddingTop={"10px"}
                    paddingBottom={"10px"}
                  >
                    <HomeCard postedData={post} borderRadius={"0px"} />
                  </Grid>
                );
              })}
          </Grid>
        </InfiniteScroll>
      </div>
    </>
  );
};

export default Home;

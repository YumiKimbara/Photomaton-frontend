import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Grid, Box, Modal, Fade, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import HomeCard from "./HomeCard.js";
import Story from "./Story.js";
import axios from "axios";
import InfiniteScroll from "react-infinite-scroll-component";
import { v4 as uuidv4 } from "uuid";
import { commentModal } from "../actions/modalActions";

const Home = () => {
  const dispatch = useDispatch();
  const modalSelecor = useSelector((state) => state.modalReducer.commentModal);
  const loginSelecor = useSelector((state) => state.userLogin.userInfo);

  const [allPosts, setAllPosts] = useState("");
  const [hasMore, setHasMore] = useState(true);
  const [loadedPostsNum, setLoadedPostsNum] = useState(5);
  const [loadedPosts, setLoadedPosts] = useState("");
  const [comment, setComment] = useState(null);
  const [objectId, setObjectId] = useState(null);

  useEffect(() => {
    const getAllPosts = async () => {
      const { data } = await axios.get("api/post");
      setAllPosts(data);
      setLoadedPosts(data.reverse().slice(0, loadedPostsNum));
    };
    getAllPosts();
  }, []);

  const fetchMoreData = () => {
    if (loadedPosts.length === allPosts.length) {
      setHasMore(false);
      return;
    } else if (loadedPosts.length <= allPosts.length) {
      setLoadedPostsNum((prev) => (prev += 5));
      setLoadedPosts(allPosts.reverse().slice(0, loadedPostsNum));
    }
  };

  const submitCommentHandler = () => {
    const selectedPost =
      allPosts && !allPosts.data
        ? allPosts.filter((post) => {
            return post._id === objectId;
          })
        : allPosts.data
        ? allPosts.data.filter((post) => {
            return post._id === objectId;
          })
        : "";

    if (comment) {
      axios
        .put("api/updatePost", {
          ...selectedPost[0],
          id: objectId,
          userCommentId: loginSelecor._id,
          postedBy: loginSelecor.userName,
          comment: comment,
        })
        .then((res) => {
          console.log("res", res);
          axios.get("api/post").then((data) => {
            setAllPosts(data);
          });
        })
        .catch((err) => console.error(err));
    }
  };

  const navigate = useNavigate();
  const userLogin = useSelector((state) => state.userLogin);
  const { loading, error, userInfo } = userLogin;

  // User Login Check, if the user is not logged in, redirect to login page
  useEffect(() => {
    if (userInfo) {
      navigate("/");
    } else {
      navigate("/login");
    }
  }, [userInfo]);

  return (
    <>
      <div className="homeWrapper">
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          open={modalSelecor}
          onClose={() => dispatch(commentModal())}
          closeAfterTransition
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={modalSelecor}>
            <Box className="modalWindow">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  submitCommentHandler();
                }}
              >
                <label htmlFor="comment">Comments</label>
                <input
                  type="text"
                  name="comment"
                  id="comment"
                  placeholder="write your comment here..."
                  onChange={(e) => setComment(e.target.value)}
                />
                <Button
                  onClick={(e) => {
                    e.preventDefault();
                    submitCommentHandler();
                  }}
                >
                  Submit
                </Button>
              </form>
              <div>
                {allPosts && !allPosts.data
                  ? allPosts.map((post) => {
                      if (post._id === objectId) {
                        console.log(post);
                        return (
                          post.comment &&
                          post.comment.map((comm) => {
                            return <p>{comm.text}</p>;
                          })
                        );
                      }
                    })
                  : allPosts.data
                  ? allPosts.data.map((post) => {
                      if (post._id === objectId) {
                        console.log(post);
                        return (
                          post.comment &&
                          post.comment.map((comm) => {
                            return <p>{comm.text}</p>;
                          })
                        );
                      }
                    })
                  : ""}
              </div>
            </Box>
          </Fade>
        </Modal>
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
          <Grid container spacing={0} direction="column">
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
                    <HomeCard
                      postedData={post}
                      setObjectId={setObjectId}
                      borderRadius={"0px"}
                    />
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

// {allPosts.length !== 0
// ? allPosts.map((post) => {
//     if (post._id === objectId) {
//       return (
//         post.comment &&
//         post.comment.map((comm) => {
//           return <p>{comm.text}</p>;
//         })
//       );
//     }
//   })
// : ""}

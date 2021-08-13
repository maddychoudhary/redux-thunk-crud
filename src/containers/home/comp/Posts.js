import React, { useEffect } from "react";
import PostCard from "./PostCard";
import { useSelector, useDispatch } from "react-redux";
import { getPosts } from "../../../actions/postAction"

const Posts = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.post.posts);
  const isLoading = useSelector((state) => state.post.isLoading);
  const error = useSelector((state) => state.post.error);
  useEffect(() => {
    dispatch(getPosts());
  }, [])
  return (
    <>
      {(() => {
        if (isLoading) {
          return <h1>loading..............</h1>
        } else if (error) {
          return <h1>error...........</h1>
        } else {
          return <div className="row">
            {posts.map((postItem) => (
              <PostCard postItem={postItem} />
            ))}
          </div>
        }
      })()}
    </>
  );
};

export default Posts;

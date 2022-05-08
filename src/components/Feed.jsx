import React from "react";
import Box from "@mui/material/Box";
import Post from "./Post";

const Feed = () => {
  return (
    <Box flex={4} p={2}>
      <Post imageSrc="https://cdn.pixabay.com/photo/2016/08/11/23/48/mountains-1587287_960_720.jpg" />
      <Post imageSrc="https://cdn.pixabay.com/photo/2022/03/30/15/52/gerbera-7101430_960_720.jpg" />
      <Post imageSrc="https://cdn.pixabay.com/photo/2021/10/14/11/40/sea-6708858_960_720.jpg" />
      <Post imageSrc="https://cdn.pixabay.com/photo/2012/03/01/00/55/garden-19830_960_720.jpg" />
      <Post imageSrc="https://cdn.pixabay.com/photo/2012/06/19/10/32/owl-50267_960_720.jpg" />
      <Post imageSrc="https://cdn.pixabay.com/photo/2013/10/09/02/27/lake-192990_960_720.jpg" />
    </Box>
  );
};

export default Feed;

import { Box } from '@mui/material'
import React from 'react'
import Post from './Post'

const Feedbar = () => {

  const postData = [
    { image: './images/img1.jpg', title: "Neha Rajput" },
    { image: './images/img2.jpg', title: "Saurabh Rajput" },
    { image: './images/img3.png', title: "Bhavesh Rajput" },
    { image: './images/img4.png', title: "Manisha Rajput" },
    { image: './images/img5.jpg', title: "Megha Rajput" },
    { image: './images/img6.jpg', title: "Ramesh Rajput" },
    { image: './images/img7.jpg', title: "Khishika Rajput" },
    { image: './images/img8.jpg', title: "Vijay Rajput" }
  ]

  return (
    <Box flex={4} p={2}>
      {
        postData.map((post, index) => (
          <Post
            key={index}
            image={post.image}
            title={post.title}
          />
        ))
      }
    </Box>
  )
}

export default Feedbar

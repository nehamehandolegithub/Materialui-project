import { Avatar, AvatarGroup, Box, Typography,ImageList,ImageListItem,List,ListItem,Divider,ListItemText,ListItemAvatar } from '@mui/material'
import React from 'react'

const Rightbar = () => {
  return (
    <Box flex={2} p={2} sx={{ display: { xs: 'none', sm: 'none', md: 'block' } }}>
      <Box position="fixed" width={320}>
        <Typography variant='h6' fontWeight={100}>Online Friends</Typography>
        <AvatarGroup max={7}>
          <Avatar alt="Remy Sharp" src="https://picsum.photos/200/300" />
          <Avatar alt="Travis Howard" src="https://picsum.photos/201/300" />
          <Avatar alt="Cindy Baker" src="https://picsum.photos/200/301" />
          <Avatar alt="Agnes Walker" src="https://picsum.photos/202/300" />
          <Avatar alt="Trevor Henderson" src="https://picsum.photos/200/302" />
          <Avatar alt="Agnes Walker" src="https://picsum.photos/204/300" />
          <Avatar alt="Trevor Henderson" src="https://picsum.photos/200/304" />
          <Avatar alt="Agnes Walker" src="https://picsum.photos/205/300" />
          <Avatar alt="Trevor Henderson" src="https://picsum.photos/200/305" />
          <Avatar alt="Saurabh rajput" src="https://picsum.photos/206/300" />
          <Avatar alt="Neha rajput" src="https://picsum.photos/200/306" />
          <Avatar alt="Megha chavhan" src="https://picsum.photos/207/300" />
          <Avatar alt="Khushika chavhan" src="https://picsum.photos/200/307" />
        </AvatarGroup>

        <Typography variant='h6' fontWeight={100} mt={2} mb={2}>Latest Images</Typography>
        <ImageList cols={3} rowHeight={164} gap={5}>
          <ImageListItem>
            <img
              src="https://picsum.photos/200/300"
              alt="" />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://picsum.photos/201/300"
              alt="" />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://picsum.photos/200/301"
              alt="" />
          </ImageListItem>
        </ImageList>

        <Typography variant='h6' fontWeight={100} mt={2} mb={2}>Latest Conversation</Typography>
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Brunch this weekend?"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: 'inline' }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Ali Connors
                  </Typography>
                  {" — I'll be in your neighborhood doing errands this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Summer BBQ"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: 'inline' }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    to Scott, Alex, Jennifer
                  </Typography>
                  {" — Wish I could come, but I'm out of town this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Oui Oui"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: 'inline' }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Sandra Adams
                  </Typography>
                  {' — Do you have Paris recommendations? Have you ever…'}
                </React.Fragment>
              }
            />
          </ListItem>
        </List>
      </Box>
    </Box>
  )
}

export default Rightbar

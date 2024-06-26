import React, { useState } from 'react'
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import { Avatar, Box, Button, ButtonGroup, Modal, Stack, TextField, Tooltip, Typography, styled } from '@mui/material';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import ImageIcon from '@mui/icons-material/Image';
import VideoCameraBackIcon from '@mui/icons-material/VideoCameraBack';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import DateRangeIcon from '@mui/icons-material/DateRange';

const Add = () => {

    const [open, setOpen] = useState(false);

    const StyledModel = styled(Modal)({
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    })

    const UserBox = styled(Box)({
        display: "flex",
        alignItems: "center",
        gap: "10px",
        marginBottom: "20px"
    })

    return (
        <>
            <Tooltip title="Delete" sx={{ position: "fixed", bottom: 20, left: { xs: "calc(50% - 25px)", md: 30 } }} onClick={() => setOpen(true)}>
                <Fab color="primary" aria-label="add">
                    <AddIcon />
                </Fab>
            </Tooltip>

            <StyledModel
                open={open}
                onClose={() => setOpen(false)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box width={400} height={280} bgcolor={"background.default"} color={"text.primary"} borderRadius={4} padding={4}>
                    <Typography variant='h6' color='gray' textAlign="center">Create Post</Typography>
                    <UserBox>
                        <Avatar src="https://picsum.photos/200" sx={{ width: 30, height: 30 }} />
                        <Typography variant='span' fontWeight={500}>John Doe</Typography>
                    </UserBox>
                    <TextField sx={{ width: '100%' }}
                        id="standard-multiline-static"
                        multiline
                        rows={4}
                        placeholder="What's going on your mind"
                        variant="standard"
                    />
                    <Stack direction='row' mt={2} mb={2} gap={1}>
                        <EmojiEmotionsIcon color='primary' />
                        <ImageIcon color='secondary' />
                        <VideoCameraBackIcon color='success' />
                        <PersonAddIcon color='error' />
                    </Stack>
                    <ButtonGroup fullWidth variant="contained" aria-label="Basic button group">
                        <Button>Post</Button>
                        <Button sx={{width:'100px'}}><DateRangeIcon /></Button>
                    </ButtonGroup>
                </Box>
            </StyledModel>
        </>
    )
}

export default Add

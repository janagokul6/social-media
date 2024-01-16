import React, { useState } from 'react'
import { Avatar, Box, Button, ButtonGroup, Fab, Modal, Stack, TextField, Tooltip, Typography, styled } from '@mui/material'
import AddIcon from '@mui/icons-material/Add';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import VideoCameraBackIcon from '@mui/icons-material/VideoCameraBack';
import ImageIcon from '@mui/icons-material/Image';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import DateRangeIcon from '@mui/icons-material/DateRange';

const popUpDivStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: { lg: '45%', sm: '55%', md: '68%', xs: '72%' },
    border: '1px solid #001',
    borderRadius: 1.5,
    boxShadow: 24,
    p: 4,
}

const UserBox = styled(Box)({
    display: 'flex',
    alignItems: 'center',
    gap: 5,
})

const AddPost = () => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);


    return (
        <> <Tooltip title="New Post" onClick={handleOpen} sx={{
            position: "fixed", left: { sm: '2.5%', lg: '2.5%' }, right: { xs: '3%' }, bottom: '2%', bgcolor: 'blue',
            '&:hover': { bgcolor: '#d676eb' }
        }}>
            <Fab aria-label="add">
                < AddIcon sx={{ color: 'white' }} />
            </Fab>
        </Tooltip>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={popUpDivStyle} bgcolor={'background.default'} color={'text.primary'}>
                    <Typography variant="h6" component="h2" textAlign={'center'} color={'gray'} fontWeight={'700'}>
                        Create New Post
                    </Typography>
                    <UserBox>
                        <Avatar alt="Remy Sharp"
                            src='#'
                        />
                        <Typography fontWeight={500} variant='subtitle1'>Jhon Duo</Typography>
                    </UserBox>
                    <TextField fullWidth multiline minRows={2} sx={{ display: 'block', mt: 3 }}
                        placeholder="What's on your Mind" variant="standard"
                    />
                    <Stack direction={'row'} gap={1.5} mt={2} mb={3} >
                        <EmojiEmotionsIcon color='primary' />
                        <ImageIcon sx={{ color: '#9434a4' }} />
                        <VideoCameraBackIcon sx={{ color: '#1bcc45' }} />
                        <PersonAddAlt1Icon sx={{ color: '#ff5722' }} />
                    </Stack>

                    <Stack>
                        <ButtonGroup fullWidth variant="contained" aria-label="outlined primary button group">
                            <Button>Post</Button>
                            <Button sx={{width:'15%'}}><DateRangeIcon /></Button>
                        </ButtonGroup>

                    </Stack>

                </Box>
            </Modal>

        </>
    )
}

export default AddPost
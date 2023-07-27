'use client'
import React from 'react'

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Credits from './Credits';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    fontFamily: 'monospace',
  };

const Footer = () => {

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);



  return (
    <>
    <div id="footer-wrapper" className=' flex flex-col items-center mt-10 mb-4 gap-y-5'>
        <div id="foo-links" className=' text-slate-400 flex gap-x-6'>
            <a href="https://github.com/mayurmarvel/IToolkit">Github</a>
            <button onClick={handleOpen} type="button"> Support</button>

        <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h1">
            Support this Project !
          </Typography>
          <Typography  id="modal-modal-description" sx={{ mt: 2 }}>
            BTC : bc1qz4y0967rzq47fjjfpgjm87324k2awyqjjfnyad
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Lightning BTC : mayur@getalby.com
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Telegram : @MayurMarvel
          </Typography>
        </Box>
      </Modal>


            <a href="https://github.com/mayurmarvel/IToolkit">Suggest a tool</a>

            <Credits />
        </div>
        <p> Made with ❤ by  <a href="https://github.com/mayurmarvel">Mayur</a> </p>


    </div>
    </>
  )
}

export default Footer
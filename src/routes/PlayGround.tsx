import React from 'react'
import { Box } from '@mui/material'
import Navbar from '@components/common/Navbar'
import Main from '@components/playGround/Main'
import Footer from '@components/common/Footer'

const PlayGround = () => {
  return (
    <Box
      height='100%'
      width='100%'
      display='flex'
      alignItems='center'
      flexDirection='column'
    >
      <Navbar />
      <Main />
      <Footer />
    </Box>
  )
}

export default PlayGround

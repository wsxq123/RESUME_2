import React from 'react'
import { Box } from '@mui/material'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'

const PriceComparator = () => {


  return (
  <Box>
    <Box display="flex" gap={2}>
      <CompareItem />
    </Box>
    <Divider component="div" sx={{ my: 2 }} />
    <Box display="flex" gap={2}>
      <AddedItem />
    </Box>
  </Box>
  )
}

export default PriceComparator

const CompareItem = () => {
  return (
    <Box display="flex" gap={2} width="600px">
      <TextField id="outlined-basic" label="label" variant="outlined" />
      <TextField id="outlined-basic" label="unit" variant="outlined" />
      <TextField id="outlined-basic" label="price" variant="outlined" />
      <Button>Add</Button>
    </Box>
  )
}

const AddedItem = () => {
  return (
    <Box display="flex" gap={2} width="600px">
      <TextField id="outlined-basic" label="label" variant="standard" disabled />
      <TextField id="outlined-basic" label="unit" variant="standard" disabled />
      <TextField id="outlined-basic" label="price" variant="standard" disabled />
      <Button>Delete</Button>
    </Box>
  )
}
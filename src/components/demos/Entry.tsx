import { Stack, Divider, Box, Button } from '@mui/material';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Login from './member/Login';
import Register from './member/Register';

const Entry = () => {
  const [page, setPage] = useState(0);

  function handlePage(pageNum: number): void {
    setPage(pageNum);
  }

  return (
    <Stack
      direction='row'
      spacing={2}
      width='80%'
      height='60vh'
      m='70px 0px'
      divider={<Divider orientation='vertical' flexItem />}
    >
      <Box width='50%'>
        {page === 0 && <Login handlePage={handlePage} />}
        {page === 1 && <Register handlePage={handlePage} />}
      </Box>
      <Box
        width='50%'
        display='flex'
        justifyContent='center'
        alignItems='center'
      >
        <Button
          sx={{ width: '80%' }}
          variant='outlined'
          component={Link}
          to={'/demos/backend'}
        >
          Backend System
        </Button>
      </Box>
    </Stack>
  );
};

export default Entry;

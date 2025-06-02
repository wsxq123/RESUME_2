import Navbar from '@components/common/Navbar';
import Footer from '@components/common/Footer';
import { Box } from '@mui/material';
import { Outlet } from 'react-router-dom';

const demos = () => {
  return (
    <Box
      height='100%'
      width='100%'
      display='flex'
      alignItems='center'
      flexDirection='column'
    >
      <Navbar />
      <Outlet />
      <Footer />
    </Box>
  );
};

export default demos;

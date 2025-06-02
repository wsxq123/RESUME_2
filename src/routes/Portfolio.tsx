import Navbar from '@components/common/Navbar';
import Footer from '@components/common/Footer';
import Main from '@components/portfolio/Main';
import { Box } from '@mui/material';

const portfolio = () => {
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
  );
};

export default portfolio;

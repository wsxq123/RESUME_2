import Navbar from '@components/common/Navbar';
import Footer from '@components/common/Footer';
import Main from '@components/resume/Main';
import { Box } from '@mui/material';

const resume = () => {
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

export default resume;

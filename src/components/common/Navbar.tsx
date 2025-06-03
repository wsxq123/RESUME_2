import { Box, Button, Divider, Grid2 } from '@mui/material';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const navBtnList = [
    { id: 0, text: 'Resume', link: '/' },
    { id: 1, text: 'Portfolio', link: '/portfolio' },
    { id: 2, text: 'Demo', link: '/demos/entry' },
    // { id: 3, text: 'Language', link: '/' },  //TODO -i18n
  ];

  return (
    <Box
      width='100%'
      height='60px'
      display='flex'
      flexDirection='column'
      justifyContent='space-around'
    >
      <Grid2 container spacing={2}>
        <Grid2 size='grow' />
        {navBtnList.map((item) => (
          <Grid2 key={item.id} size={1} display='flex' justifyContent='center'>
            <Button key={item.id} component={Link} to={item.link}>
              {item.text}
            </Button>
          </Grid2>
        ))}
      </Grid2>
      <Divider />
    </Box>
  );
};

export default Navbar;

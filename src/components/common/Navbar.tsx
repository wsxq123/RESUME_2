import { Box, Button, Divider, Grid2 } from '@mui/material';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const { i18n } = useTranslation();
  const [changToLang, setChangToLang] = useState('en');

  function handleLangBtn(lng: string) {
    i18n.changeLanguage(lng);

    if (changToLang === 'en') {
      setChangToLang('zh_tw');
    } else {
      setChangToLang('en');
    }
  }

  const navBtnList = [
    { id: 0, text: 'Resume', link: '/' },
    { id: 1, text: 'Portfolio', link: '/portfolio' },
    { id: 2, text: 'Demo', link: '/demos/entry' },
    {
      id: 3,
      text: changToLang,
      click: handleLangBtn,
    },
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
            {item.link ? (
              <Button key={item.id} component={Link} to={item.link}>
                {item.text}
              </Button>
            ) : (
              <Button key={item.id} onClick={() => handleLangBtn(changToLang)}>
                {item.text}
              </Button>
            )}
          </Grid2>
        ))}
      </Grid2>
      <Divider />
    </Box>
  );
};

export default Navbar;

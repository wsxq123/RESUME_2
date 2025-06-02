import { Avatar, Divider, Grid2, IconButton, Typography } from '@mui/material';
import avatarPng from '@assets/avatar.jpg';
import Linkedin from '@mui/icons-material/Linkedin';
import GitHubIcon from '@mui/icons-material/GitHub';
import WebIcon from '@mui/icons-material/Web';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import EmailIcon from '@mui/icons-material/Email';
import SchoolIcon from '@mui/icons-material/School';
import PersonIcon from '@mui/icons-material/Person';
import CakeIcon from '@mui/icons-material/Cake';
import SmartphoneIcon from '@mui/icons-material/Smartphone';

interface InfoBasicProps {
  id: number;
  icon: JSX.Element;
  text: string;
}

interface InfoIconBtnProps {
  id: number;
  icon: JSX.Element;
  link: string;
}

const Pic = ({ name }: { name: string }) => {
  return (
    <Grid2
      size='grow'
      display='flex'
      flexDirection='column'
      justifyContent='center'
      alignItems='center'
    >
      <Avatar
        alt='avatarPng'
        src={avatarPng}
        sx={{ width: 150, height: 150 }}
      />

      <Typography variant='h5' gutterBottom mt='30px'>
        {name}
      </Typography>
    </Grid2>
  );
};

const Info = ({
  infoBasicList,
  infoIconBtnList,
  handleIconBtnClick,
}: {
  infoBasicList: InfoBasicProps[];
  infoIconBtnList: InfoIconBtnProps[];
  handleIconBtnClick(link: string): void;
}) => {
  return (
    <Grid2 size={6}>
      <Typography variant='h5' gutterBottom>
        Basic Info
      </Typography>
      <Divider />
      {infoBasicList.map((item) => (
        <Grid2 key={item.id} container spacing={2} m='10px 0px'>
          <Grid2>{item.icon}</Grid2>
          <Grid2>
            <Typography>{item.text}</Typography>
          </Grid2>
        </Grid2>
      ))}

      <Grid2 container spacing={1} mt='10px'>
        {infoIconBtnList.map((item) => (
          <Grid2 key={item.id}>
            <IconButton
              aria-label='btnIcon'
              color='inherit'
              onClick={() => handleIconBtnClick(item.link)}
            >
              {item.icon}
            </IconButton>
          </Grid2>
        ))}
      </Grid2>
    </Grid2>
  );
};

const BasicInfo = () => {
  const info = {
    name: 'Yuting-huang',
    basic: [
      {
        id: 1,
        icon: <PersonIcon />,
        text: 'female',
      },
      { id: 2, icon: <CakeIcon />, text: '1996/07/20' },
      { id: 3, icon: <SmartphoneIcon />, text: '0976603802' },
      { id: 4, icon: <EmailIcon />, text: 'wsxq123@gmail.com' },
      { id: 5, icon: <SchoolIcon />, text: 'Shih Chien Univ.' },
    ],
    iconBtn: [
      {
        id: 1,
        icon: <Linkedin />,
        link: 'https://www.linkedin.com/in/yu-ting-huang-322aa1178/',
      },
      { id: 2, icon: <GitHubIcon />, link: 'https://github.com/wsxq123' },
      { id: 3, icon: <WebIcon />, link: 'https://resume-2-2eebe.web.app/' },
      {
        id: 4,
        icon: <ContactPageIcon />,
        link: 'https://www.yourator.co/r/6035fc99-cf70-43db-9eb0-c24c35c622a2',
      },
    ],
  };

  function handleIconBtnClick(link: string): void {
    window.open(link);
  }

  return (
    <Grid2 container spacing={2}>
      <Pic name={info.name} />
      <Info
        infoBasicList={info.basic}
        infoIconBtnList={info.iconBtn}
        handleIconBtnClick={handleIconBtnClick}
      />
    </Grid2>
  );
};

export default BasicInfo;

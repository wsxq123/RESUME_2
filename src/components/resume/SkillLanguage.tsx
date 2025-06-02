import { Box, Typography, Divider, Grid2 } from '@mui/material';

const SkillLanguage = () => {
  const languageList = [
    {
      id: 0,
      language: 'Mandarin',
      level: 'Native',
    },
    {
      id: 1,
      language: 'English',
      level: 'Basic',
    },
    {
      id: 2,
      language: 'Japanese',
      level: 'Beginner',
    },
  ];

  return (
    <Box>
      <Typography variant='h5' gutterBottom align='center'>
        Language
      </Typography>
      <Divider />
      <Grid2 container spacing={5} rowSpacing={5} mt='30px'>
        {languageList.map((item) => (
          <Grid2 key={item.id} size={4}>
            <Typography gutterBottom variant='h6'>
              {item.language}
            </Typography>
            <Typography gutterBottom variant='subtitle2'>
              {item.level}
            </Typography>
          </Grid2>
        ))}
      </Grid2>
    </Box>
  );
};

export default SkillLanguage;

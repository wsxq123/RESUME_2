import { Box, Chip, Divider, Grid2, Typography } from '@mui/material';

const Skill = () => {
  const skillList = [
    {
      id: 0,
      title: 'Front-end Development',
      degree: 'Intermediate',
      skills: [
        'HTML / CSS / Javascript',
        'React',
        'TypeScript',
        'Next.js',
        'Angular',
        'Node.js',
      ],
    },
    {
      id: 1,
      title: 'Back-end',
      degree: 'Intermediate',
      skills: ['Java', 'Spring Boot'],
    },
    {
      id: 2,
      title: 'Database',
      degree: 'Intermediate',
      skills: ['MySQL', 'MongoDB'],
    },
    {
      id: 3,
      title: 'Version Control',
      degree: 'Intermediate',
      skills: ['Git', 'GitHub'],
    },
    {
      id: 4,
      title: 'UI Framework',
      degree: 'Intermediate',
      skills: ['Bootstrap', 'Figma', 'Material UI'],
    },
  ];

  return (
    <Box>
      <Typography variant='h5' gutterBottom align='center'>
        Skill
      </Typography>
      <Divider />
      <Grid2 container spacing={5} rowSpacing={5} mt='30px'>
        {skillList.map((item) => (
          <Grid2 key={item.id} size={4}>
            <Typography gutterBottom variant='subtitle1'>
              {item.title}
            </Typography>
            <Typography gutterBottom variant='subtitle2'>
              {item.degree}
            </Typography>
            {item.skills.map((subItem, index) => (
              <Chip
                key={index}
                label={subItem}
                variant='outlined'
                size='small'
              />
            ))}
          </Grid2>
        ))}
      </Grid2>
    </Box>
  );
};

export default Skill;

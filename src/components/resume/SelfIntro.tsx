import { Box, Divider, Typography } from '@mui/material';

const SelfIntro = () => {
  const selfIntro = {
    title: 'Self Introduce',
    content: `I'm Tina, during my university years, I interned at a software startup and became a Product Manager upon graduation.\n\nWhile I handled product management and maintenance, I rediscovered my passion for coding and successfully transitioned into a front-end engineer.\n\nWith expertise in React, TypeScript, Java, and more, I've contributed to various projects, honing my skills as a PM and engineer.\n\nLooking ahead, I aim to evolve into a full-stack engineer, leveraging my diverse experiences to tackle new challenges.`,
    content2: `Enjoy exploring new technologies and innovations and have excellent learning abilities.\nSpecialize in web development and be able to complete projects independently`,
  };

  return (
    <Box>
      <Typography variant='h5' align='center' gutterBottom>
        {selfIntro.title}
      </Typography>
      <Divider />
      {/* <Typography gutterBottom align='center' whiteSpace='pre-line'>
        {selfIntro.content}
      </Typography> */}
      <Typography gutterBottom align='center' whiteSpace='pre-line' mt='30px'>
        {selfIntro.content2}
      </Typography>
    </Box>
  );
};

export default SelfIntro;

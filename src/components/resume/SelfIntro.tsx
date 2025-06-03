import { Box, Divider, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

const SelfIntro = () => {
  const { t } = useTranslation();

  const selfIntro = {
    title: 'Self Introduce',
    content: t('SELFINTRODUCE'),
  };

  return (
    <Box>
      <Typography variant='h5' align='center' gutterBottom>
        {selfIntro.title}
      </Typography>
      <Divider />
      <Typography gutterBottom align='center' whiteSpace='pre-line' mt='30px'>
        {selfIntro.content}
      </Typography>
    </Box>
  );
};

export default SelfIntro;

import { projectDetailType } from '@components/portfolio/Main';
import { IconButton, Stack, Typography } from '@mui/material';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

const ProjectIntro = ({
  currentProjectDetail,
}: {
  currentProjectDetail: projectDetailType;
}) => {
  return (
    <Stack spacing={2}>
      <Typography gutterBottom>{currentProjectDetail.title}</Typography>

      {currentProjectDetail.detail && (
        <>
          <Typography gutterBottom>Tool</Typography>
          <ul>
            {currentProjectDetail.detail.tool.map((item, index) => (
              <li key={index}>
                <Typography gutterBottom fontSize='14px'>
                  {item}
                </Typography>
              </li>
            ))}
          </ul>
          <Typography gutterBottom>Features</Typography>
          <ul>
            {currentProjectDetail.detail.features.map((item, index) => (
              <li key={index}>
                <Typography gutterBottom fontSize='14px'>
                  {item}
                </Typography>
              </li>
            ))}
          </ul>
        </>
      )}

      {currentProjectDetail.description && (
        <>
          <Typography gutterBottom fontSize='14px'>
            {currentProjectDetail.description}
          </Typography>
          <IconButton
            aria-label='btnIcon'
            color='inherit'
            onClick={() => window.open(currentProjectDetail.link)}
          >
            <OpenInNewIcon />
          </IconButton>
        </>
      )}
    </Stack>
  );
};

export default ProjectIntro;

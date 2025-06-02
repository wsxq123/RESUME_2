import { Box, Pagination, Stack } from '@mui/material';
import { useState } from 'react';

const ProjectPics = ({
  currentPorject,
  projectPicsList,
}: {
  currentPorject: number;
  projectPicsList: string[];
}) => {
  const [page, setPage] = useState(0);
  const [prevProjectId, setprevProjectId] = useState(currentPorject);

  function hadleChange(_event: React.ChangeEvent<unknown>, p: number) {
    setPage(p - 1);
  }

  //when project is changed, initialize page count
  if (currentPorject !== prevProjectId) {
    setPage(0);
    setprevProjectId(currentPorject);
  }

  return (
    <Box>
      <Stack spacing={2} mb='20px'>
        <Pagination
          count={projectPicsList.length}
          onChange={hadleChange}
          page={page + 1}
        />
      </Stack>

      <img
        src={projectPicsList[page]}
        alt={projectPicsList[page]}
        style={{ objectFit: 'contain', width: '100%' }}
        loading='lazy'
      />
    </Box>
  );
};

export default ProjectPics;

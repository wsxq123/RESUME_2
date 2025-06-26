import { Stack } from '@mui/material';
import BasicInfo from './BasicInfo';
import SelfIntro from './SelfIntro';
import JobHistory from './JobHistory';
import Skill from './Skill';
import SkillLanguage from './SkillLanguage';

const main = () => {
  const mainComponentList = [
    <BasicInfo />,
    <SelfIntro />,
    <JobHistory />,
    <Skill />,
    <SkillLanguage />,
  ];

  return (
    <Stack spacing={12} m='70px 0px' width='60%'>
      {mainComponentList.map((item, index) => (
        <div key={index}>{item}</div>
      ))}
    </Stack>
  );
};

export default main;

import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineOppositeContent,
  timelineOppositeContentClasses,
  TimelineSeparator,
} from '@mui/lab';
import { Box, Divider, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

interface JobPropsType {
  time: string;
  title: string;
  company: string;
  jobList: string[];
}

const JobHistory = () => {
  const { t } = useTranslation();

  function jsonArrToStingArr(label: string) {
    const jsonArr = t(label, { returnObjects: true });

    if (Array.isArray(jsonArr)) {
      const jobListArray: string[] = jsonArr.map((item) => String(item));
      console.log(jobListArray);
      return jobListArray;
    } else {
      return [];
    }
  }

  const jobInfo = [
    {
      id: 0,
      time: '2019-04 ~ 2020-04',
      title: 'Project Manager',
      company: 'ULSEE INC.',
      jobList: jsonArrToStingArr('JOBHISTORY_0_JOBLIST'),
    },
    {
      id: 1,
      time: '2020-04 ~ 2022-05',
      title: 'Front-end Engineer',
      company: 'ULSEE INC.',
      jobList: jsonArrToStingArr('JOBHISTORY_1_JOBLIST'),
    },
    {
      id: 2,
      time: '2022-12 ~ 2023-06',
      title: 'Software Engineer',
      company: 'Hua Nan Bank',
      jobList: jsonArrToStingArr('JOBHISTORY_2_JOBLIST'),
    },
    {
      id: 3,
      time: '2023-06 ~ ',
      title: 'Software Engineer',
      company: 'Studio',
      jobList: jsonArrToStingArr('JOBHISTORY_3_JOBLIST'),
    },
  ];

  return (
    <Box>
      <Typography variant='h5' gutterBottom align='center'>
        Job History
      </Typography>
      <Divider />
      <Timeline
        sx={{
          [`& .${timelineOppositeContentClasses.root}`]: {
            flex: 0.2,
          },
          marginTop: '30px',
        }}
      >
        {jobInfo.map((item) => (
          <TimelineItem key={item.id}>
            <TimelineOppositeContent color='textSecondary'>
              <Typography gutterBottom noWrap={true} color='text.secondary'>
                {item.time}
              </Typography>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent ml='25px'>
              <JobExperienceBox {...item} />
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </Box>
  );
};

function JobExperienceBox({ ...item }: JobPropsType) {
  return (
    <Box>
      <Typography noWrap={true} color='text.secondary' mb='10px'>
        {item.company}
      </Typography>
      <Typography gutterBottom noWrap={true}>
        {item.title}
      </Typography>
      <ul>
        {item.jobList.map((jobItem, index) => (
          <li key={index} style={{ listStyleType: 'disc', lineHeight: '2.5' }}>
            <Typography gutterBottom>{jobItem}</Typography>
          </li>
        ))}
      </ul>
    </Box>
  );
}

export default JobHistory;

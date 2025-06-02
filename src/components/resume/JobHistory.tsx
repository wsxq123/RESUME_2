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

interface JobPropsType {
  time: string;
  title: string;
  company: string;
  jobList: string[];
}

const JobHistory = () => {
  const jobInfo = [
    {
      id: 0,
      time: '2019-04 ~ 2020-04',
      title: 'Project Manager',
      company: 'ULSEE INC.',
      jobList: [
        'Communicated with clients',
        'Write proposals',
        'Communicated with clients and established product specifications',
        'Planned, managed, and tracked project progress and schedules',
        'Coordinated with art, UI/UX designers, and front-end and back-end engineers to complete    projects',
        'Planned, managed, and tracked project progress and schedules',
        'Successfully led new colleagues and helped them become full-time employees',
      ],
    },
    {
      id: 1,
      time: '2020-04 ~ 2022-05',
      title: 'Front-end Engineer',
      company: 'ULSEE INC.',
      jobList: [
        'Handling cross-browser compatibility issues',
        'Independently developed websites (React / Next.js)',
        'Multi-language website development (React-i18next)',
        'Managing routes using React Router',
        'Using axios to fetch data from MongoDB',
        'Collaborating with UI/UX designers to develop RWD websites using styled-components',
        'Introduced Material UI Library to improve development efficiency',
        'Multi-language website development (React-i18next)',
        'Maintaining existing company websites',
        'Experienced in the complete development of two projects',
      ],
    },
    {
      id: 2,
      time: '2022-12 ~ 2023-06',
      title: 'Software Engineer',
      company: 'Hua Nan Bank',
      jobList: [
        'Developed and maintained bank fixed deposit-related programs (COBOL)',
        'Managed customer data using RDBMS / IBM DB2',
        'Solved branch system problems',
        'Answered branch inquiry calls',
        'Obtained bank internal control and internal audit licenses',
      ],
    },
    {
      id: 3,
      time: '2023-06 ~ ',
      title: 'Software Engineer',
      company: 'Studio',
      jobList: ['Studio staff'],
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

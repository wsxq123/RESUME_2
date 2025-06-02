import Catalog from '@components/portfolio/Catalog';
import ProjectIntro from '@components/portfolio/ProjectIntro';
import ProjectPics from '@components/portfolio/ProjectPics';
import ULSpeakPng01 from '@assets/projects/ULSpeak-1.png';
import ULSpeakPng02 from '@assets/projects/ULSpeak-2.png';
import ULSee360Png01 from '@assets/projects/Ulsee360-1.png';
import ULSee360Png02 from '@assets/projects/Ulsee360-2.png';
import UTalkPng01 from '@assets/projects/uTalk-1.png';
import UTalkPng02 from '@assets/projects/uTalk-2.png';
import GUStylePng from '@assets/projects/guStyle.png';
import WeibaoPng01 from '@assets/projects/weibao-1.png';
import WeibaoPng02 from '@assets/projects/weibao-2.png';
import WeibaoPng03 from '@assets/projects/weibao-3.png';
import WeibaoPng04 from '@assets/projects/weibao-4.png';
import WeibaoPng05 from '@assets/projects/weibao-5.png';
import { Divider, Grid2, Stack } from '@mui/material';
import { useState } from 'react';

export interface catalogOptionType {
  id: number;
  title: string;
}

export interface projectDetailType {
  id: number;
  title: string;
  detail?: {
    tool: string[];
    features: string[];
  };
  description?: string;
  link?: string;
  imgList: string[];
}

const Main = () => {
  const [currentPorject, setcurrentPorject] = useState(0);

  function handleCatalogBtnClick(id: number) {
    setcurrentPorject(id);
  }

  const catalogOptionList = [
    {
      id: 0,
      title: 'ULSpeak',
    },
    {
      id: 1,
      title: 'ULSEE360',
    },
    {
      id: 2,
      title: 'Guanggu Live (PM)',
    },
    {
      id: 3,
      title: 'GUStyle (PM)',
    },
    {
      id: 4,
      title: 'Weibao Travel (Full-stack)',
    },
  ];

  const projectDetailList = [
    {
      id: 0,
      title: 'ULSpeak - Text-to-Speech Tool',
      detail: {
        tool: [
          'Front-end Framework: React',
          'Languages: JavaScript + TypeScript',
          'Execution Environment: Node.js',
          'Version Control: git',
        ],
        features: [
          'Multi-language support (i18n)',
          'Membership system',
          'RWD',
          'Embedded Unity game',
        ],
      },
      imgList: [ULSpeakPng01, ULSpeakPng02],
    },
    {
      id: 1,
      title: 'ULSEE360 - 3D Dynamic Navigation',
      detail: {
        tool: [
          'Front-end Framework: React (+ Next.js)',
          'Languages: JavaScript + TypeScript',
          'Execution Environment: Node.js',
          'Version Control: git',
        ],
        features: [
          'Multi-language (i18n)',
          'RWD',
          'QA Checklist (using MongoDB to store translation data)',
        ],
      },
      imgList: [ULSee360Png01, ULSee360Png02],
    },
    {
      id: 2,
      title: 'Guanggu Live - Virtual anchor (PM)',
      description: `Collaborated with Wuhan TV to create a virtual image and combine it with the voice synthesis service to automatically generate weekly news videos.`,
      link: 'https://reurl.cc/xL5bqZ',
      imgList: [UTalkPng01, UTalkPng02],
    },
    {
      id: 3,
      title: 'GUStyle- Virtual Tryon (PM)',
      description: `Collaborated with GU to create a virtual try-on application.`,
      link: 'https://reurl.cc/Qerlv9',
      imgList: [GUStylePng],
    },
    {
      id: 4,
      title: 'Side Project: Weibao Travel (Full-stack)',
      detail: {
        tool: [
          'Front-end Framework: Angular17',
          'UI Framework: Angular Material',
          'Languages: JavaScript + TypeScript',
          'Back-end: JAVA + Spring Boot',
          'Execution Environment: Node.js',
          'Version Control: git',
        ],
        features: [
          'Multi-language (i18n)',
          'Membership system',
          'Shopping cart',
          'Back-end management system',
        ],
      },
      imgList: [
        WeibaoPng01,
        WeibaoPng02,
        WeibaoPng03,
        WeibaoPng04,
        WeibaoPng05,
      ],
    },
  ];

  return (
    <Stack spacing={12} m='70px 0px' width='80%'>
      <Catalog
        catalogOptionList={catalogOptionList}
        handleCatalogBtnClick={handleCatalogBtnClick}
      />
      <Divider />
      <Grid2 container spacing={2}>
        <Grid2 size={3}>
          <ProjectIntro
            currentProjectDetail={projectDetailList[currentPorject]}
          />
        </Grid2>
        <Grid2 size={1}>
          <Divider orientation='vertical' />
        </Grid2>
        <Grid2 size='grow'>
          <ProjectPics
            currentPorject={currentPorject}
            projectPicsList={projectDetailList[currentPorject].imgList}
          />
        </Grid2>
      </Grid2>
    </Stack>
  );
};

export default Main;

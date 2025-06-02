// import styled from '@emotion/styled';
import { Button } from '@mui/material';

// const ButtonStyle = styled.button`
//   border-radius: 8px;
//   border: 1px solid transparent;
//   padding: 0.6em 1.2em;
//   font-size: 1em;
//   font-weight: 500;
//   background-color: #c4a6a6;
//   color: black;
//   cursor: pointer;
//   &:hover {
//     color: white;
//     transform: scale(1.2);
//   }
// `;

type Props = {
  children: string | JSX.Element;
};

// type Props2 = {
//   children: React.ReactNode;
// };

const MyButton = ({ children }: Props) => {
  return <Button>{children}</Button>;
};

export default MyButton;

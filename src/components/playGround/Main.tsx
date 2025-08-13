import PriceComparator from '@components/playGround/PriceComparator';
import { Divider, Stack } from '@mui/material';
import TodoList from '@components/playGround/TodoList';

const Main = () => {
  return (
    <Stack spacing={12} m='70px 0px'>
      <PriceComparator />
      <div className='container mx-auto p-4'>
        <h1 className='text-3xl font-bold'>Hello World!</h1>
      </div>
      <button className='bg-primary text-white font-semibold py-2 px-4 rounded hover:bg-blue-700'>
        點我一下
      </button>
      <Divider component='div' sx={{ my: 2 }} />
      <TodoList />
      <Divider component='div' sx={{ my: 2 }} />
    </Stack>
  );
};

export default Main;

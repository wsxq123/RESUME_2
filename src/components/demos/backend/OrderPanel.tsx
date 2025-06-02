import { Stack, Button } from '@mui/material';

const OrderPanel = ({
  handleSearchAllOrderBtn,
}: {
  handleSearchAllOrderBtn: () => void;
}) => {
  return (
    <Stack spacing={2} direction='row' justifyContent='center'>
      <Button variant='contained' onClick={handleSearchAllOrderBtn}>
        Search All
      </Button>
    </Stack>
  );
};
export default OrderPanel;

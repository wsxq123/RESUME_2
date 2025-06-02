import { Button, Stack, Typography } from '@mui/material';

const OrderDetail = ({
  handleStepController,
}: {
  handleStepController(item: number[]): void;
}) => {
  return (
    <Stack spacing={8}>
      <Typography variant='h6' gutterBottom>
        Thanks for your order !
      </Typography>

      <Button
        type='button'
        variant='contained'
        onClick={() => handleStepController([0, 0])}
      >
        Back to Shop
      </Button>
    </Stack>
  );
};

export default OrderDetail;

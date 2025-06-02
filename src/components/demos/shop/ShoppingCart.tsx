import {
  Button,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';

import {
  createOrder,
  OrderDetailType,
  OrderType,
} from '@src/firebase/dbOrderCRUD';
import { auth } from '@src/firebase/firebase';
import { Timestamp } from 'firebase/firestore';

const ShoppingCart = ({
  orderList,
  handleStepController,
}: {
  orderList: OrderDetailType[];
  handleStepController(item: number[]): void;
}) => {
  console.log('orderList:');
  console.log(orderList);

  const totalPrice = getTotal();

  function getTotal() {
    let sum = 0;
    const priceList = orderList.map((item) => item.price * item.quantity);
    priceList.forEach((element) => (sum = sum + element));
    return sum;
  }

  function creatOrderTest(e: React.FormEvent) {
    const orderOne: OrderType = {
      uid: auth.currentUser ? auth.currentUser?.uid : '',
      orderTime: Timestamp.now(),
      orderDetail: orderList,
    };

    createOrder(e, orderOne);
  }

  function handleCheckOutBtn(e: React.FormEvent) {
    handleStepController([1, 1]);
    creatOrderTest(e);
  }

  return (
    <Stack spacing={8}>
      <TableContainer sx={{ border: '1px solid darkgray' }}>
        <Table sx={{ minWidth: 650 }} aria-label='simple table'>
          <TableHead sx={{ backgroundColor: 'lightgray' }}>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>Quantity</TableCell>
              <TableCell>Sum</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {orderList &&
              orderList.map((item) => (
                <TableRow key={item.id}>
                  <TableCell>{item.name}</TableCell>
                  <TableCell>{item.price}</TableCell>
                  <TableCell>{item.quantity}</TableCell>
                  <TableCell>{item.price * item.quantity}</TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Typography>Total Price: {totalPrice}</Typography>
      <Stack direction='row' spacing={4}>
        <Button
          type='button'
          variant='contained'
          onClick={() => handleStepController([0, 0])}
        >
          Back to Shop
        </Button>
        <Button
          type='button'
          variant='contained'
          onClick={(e) => handleCheckOutBtn(e)}
        >
          Check Out
        </Button>
      </Stack>
    </Stack>
  );
};

export default ShoppingCart;

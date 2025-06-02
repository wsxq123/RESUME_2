import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import { UserType } from '@src/firebase/dbUserCRUD';
import { ProductType } from '@src/firebase/dbProductsCRUD';
import { OrderType } from '@src/firebase/dbOrderCRUD';
import { Timestamp } from 'firebase/firestore';

const DataList = ({
  userDataList,
  productDataList,
  orderDataList,
  switcher,
}: {
  userDataList?: UserType[] | undefined;
  productDataList?: ProductType[] | undefined;
  orderDataList?: OrderType[] | undefined;
  switcher: string;
}) => {
  function timestampToString(time: Timestamp): string {
    const date = new Date(time.toDate()).toLocaleString('en-GB');
    return date;
  }

  return (
    <TableContainer sx={{ border: '1px solid darkgray', height: '300px' }}>
      <Table sx={{ minWidth: 650 }} aria-label='simple table'>
        <TableHead sx={{ backgroundColor: 'lightgray' }}>
          {switcher === '0' && (
            <TableRow>
              <TableCell>UID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
            </TableRow>
          )}
          {switcher === '1' && (
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Price</TableCell>
            </TableRow>
          )}
          {switcher === '2' && (
            <TableRow>
              <TableCell>UserID</TableCell>
              <TableCell>Time</TableCell>
              <TableCell>Detail</TableCell>
            </TableRow>
          )}
        </TableHead>
        <TableBody>
          {userDataList &&
            switcher === '0' &&
            userDataList.map((userDataList) => (
              <TableRow key={userDataList.id}>
                <TableCell>{userDataList.id}</TableCell>
                <TableCell>{userDataList.name}</TableCell>
                <TableCell>{userDataList.email}</TableCell>
              </TableRow>
            ))}

          {productDataList &&
            switcher === '1' &&
            productDataList.map((productDataList) => (
              <TableRow key={productDataList.id}>
                <TableCell>{productDataList.id}</TableCell>
                <TableCell>{productDataList.name}</TableCell>
                <TableCell>{productDataList.price}</TableCell>
              </TableRow>
            ))}

          {orderDataList &&
            switcher === '2' &&
            orderDataList.map((orderDataList) => (
              <TableRow key={orderDataList.orderTime.toString()}>
                <TableCell>{orderDataList.uid}</TableCell>
                <TableCell>
                  {timestampToString(orderDataList.orderTime)}
                </TableCell>
                <TableCell>OrderDetail</TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default DataList;

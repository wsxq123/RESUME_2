import { Box, IconButton } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { ProductType } from '@src/firebase/dbProductsCRUD';
import { useState } from 'react';
import Products from './Products';
import ShoppingCart from './ShoppingCart';
import OrderDetail from './OrderDetail';
import { OrderDetailType } from '@src/firebase/dbOrderCRUD';

const Shop = () => {
  const navigate = useNavigate();

  const productsList = useLoaderData() as ProductType[];

  const [stepController, setStepController] = useState([0, 0]);

  const [orderList, setOrderList] = useState<OrderDetailType[]>([]);

  const StepComp = [
    <Products
      productsList={productsList}
      handleAddOrder={handleAddOrder}
      handleStepController={handleStepController}
    />,
    <ShoppingCart
      orderList={orderList}
      handleStepController={handleStepController}
    />,
    <OrderDetail handleStepController={handleStepController} />,
  ];

  function findStep(): JSX.Element {
    const currentStep = stepController.findLastIndex(
      (element) => element === 1
    );

    switch (currentStep) {
      case -1:
        return StepComp[0];
      case 0:
        return StepComp[1];
      case 1:
        return StepComp[2];
      default:
        return StepComp[0];
    }
  }

  function handleStepController(item: number[]) {
    setStepController([...item]);
  }

  function handleAddOrder(order: OrderDetailType) {
    const isHave = orderList.findIndex((element) => element.id === order.id);

    if (isHave < 0) {
      const newList = [...orderList, order];
      setOrderList(newList);
    } else {
      const newOrder: OrderDetailType = {
        id: order.id,
        name: order.name,
        price: order.price,
        quantity: order.quantity + orderList[isHave].quantity,
      };
      const newList = orderList;
      newList.splice(isHave, 1);
      newList.push(newOrder);
    }
  }

  return (
    <Box
      width='100%'
      display='flex'
      flexDirection='column'
      alignItems='center'
      mb='60px'
    >
      <Box width='100%'>
        <IconButton
          aria-label='btnIcon'
          color='inherit'
          size='large'
          onClick={() => navigate('/demos/member')}
        >
          <AccountCircleIcon fontSize='large' />
        </IconButton>
      </Box>
      {findStep()}
    </Box>
  );
};

export default Shop;

import { Box, Button } from '@mui/material';
import { ProductType } from '@src/firebase/dbProductsCRUD';
import Product from '@components/demos/shop/Product';
import { OrderDetailType } from '@src/firebase/dbOrderCRUD';

const Products = ({
  productsList,
  handleAddOrder,
  handleStepController,
}: {
  productsList: ProductType[];
  handleAddOrder(order: OrderDetailType): void;
  handleStepController(item: number[]): void;
}) => {
  return (
    <Box>
      <Box
        m='70px 0px'
        display='grid'
        gridTemplateColumns='repeat(4, 1fr)'
        gridTemplateRows='repeat(2, 1fr)'
        gap='40px 40px'
      >
        {productsList.map((item, index) => (
          <Product key={index} product={item} handleAddOrder={handleAddOrder} />
        ))}
      </Box>

      <Button
        type='button'
        variant='contained'
        onClick={() => handleStepController([1, 0])}
      >
        Go to Shopping Cart
      </Button>
    </Box>
  );
};

export default Products;

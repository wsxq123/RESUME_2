import {
  Card,
  CardActions,
  CardContent,
  IconButton,
  TextField,
  Typography,
} from '@mui/material';
import { ProductType } from '@src/firebase/dbProductsCRUD';
import { OrderDetailType } from '@src/firebase/dbOrderCRUD';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { useState } from 'react';

const Product = ({
  product,
  handleAddOrder,
}: {
  product: ProductType;
  handleAddOrder(order: OrderDetailType): void;
}) => {
  const [quantity, setQuantity] = useState(0);

  function handleAddToCartBtn(quantity: number) {
    if (quantity > 0) {
      const order = { ...product, quantity: quantity };
      handleAddOrder(order);
      setQuantity(0);
    }
  }

  return (
    <Card sx={{ width: '275px' }}>
      <CardContent>
        <Typography variant='h5' component='div'>
          {product.name}
        </Typography>
        <Typography sx={{ color: 'text.secondary', mb: 1.5 }}>
          $ {product.price}
        </Typography>
      </CardContent>
      <CardActions>
        <TextField
          type='number'
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
        />
        <IconButton
          aria-label='btnIcon'
          color='inherit'
          size='large'
          onClick={() => handleAddToCartBtn(quantity)}
        >
          <AddShoppingCartIcon fontSize='small' />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default Product;

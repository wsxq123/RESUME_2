import { Stack, Button } from '@mui/material';

const ProductsPanel = ({
  handleSearchAllProductsBtn,
}: {
  handleSearchAllProductsBtn: () => void;
}) => {
  return (
    <Stack spacing={2} direction='row' justifyContent='center'>
      <Button variant='contained' onClick={handleSearchAllProductsBtn}>
        Search All
      </Button>
    </Stack>
  );
};
export default ProductsPanel;

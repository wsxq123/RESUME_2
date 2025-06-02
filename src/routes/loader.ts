import { getAllProducts } from '@src/firebase/dbProductsCRUD';

export async function productsLoader() {
  return await getAllProducts();
}

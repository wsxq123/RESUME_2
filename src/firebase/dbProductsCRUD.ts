import {
  collection,
  getDocs,
  doc,
  updateDoc,
  deleteDoc,
  setDoc,
} from 'firebase/firestore';
import { db } from '@src/firebase/firebase';

export interface ProductType {
  id: string;
  name: string;
  price: number;
}

//create product
export async function createProduct(
  e: React.FormEvent,
  name: string,
  price: string
) {
  e.preventDefault();
  try {
    await setDoc(doc(db, 'products'), {
      name: name,
      price: price,
    });

    alert('Product added successfully!');
  } catch (error) {
    console.error('Error adding product: ', error);
  }
}

//read products
export async function getAllProducts(): Promise<ProductType[]> {
  try {
    const querySnapshot = await getDocs(collection(db, 'products'));
    const itemsList = querySnapshot.docs.map(
      (doc) => ({ id: doc.id, ...doc.data() }) as ProductType
    );
    // console.log(itemsList);
    return itemsList;
  } catch (error) {
    console.error('Error reading products: ', error);
    throw error;
  }
}

//update product
export async function updateProductById(
  id: string,
  newName: string,
  newPrice: number
) {
  try {
    const itemRef = doc(db, 'products', id);
    await updateDoc(itemRef, { name: newName, price: newPrice });
    alert('Product updated successfully!');
  } catch (error) {
    console.error('Error updating product:', error);
    throw error;
  }
}

//delete product
export async function deleteProductById(id: string) {
  try {
    const itemRef = doc(db, 'products', id);
    await deleteDoc(itemRef);
    alert('products delete successfully!');
  } catch (error) {
    console.error('Error delete products:', error);
    throw error;
  }
}

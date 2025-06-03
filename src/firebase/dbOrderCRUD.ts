import {
  collection,
  getDocs,
  doc,
  deleteDoc,
  setDoc,
  Timestamp,
  query,
  orderBy,
} from 'firebase/firestore';
import { db } from '@src/firebase/firebase';

export interface OrderDetailType {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

export interface OrderType {
  uid: string;
  orderTime: Timestamp;
  orderDetail: OrderDetailType[];
}

//create order
export async function createOrder(e: React.FormEvent, order: OrderType) {
  e.preventDefault();
  try {
    await setDoc(doc(collection(db, 'order')), order);
    alert('Order added successfully!');
  } catch (error) {
    console.error('Error adding order: ', error);
  }
}

//read all order
export async function getAllOrder(): Promise<OrderType[]> {
  try {
    const usersRef = collection(db, 'order');
    const q = query(usersRef, orderBy('orderTime', 'desc'));

    const querySnapshot = await getDocs(q);
    const itemsList = querySnapshot.docs.map(
      (doc) => ({ uid: doc.id, ...doc.data() }) as OrderType
    );

    return itemsList;
  } catch (error) {
    console.error('Error reading products: ', error);
    throw error;
  }
}

//read order By UID //TODO

//read order between time //TODO

//delete order //TODO
export async function deleteOrderById(id: string) {
  try {
    const itemRef = doc(db, 'products', id);
    await deleteDoc(itemRef);
    alert('products delete successfully!');
  } catch (error) {
    console.error('Error delete products:', error);
    throw error;
  }
}

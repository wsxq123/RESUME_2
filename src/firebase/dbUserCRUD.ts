import {
  collection,
  getDocs,
  query,
  where,
  doc,
  updateDoc,
  deleteDoc,
  setDoc,
  getDoc,
} from 'firebase/firestore';
import { db } from '@src/firebase/firebase';

export interface UserType {
  id: string;
  name: string;
  email: string;
}

//create user
export async function createUser(
  e: React.FormEvent,
  uid: string,
  name: string,
  email: string
) {
  e.preventDefault();
  try {
    await setDoc(doc(db, 'users', uid), {
      name: name,
      email: email,
    });
  } catch (error) {
    console.error('Error adding item: ', error);
  }
}

//read users
export async function getAllUser(): Promise<UserType[]> {
  try {
    const querySnapshot = await getDocs(collection(db, 'users'));
    const itemsList = querySnapshot.docs.map(
      (doc) => ({ id: doc.id, ...doc.data() }) as UserType
    );

    return itemsList;
  } catch (error) {
    console.error('Error reading item: ', error);
    throw error;
  }
}

//read user by email
export async function getUserByEmail(userEmail: string): Promise<UserType[]> {
  try {
    const q = query(collection(db, 'users'), where('email', '==', userEmail));
    const querySnapshot = await getDocs(q);
    const itemsList = querySnapshot.docs.map(
      (doc) => ({ id: doc.id, ...doc.data() }) as UserType
    );
    return itemsList;
  } catch (error) {
    console.error('Error reading item by email: ', error);
    throw error;
  }
}

//read user by uid
export async function getUserByUid(uid: string): Promise<UserType> {
  try {
    const docRef = doc(db, 'users', uid);
    const snapshot = await getDoc(docRef);
    const item = snapshot.data() as UserType;
    return item;
  } catch (error) {
    console.error('Error reading item by email: ', error);
    throw error;
  }
}

//update user
export async function updateUserByUid(
  uid: string,
  newName: string,
  newEmail: string
) {
  try {
    const itemRef = doc(db, 'users', uid);
    await updateDoc(itemRef, { name: newName, email: newEmail });
    alert('User updated successfully!');
  } catch (error) {
    console.error('Error updating task:', error);
    throw error;
  }
}

//delete user //TODO
export async function deleteUserByUid(uid: string) {
  try {
    const itemRef = doc(db, 'users', uid);
    await deleteDoc(itemRef);
    alert('User delete successfully!');
  } catch (error) {
    console.error('Error delete user:', error);
    throw error;
  }
}

import React, { useState } from 'react';
import { Button, Stack, TextField } from '@mui/material';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '@src/firebase/firebase';
import { createUser } from '@src/firebase/dbUserCRUD';

const Register = ({ handlePage }: { handlePage(pageNum: number): void }) => {
  const initialValue = { name: '', email: '', password: '' };

  const [userData, setUserData] = useState(initialValue);

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await createUserWithEmailAndPassword(
        auth,
        userData.email,
        userData.password
      ).then((UserCredential) => {
        createUser(e, UserCredential.user.uid, userData.name, userData.email);
        setUserData({ ...userData, name: '' });
      });
      alert('User created successfully');
      setUserData(initialValue);
      handlePage(0);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form onSubmit={handleRegister}>
      <Stack spacing={2}>
        可以隨便打一個假的Email
        <TextField
          id='outlined-name-input'
          label='Name'
          type='Name'
          value={userData.name}
          onChange={(e) => setUserData({ ...userData, name: e.target.value })}
          required
        />
        <TextField
          id='outlined-email-input'
          label='Email'
          type='Email'
          value={userData.email}
          onChange={(e) => setUserData({ ...userData, email: e.target.value })}
          required
        />
        <TextField
          id='outlined-password-input'
          label='Password'
          type='password'
          value={userData.password}
          onChange={(e) =>
            setUserData({ ...userData, password: e.target.value })
          }
          required
        />
        <Button type='submit' variant='contained'>
          Register
        </Button>
        <Button variant='contained' onClick={() => handlePage(0)}>
          Login
        </Button>
      </Stack>
    </form>
  );
};

export default Register;

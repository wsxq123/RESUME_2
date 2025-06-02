import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '@src/firebase/firebase';
import { Stack, TextField, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Login = ({ handlePage }: { handlePage(pageNum: number): void }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password).then(
        (userCredential) => {
          const user = userCredential.user;
          console.log(userCredential);
          console.log(user);
          console.log('user.uid: ' + user.uid);
          console.log('user.uid: ' + user.email);
          navigate(`/demos/shop`);
        }
      );
    } catch (error) {
      alert('User not found or wrong email/password');
      console.error('Error logging in:', error);
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <Stack spacing={2}>
        <TextField
          label='Email'
          type='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <TextField
          label='Password'
          type='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <Button type='submit' variant='contained'>
          Login
        </Button>
        <Button variant='contained' onClick={() => handlePage(1)}>
          Register
        </Button>
      </Stack>
    </form>
  );
};

export default Login;

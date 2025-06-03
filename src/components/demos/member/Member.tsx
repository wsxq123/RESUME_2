import {
  Box,
  Button,
  CircularProgress,
  IconButton,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import { getUserByUid, updateUserByUid } from '@src/firebase/dbUserCRUD';
import { auth } from '@src/firebase/firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const User = () => {
  const [userData, setUserData] = useState<{ name: string; email: string }>();
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        try {
          const res = await getUserByUid(user.uid);
          setUserData(res);
        } catch (err) {
          console.log('Error loading user:', err);
        }
      } else {
        console.log('No user signed in');
      }
    });

    return () => unsubscribe();
  }, []);

  function handleUpdateBtn() {
    if (auth.currentUser?.uid && userData) {
      updateUserByUid(auth.currentUser?.uid, userData.name, userData.email);
    }
  }

  async function handleLogoutBtn() {
    try {
      await signOut(auth);
      console.log('User logged out successfully');
      navigate(`/demos/entry`);
    } catch (error) {
      console.error('Error logging out:', error);
    }
  }

  return userData ? (
    <Box
      width='100%'
      display='flex'
      flexDirection='column'
      alignItems='center'
      height='80vh'
    >
      <Box width='100%'>
        <IconButton
          aria-label='btnIcon'
          color='inherit'
          size='large'
          onClick={() => navigate('/demos/products')}
        >
          <ArrowBackIcon fontSize='large' />
        </IconButton>
      </Box>
      <Stack spacing={8} width='30%'>
        <Typography gutterBottom variant='h3'>
          Hi, {userData.name}
        </Typography>
        <Stack spacing={5}>
          <Typography
            gutterBottom
            variant='h5'
            sx={{ textDecoration: 'underline' }}
          >
            User Info
          </Typography>
          <TextField
            label='Name'
            defaultValue={userData.name}
            onChange={(e) => setUserData({ ...userData, name: e.target.value })}
          />
          <TextField
            disabled
            label='Email'
            defaultValue={userData.email}
            onChange={(e) =>
              setUserData({ ...userData, email: e.target.value })
            }
          />
          <Button variant='contained' onClick={handleUpdateBtn}>
            UPDATE
          </Button>
          <Button variant='contained' onClick={handleLogoutBtn}>
            Logout
          </Button>
        </Stack>
      </Stack>
    </Box>
  ) : (
    <CircularProgress />
  );
};

export default User;

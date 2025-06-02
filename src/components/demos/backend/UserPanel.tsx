import { Stack, TextField, Button } from '@mui/material';

const UserPanel = ({
  email,
  setEmail,
  handleSearchAllUserBtn,
  handleSearchUserByEmail,
}: {
  email: string;
  setEmail: (email: string) => void;
  handleSearchAllUserBtn: () => void;
  handleSearchUserByEmail: (email: string) => void;
}) => {
  return (
    <Stack spacing={2} direction='row' justifyContent='center'>
      <TextField
        label='Email'
        type='email'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <Button
        variant='contained'
        onClick={() => handleSearchUserByEmail(email)}
      >
        Search
      </Button>
      <Button variant='contained' onClick={handleSearchAllUserBtn}>
        Search All
      </Button>
    </Stack>
  );
};
export default UserPanel;

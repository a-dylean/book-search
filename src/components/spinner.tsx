import { Box } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';

export const Spinner = () => {
  return (
    <Box sx={{ display: 'flex' }}>
      <CircularProgress />
    </Box>
  );
}
import { Box } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';

export const Spinner = () => {
  return (
    <Box sx={{ display: 'flex', justifyContent: "center", p: 2 }}>
      <CircularProgress />
    </Box>
  );
}
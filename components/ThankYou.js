import { Box, Typography, Button } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Link from 'next/link';

const ThankYou = ({ onBack }) => {
  return (
    <Box
      sx={{
        textAlign: 'center',
        py: 6,
        px: 3,
      }}
    >
      <CheckCircleIcon sx={{ fontSize: 80, color: 'green' }} />
      <Typography variant="h4" sx={{ mt: 2, fontWeight: 'bold' }}>
        Thank You!
      </Typography>
      <Typography variant="body1" sx={{ mt: 1, color: 'text.secondary' }}>
        Your message has been successfully sent. We’ll get back to you soon 🚀
      </Typography>
      <Link href={'/'}>
        <Button variant="contained" sx={{ mt: 4, borderRadius: '8px' }} onClick={onBack}>
          Back to Home
        </Button>
      </Link>
    </Box>
  );
};

export default ThankYou;


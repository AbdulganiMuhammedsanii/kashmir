import React from "react";
import { Typography, Container, Box, Divider } from "@mui/material";
import { Public } from '@mui/icons-material';



const ElegantDivider: React.FC<{ icon?: React.ReactNode; text?: string }> = ({ icon, text }) => (
  <Divider
    textAlign="center"
    sx={{
      my: 0, // Add vertical spacing
      backgroundColor: "grey.100",
      '&::before, &::after': {
        borderColor: 'secondary.main', // Set border color
      },
      '.MuiDivider-wrapper': {
        backgroundColor: 'transparent', // Remove background color from the wrapper
      },
    }}
  >
    {icon || (text && (
      <Typography variant="h6" color="secondary">
        {text}
      </Typography>
    ))}
  </Divider>
);


const DonationSuccess: React.FC = () => {
  return (
    <>
      <Box sx={{ backgroundColor: 'grey.100', py: 8 }}>
        <Container maxWidth="sm" sx={{ height: 600, py: 8 }}>
          <Box textAlign="center">
            <Typography variant="h2" color="secondary" gutterBottom>
              Thank You!
            </Typography>
            <Typography variant="h6">
              Your donation was successful. We deeply appreciate your support!
            </Typography>
          </Box>
        </Container>
        <ElegantDivider icon={<Public fontSize="inherit" color="secondary" />} />

      </Box>
    </>
  );
};

export default DonationSuccess;

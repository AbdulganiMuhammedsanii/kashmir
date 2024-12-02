import React from "react";
import { Typography, Container, Box } from "@mui/material";

const DonationCancel: React.FC = () => {
  return (
    <Container maxWidth="sm" sx={{ py: 8 }}>
      <Box textAlign="center">
        <Typography variant="h3" color="error" gutterBottom>
          Donation Cancelled
        </Typography>
        <Typography variant="body1">
          Your donation process was cancelled. Please try again or contact us for assistance.
        </Typography>
      </Box>
    </Container>
  );
};

export default DonationCancel;

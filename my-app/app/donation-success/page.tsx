import React from "react";
import { Typography, Container, Box, Grid, Link, Divider } from "@mui/material";
import { Mail, Public } from '@mui/icons-material';



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


        {/* Contact Section */}


        {/* Footer */}
        <Box sx={{ py: 4, backgroundColor: 'primary.main', color: 'white' }}>
          <Container maxWidth="lg">
            <Grid container spacing={4}>
              <Grid item xs={12} md={4}>
                <Typography variant="h6" gutterBottom>
                  Futures of Kashmir
                </Typography>
                <Typography variant="body2">
                  <Mail fontSize="small" /> futuresofkashmir@gmail.com
                </Typography>
                <Typography variant="body2">123 Charity Street, Kindness City, Country</Typography>
              </Grid>
              <Grid item xs={12} md={4}>
                <Typography variant="h6" gutterBottom>
                  Quick Links
                </Typography>
                <Link href="#about" color="primary" underline="hover" display="block">
                  About Us
                </Link>
                <Link variant="body1" href="#mission" color="inherit" underline="hover" display="block">
                  Our Mission
                </Link>
                <Link variant="body1" href="#impact" color="inherit" underline="hover" display="block">
                  Impact
                </Link>
              </Grid>
              <Grid item xs={12} md={4}>
                <Typography variant="h6" gutterBottom>
                  Follow Us
                </Typography>
                {/* Social media icons would go here */}
              </Grid>
            </Grid>
            {/*<Typography variant="body2" align="center" sx={{ mt: 4 }}>
          © {new Date().getFullYear()} Non-Profit Name. All Rights Reserved.
        </Typography>*/}
          </Container>
        </Box>
      </Box>
    </>
  );
};

export default DonationSuccess;

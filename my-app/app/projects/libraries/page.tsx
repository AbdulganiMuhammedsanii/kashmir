"use client"
/* Always check to see if you are correctly using "use client"**/
import React from "react";
import {
  Typography,
  Button,
  Container,
  Box,
  Grid,
  TextField,
  Link,
  Divider
} from '@mui/material';
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

const Projects: React.FC = () => {
  return (
    <>
      <Box
        id="home"
        sx={{
          backgroundImage: `url(/images/booklibrary.png)`,
          height: '45vh', // Increase the height to make the section bigger

          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: 'white',
          py: 10,
          textAlign: 'center',
          position: 'relative',
        }}
      >
        {/* Overlay */}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.5)', // Adjust the opacity as needed
            zIndex: 1,
          }}
        />
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
          <Typography color="grey.100" variant="h2" component="h1" gutterBottom>
            Our Partners
          </Typography>


        </Container>
      </Box>




      <ElegantDivider icon={<Public fontSize="inherit" color="secondary" />} />


      {/* Impact Section */}
      <Box id="school-supply-distribution" sx={{ py: 8, backgroundColor: 'grey.100' }}>
        <Container maxWidth="lg">

          <Grid container spacing={4} sx={{ mt: 4 }}>
            {/* Left Side: Image */}


            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  height: '100%',
                  overflow: 'hidden',
                  borderRadius: 2,
                }}
              >
                <img
                  src="../images/mirirosh.png" // Replace with your image path
                  alt="School Supply Distribution"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    borderRadius: 8,
                  }}
                />
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="h3" color="secondary" component="h2" gutterBottom>
                Miri Roshni School
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  height: '100%',
                  overflow: 'hidden',
                  borderRadius: 2,
                }}
              >
                <img
                  src="../images/karimari.png" // Replace with your image path
                  alt="School Supply Distribution"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    borderRadius: 8,
                  }}
                />
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="h3" color="secondary" component="h2" gutterBottom>
                Kali Nari School
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  height: '100%',
                  overflow: 'hidden',
                  borderRadius: 2,
                }}
              >
                <img
                  src="../images/khaigala.png" // Replace with your image path
                  alt="School Supply Distribution"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    borderRadius: 8,
                  }}
                />
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="h3" color="secondary" component="h2" gutterBottom>
                Khaigala School
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  height: '100%',
                  overflow: 'hidden',
                  borderRadius: 2,
                }}
              >
                <img
                  src="../images/kuyain.png" // Replace with your image path
                  alt="School Supply Distribution"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    borderRadius: 8,
                  }}
                />
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="h3" color="secondary" component="h2" gutterBottom>
                Kuyain School
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  height: '100%',
                  overflow: 'hidden',
                  borderRadius: 2,
                }}
              >
                <img
                  src="../images/motareen.png" // Replace with your image path
                  alt="Motareen School"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    borderRadius: 8,
                  }}
                />
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="h3" color="secondary" component="h2" gutterBottom>
                Motareen School
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <ElegantDivider icon={<Public fontSize="inherit" color="secondary" />} />


      {/* Impact Section */}
      <Box id="school-supply-distribution" sx={{ py: 8, backgroundColor: 'grey.100' }}>
        <Container maxWidth="lg">

          <Grid container spacing={4} sx={{ mt: 4 }}>
            {/* Centered Text */}
            <Grid item xs={12}>
              <Typography
                variant="h3"
                color="secondary"
                component="h2"
                gutterBottom
                align="center" // Centers the text
              >
                On Ground Partners
              </Typography>
            </Grid>

            {/* Text and Image Side by Side */}
            <Grid item xs={12} md={6}>
              <Typography variant="h4" color="secondary" component="h2" gutterBottom>
                Barmung Khurd Welfare Trust
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  height: '100%',
                  overflow: 'hidden',
                  borderRadius: 2,
                  display: 'flex', // Ensures image alignment in its box
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <img
                  src="../images/motareen.png" // Replace with your image path
                  alt="Motareen School"
                  style={{
                    width: '100%',
                    height: 'auto', // Maintains aspect ratio
                    objectFit: 'cover',
                    borderRadius: 8,
                  }}
                />
              </Box>
            </Grid>
          </Grid>

        </Container>
      </Box>


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

    </>);
};

export default Projects;

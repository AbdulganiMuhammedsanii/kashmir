"use client";
import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  Box,
  Grid,
  Paper,
  TextField,
  Link,
  Divider,
  Menu, MenuItem,
  keyframes
} from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import landingPageImage from '../public/images/landingpagemission.jpg';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
// ... existing code ...
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Script from 'next/script';
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


const NonProfitWebsite: React.FC = () => {
  return (
    <>
      <Box sx={{ position: "relative", overflow: "hidden", height: "100vh" }}>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 2500 }}
          loop
          speed={1000} // Increase the transition duration for smoother sliding
          style={{ width: "100%", height: "100vh" }}
        >
          <SwiperSlide>
            <img
              src="/images/motareen.png"
              alt="Slide 1"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="/images/mirirosh.png"
              alt="Slide 2"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="/images/karimari.png"
              alt="Slide 3"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="/images/khaigala.png"
              alt="Slide 4"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </SwiperSlide>
        </Swiper>
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "rgba(0, 0, 0, 0.5)", // Optional overlay for better text contrast
            zIndex: 2, // Ensure text is above the carousel
            textAlign: "center",
          }}
        >
          <Typography
            variant="h2"
            component="h1"
            color="grey.100"
            sx={{
              fontWeight: "bold",
              textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)", // Add a shadow for better visibility
            }}
          >
            Futures of Kashmir
          </Typography>
        </Box>
      </Box>

      <ElegantDivider icon={<Public fontSize="inherit" color="secondary" />} />
      {/* Featured Instagram Post Section */}
      <Box id="mission" sx={{ py: 8, backgroundColor: 'grey.100' }}>
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6} color="secondary">
              <Typography variant="h3" color="secondary" component="h2" gutterBottom>
                Check Out Our Instagram
              </Typography>
              <Typography variant="body1" color="secondary" paragraph>
                Stay connected with our journey and witness the transformative power of innovation! Be the first to explore our upcoming projects, crafted with a vision to inspire and make a difference              </Typography>

            </Grid>
            <Grid item xs={12} md={6}>
              <blockquote
                className="instagram-media"
                data-instgrm-permalink="https://www.instagram.com/futuresofkashmir/"
                data-instgrm-version="14"
                style={{
                  margin: "1rem auto",
                  maxWidth: "500px",
                  width: "100%",
                }}
              ></blockquote>
              <Script
                src="//www.instagram.com/embed.js"
                strategy="lazyOnload"
                onLoad={() => {
                  // Optional: If you need to handle something after the script loads
                }}
              />
            </Grid>
          </Grid>
        </Container>
      </Box>
      {/* Mission Section */}
      <Box id="mission" sx={{ py: 8, backgroundColor: 'grey.100' }}>
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <img
                src="images/landingpagemission.jpg"
                alt="Our Mission"
                style={{ width: '100%', borderRadius: 8 }}
              />
            </Grid>
            <Grid item xs={12} md={6} color="secondary">
              <Typography variant="h3" color="secondary" component="h2" gutterBottom>
                Our Mission
              </Typography>
              <Typography variant="body1" color="secondary" paragraph>
                Futures of Kashmir is an organization dedicated to the cause of advancing educational equity and access to literacy in Azad Kashmir.
              </Typography>
              <Typography variant="body1" color="secondary" paragraph>
                The organization works with stakeholders in Kashmir to provide eduactional reosurces to underserved communities, create innovative learning spaces, and emphasize a whole-child approach to education. Our guiding principle is the fundemental idea that all children deserve supportive learning environments and access to an education that recognizes and uplifts their own sense of identity.
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <ElegantDivider icon={<Public fontSize="inherit" color="secondary" />} />


      {/* About Us Section */}
      <Box id="about" sx={{ py: 8, backgroundColor: 'grey.100' }}>
        <Container maxWidth="lg">
          <Typography color="secondary" variant="h2" component="h2" align="center" gutterBottom>
            Our Team
          </Typography>
          <Typography color="secondary" variant="body1" align="center" paragraph>
            We are a non-profit organization dedicated to making a positive impact in the lives of
            those in need. Our team works tirelessly to provide resources, support, and hope.
          </Typography>
          <Grid container justifyContent="center" alignItems="center" spacing={4} sx={{ mt: 4 }}>
            {/* First Row */}
            <Grid item xs={12} md={4}>
              <Box>
                <Box
                  sx={{
                    height: 300, // Fixed height for the image box
                    overflow: 'hidden',
                    borderRadius: 2,
                    mb: 2, // Add margin below the image
                  }}
                >
                  <img
                    src="images/janeeta.png"
                    alt="Janeeta Shaukat"
                    style={{
                      width: '100%',
                      height: '100%',
                      borderRadius: 8,
                      objectFit: 'cover',
                    }}
                  />
                </Box>
                <Typography color="secondary" variant="h6" component="h3">
                  Janeeta Shaukat, Founder
                </Typography>
                <Typography color="secondary" variant="body1">
                  Janeeta is a Senior at the Georgetown School of Health studying Global Health.
                </Typography>
              </Box>
            </Grid>

            <Grid item xs={12} md={4}>
              <Box>
                <Box
                  sx={{
                    height: 300,
                    overflow: 'hidden',
                    borderRadius: 2,
                    mb: 2,
                  }}
                >
                  <img
                    src="images/umer.png"
                    alt="Umer"
                    style={{
                      width: '100%',
                      height: '100%',
                      borderRadius: 8,
                      objectFit: 'cover',
                    }}
                  />
                </Box>
                <Typography color="secondary" variant="h6" component="h3">
                  Umer, On-ground Manager
                </Typography>
                <Typography color="secondary" variant="body1">
                  Umer is a former Miri Roshni Student who served as head boy, directing extra help sessions.
                </Typography>
              </Box>
            </Grid>

            <Grid item xs={12} md={4}>
              <Box>
                <Box
                  sx={{
                    height: 300,
                    overflow: 'hidden',
                    borderRadius: 2,
                    mb: 2,
                  }}
                >
                  <img
                    src="images/nile.png"
                    alt="Nile"
                    style={{
                      width: '100%',
                      height: '100%',
                      borderRadius: 8,
                      objectFit: 'cover',
                    }}
                  />
                </Box>
                <Typography color="secondary" variant="h6" component="h3">
                  Nile, Program Coordinator
                </Typography>
                <Typography color="secondary" variant="body1">
                  Nile is dedicated to ensuring the smooth operation of our community outreach programs.
                </Typography>
              </Box>
            </Grid>

            {/* Second Row */}
            <Grid item xs={12} md={4}>
              <Box>
                <Box
                  sx={{
                    height: 300,
                    overflow: 'hidden',
                    borderRadius: 2,
                    mb: 2,
                  }}
                >
                  <img
                    src="images/meer.png"
                    alt="Meer"
                    style={{
                      width: '100%',
                      height: '100%',
                      borderRadius: 8,
                      objectFit: 'cover',
                    }}
                  />
                </Box>
                <Typography color="secondary" variant="h6" component="h3">
                  Meer, Volunteer Coordinator
                </Typography>
                <Typography color="secondary" variant="body1">
                  Meer works closely with our volunteers to ensure every event is a success.
                </Typography>
              </Box>
            </Grid>

            <Grid item xs={12} md={4}>
              <Box>
                <Box
                  sx={{
                    height: 300,
                    overflow: 'hidden',
                    borderRadius: 2,
                    mb: 2,
                  }}
                >
                  <img
                    src="images/ikram.png"
                    alt="Ikram"
                    style={{
                      width: '100%',
                      height: '100%',
                      borderRadius: 8,
                      objectFit: 'cover',
                    }}
                  />
                </Box>
                <Typography color="secondary" variant="h6" component="h3">
                  Ikram, Logistics Manager
                </Typography>
                <Typography color="secondary" variant="body1">
                  Ikram ensures that all supplies and resources are delivered efficiently.
                </Typography>
              </Box>
            </Grid>

            <Grid item xs={12} md={4}>
              <Box>
                <Box
                  sx={{
                    height: 300,
                    overflow: 'hidden',
                    borderRadius: 2,
                    mb: 2,
                  }}
                >
                  <img
                    src="images/aminah.png"
                    alt="Aminah"
                    style={{
                      width: '100%',
                      height: '100%',
                      borderRadius: 8,
                      objectFit: 'cover',
                    }}
                  />
                </Box>
                <Typography color="secondary" variant="h6" component="h3">
                  Aminah, Fundraising Lead
                </Typography>
                <Typography color="secondary" variant="body1">
                  Aminah leads our fundraising initiatives to bring our projects to life.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box>
                <Box
                  sx={{
                    height: 300,
                    overflow: 'hidden',
                    borderRadius: 2,
                    mb: 2,
                  }}
                >
                  <img
                    src="images/sarah.png"
                    alt="Sarah"
                    style={{
                      width: '100%',
                      height: '100%',
                      borderRadius: 8,
                      objectFit: 'cover',
                    }}
                  />
                </Box>
                <Typography color="secondary" variant="h6" component="h3">
                  Aminah, Fundraising Lead
                </Typography>
                <Typography color="secondary" variant="body1">
                  Aminah leads our fundraising initiatives to bring our projects to life.
                </Typography>
              </Box>
            </Grid>
          </Grid>


        </Container>
      </Box>
      <ElegantDivider icon={<Public fontSize="inherit" color="secondary" />} />




      {/* Impact Section */}
      <Box id="impact" sx={{ py: 8, backgroundColor: 'grey.100' }}>
        <Container maxWidth="lg">
          <Typography variant="h3" color="secondary" component="h2" align="center" gutterBottom>
            Impact
          </Typography>
          <Grid container spacing={4} sx={{ mt: 4 }}>

            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  height: '100%',
                  overflow: 'hidden',
                  borderRadius: 2,
                }}
              >
                <img
                  src="images/school.png" // Replace with your image path
                  alt="Miri Roshni School Library Project"
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
              <Typography variant="h5" color="secondary" component="h3" gutterBottom>
                Accomplishments
              </Typography>
              <Typography variant="body1" color="secondary" gutterBottom>
                <strong>Summer 2022:</strong> Miri Roshni School Library Project
              </Typography>
              <Typography variant="body2" color="secondary" gutterBottom>
                - A library consisting of 418 books was established for students of the Miri Roshni
                school.
                <br />
                - Books in both English and Urdu ranging from fiction to nonfiction are available.
                <br />
                - Regular classroom visits have been implemented.
              </Typography>
              <Typography variant="body1" color="secondary" gutterBottom>
                <strong>School Supply Distribution:</strong>
              </Typography>
              <Typography variant="body2" color="secondary" gutterBottom>
                - 232 textbooks were distributed to low-income students in our partner schools of
                Khaigala, Kuyain, Kali Bari, and Motareen.
                <br />
                - Over 200 students received additional stationery such as notebooks, pens, and pencils.
              </Typography>
              <Typography variant="h5" color="secondary" component="h3" sx={{ mt: 4 }} gutterBottom>
                Recognitions
              </Typography>
              <Typography variant="body2" color="secondary" gutterBottom>
                <strong>Social Innovation and Public Service Fund (SIPS):</strong>
                <br />
                In January 2022, Futures of Kashmir (formerly Read-Aloud Kashmir) received a grant of
                $7,250 from SIPS. SIPS is a $1.5 million student-run fund at Georgetown University that
                annually awards funding to support projects serving the public good.
              </Typography>
              <Typography variant="body2" color="secondary" gutterBottom>
                <strong>Global Impact Pitch Competition (GIPC):
                </strong>
                <br />
                In 2024, Futures of Kashmir received a $1,000 award from Georgetown University's Global Impact Pitch Competition (GIPC). Led by Janeeta Shaukat (SOH '24), the project was celebrated for its initiative to create libraries and empower low-income Kashmiri students through literacy, demonstrating its potential for international impact.
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>
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
    </>);
};

export default NonProfitWebsite;

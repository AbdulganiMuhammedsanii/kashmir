"use client";
import React from 'react';
import {
  Typography,
  Container,
  Box,
  Grid,
  Divider,
} from '@mui/material';

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
// ... existing code ...
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Script from 'next/script';
import { Public } from '@mui/icons-material';
import Image from 'next/image';



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
      <Box sx={{
        position: "relative", overflow: "hidden", height: { xs: '100vw', sm: '100vh' }
      }}>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          autoplay={{ delay: 2500 }}
          loop
          speed={1000} // Increase the transition duration for smoother sliding
          style={{ width: "100%", height: "100vh" }}

        >
          <SwiperSlide>
            <Image
              src="/images/motareen.png"
              alt="Slide 1"
              width={400}
              height={400}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/images/mirirosh.png"
              alt="Slide 2"
              width={400}
              height={400}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/images/karimari.png"
              alt="Slide 3"
              width={400}
              height={400}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/images/khaigala.png"
              alt="Slide 4"
              width={400}
              height={400}
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
        <style jsx global>{`
          .responsive-image {
            width: 100% !important;
            display: block;
            object-position: center;
          }

          @media (max-width: 600px) {
            /* On mobile: square frame, show full image, no cropping */
            .responsive-image {
              height: auto !important;
              object-fit: contain !important;
            }
          }

          @media (min-width: 600px) {
            /* On desktop: fill entire screen height, cover, no misalignment */
            .responsive-image {
              height: 100% !important;
              object-fit: cover !important;
            }
          }
        `}</style>
      </Box>


      <ElegantDivider icon={<Public fontSize="inherit" color="secondary" />} />

      {/* Mission Section */}
      <Box id="mission" sx={{ py: 8, backgroundColor: 'grey.100' }}>
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <Image
                width={450}
                height={350}
                src="/images/landingpagemission.jpg"
                alt="Our Mission"
                // The style includes 'height: auto' to ensure the image maintains its aspect ratio
                style={{ width: '100%', height: 'auto', borderRadius: 8 }}
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
                The organization works with stakeholders in Kashmir to provide educational reosurces to underserved communities, create innovative learning spaces, and emphasize a whole-child approach to education. Our guiding principle is the fundemental idea that all children deserve supportive learning environments and access to an education that recognizes and uplifts their own sense of identity.
              </Typography>
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
                <Image
                  src="/images/school.png" // Replace with your image path
                  alt="Miri Roshni School Library Project"
                  width={400}
                  height={400}
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
                In 2024, Futures of Kashmir received a $1,000 award from Georgetown University&apos;s Global Impact Pitch Competition (GIPC). Led by Janeeta Shaukat (SOH &apos;24), the project was celebrated for its initiative to create libraries and empower low-income Kashmiri students through literacy, demonstrating its potential for international impact.
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <ElegantDivider icon={<Public fontSize="inherit" color="secondary" />} />


      {/* Contact Section */}{/* Featured Instagram Post Section */}
      <Box id="instagram" sx={{ py: 8, backgroundColor: 'grey.100' }}>
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
      <ElegantDivider icon={<Public fontSize="inherit" color="secondary" />} />



    </>);
};

export default NonProfitWebsite;

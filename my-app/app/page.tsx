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
import Link from 'next/link';



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
        position: "relative", overflow: "hidden", height: { xs: '100vh', sm: '100vh' }
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
              src="/images/smiling.jpg"
              alt="Slide 1"
              width={400}
              height={400}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/images/reading.jpg"
              alt="Slide 2"
              width={400}
              height={400}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/images/pointing.jpg"
              alt="Slide 3"
              width={400}
              height={400}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/images/lookingdown.jpg"
              alt="Slide 4"
              width={400}
              height={400}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/images/learning.jpg"
              alt="Slide 4"
              width={400}
              height={400}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/images/kid.jpg"
              alt="Kid"
              width={400}
              height={400}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/images/kid1.jpg"
              alt="Kid 1"
              width={400}
              height={400}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/images/kid3.jpg"
              alt="Kid 3"
              width={400}
              height={400}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/images/kid4.jpg"
              alt="Kid 4"
              width={400}
              height={400}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/images/kid5.jpg"
              alt="Kid 5"
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
            alignItems: "flex-start",
            justifyContent: "flex-start",
            backgroundColor: "rgba(0, 0, 0, 0.5)", // Optional overlay for better text contrast
            zIndex: 2, // Ensure text is above the carousel
            textAlign: "left",
            p: { xs: 2, sm: 3, md: 4 },
          }}
        >
          <Typography
            variant="h4"
            component="h1"
            color="grey.100"
            sx={{
              fontWeight: "bold",
              textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)", // Add a shadow for better visibility
              fontSize: { xs: '1.1rem', sm: '1.5rem', md: '2rem' },
              maxWidth: { xs: '90%', sm: '70%', md: '60%' },
            }}
          >
            Dedicated to advancing educational equity in Azad Kashmir, Pakistan
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
            <Grid item xs={12} md={6} color="text.primary">
              <Typography variant="h3" color="text.primary" component="h2" gutterBottom>
                Our Mission
              </Typography>
              <Typography variant="body1" color="text.primary" paragraph>
                Futures of Kashmir works to build a generation of empowered learners in Azad Kashmir by partnering with communities to create equitable educational spaces that inspire creativity and celebrate identity and potential.
              </Typography>
              <Typography variant="body1" color="text.primary" paragraph>
                The organization works and advocates with stakeholders in Azad Kashmir to provide educational resources to underserved communities, create innovative learning spaces, and emphasize a whole-child approach to education. Our guiding principle is the fundamental idea that all children deserve supportive learning environments and access to an education that recognizes and uplifts their own sense of identity.
              </Typography>
              <Typography
                variant="body1"
                component={Link}
                href="/projects/ongoing"
                color="text.primary"
                sx={{ textDecoration: 'underline', mt: 2, display: 'inline-block' }}
              >
                Learn more about our work
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <ElegantDivider icon={<Public fontSize="inherit" color="secondary" />} />


      {/* Impact Section */}
      <Box id="impact" sx={{ py: 8, backgroundColor: 'grey.100' }}>
        <Container maxWidth="lg">
          <Box
            sx={{
              mt: 4,
              backgroundColor: 'grey.200',
              borderRadius: '8px',
              p: { xs: 2, md: 3 },
            }}
          >
            <Typography variant="h3" color="text.primary" component="h2" align="center" gutterBottom>
              Recognitions
            </Typography>
            <Grid container spacing={2} alignItems="center" justifyContent="space-between">
              <Grid item xs={6} md={3}>
                <Box sx={{ position: 'relative', height: 120, width: '100%' }}>
                  <Image
                    src="/images/gipc.png"
                    alt="GIPC"
                    fill
                    sizes="(max-width: 900px) 50vw, 25vw"
                    style={{ objectFit: 'contain' }}
                  />
                </Box>
              </Grid>
              <Grid item xs={6} md={3}>
                <Box sx={{ position: 'relative', height: 120, width: '100%' }}>
                  <Image
                    src="/images/projforpeace.png"
                    alt="Projects for Peace"
                    fill
                    sizes="(max-width: 900px) 50vw, 25vw"
                    style={{ objectFit: 'contain' }}
                  />
                </Box>
              </Grid>
              <Grid item xs={6} md={3}>
                <Box sx={{ position: 'relative', height: 120, width: '100%' }}>
                  <Image
                    src="/images/sips.png"
                    alt="SIPS"
                    fill
                    sizes="(max-width: 900px) 50vw, 25vw"
                    style={{ objectFit: 'contain' }}
                  />
                </Box>
              </Grid>
              <Grid item xs={6} md={3}>
                <Box sx={{ position: 'relative', height: 120, width: '100%' }}>
                  <Image
                    src="/images/news.png"
                    alt="News"
                    fill
                    sizes="(max-width: 900px) 50vw, 25vw"
                    style={{ objectFit: 'contain' }}
                  />
                </Box>
              </Grid>
            </Grid>
          </Box>
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
                Stay connected with our journey and be the first to explore our upcoming projects!
              </Typography>

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

/* always use Image Prop**/
"use client"
import React from "react";
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
import { Public } from '@mui/icons-material';
import { Swiper, SwiperSlide } from "swiper/react";
// ... existing code ...
import { Navigation, Pagination, Autoplay } from "swiper/modules";
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



const Projects: React.FC = () => {
  return (
    <>
      <Box sx={{
        position: "relative",
        overflow: "hidden",
        width: '100%',
        // Square and smaller on mobile, full screen on desktop
        height: { xs: '100vw', sm: '100vh' }
      }}>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000 }}
          loop
          speed={2000}
          breakpoints={{
            // Mobile vertical slider
            0: {
              slidesPerView: 1,
              direction: 'vertical',
            },
            // Desktop horizontal slider
            600: {
              slidesPerView: 2,
              direction: 'horizontal',
            },
          }}
          style={{ width: "100%", height: "100%" }}
        >
          {['/images/library1.png', '/images/library2.png', '/images/library3.png', '/images/library4.png'].map((src, i) => (
            <SwiperSlide key={i}>
              <Image
                src={src}
                alt={`Slide ${i + 1}`}
                width={400}
                height={400}
                className="responsive-image"
              />
            </SwiperSlide>
          ))}
        </Swiper>

        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 5,
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "rgba(0, 0, 0, 0.1)",
            zIndex: 2,
            textAlign: "center",
          }}
        >
          {/* Overlay Content */}
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

      {/* Impact Section */}
      <Box id="school-supply-distribution" sx={{ py: 8, backgroundColor: 'grey.100' }}>
        <Container maxWidth="lg">
          <Typography variant="h3" color="secondary" component="h2" align="center" gutterBottom>
            School Supply Distribution
          </Typography>
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
                <Image
                  src="/images/supply.png" // Replace with your image path
                  alt="School Supply Distribution"
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

            {/* Right Side: Content */}
            <Grid item xs={12} md={6}>
              <Typography variant="h5" color="secondary" component="h3" gutterBottom>
                About the Project
              </Typography>
              <Typography variant="body1" color="secondary" paragraph>
                Providing children access to basic school supplies is essential to promoting academic achievement and literacy.
              </Typography>
              <Typography variant="body2" color="secondary" paragraph>
                This past summer, Futures of Kashmir worked with four government schools: Kali Nari, Motareen, Kuyain, and Khaigala. Together, we distributed over 200 textbooks and essential school supplies, including notebooks, pens, and pencils.
              </Typography>
              <Typography variant="body2" color="secondary" paragraph>
                We continue to work with our government school partners to provide school supplies for the current school year, which began in March. We are committed to working with our partners in Azad-Kashmir to provide young students with the resources they need to thrive.
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <ElegantDivider icon={<Public fontSize="inherit" color="secondary" />} />

      {/* Impact Section */}
      <Box id="school-supply-distribution" sx={{ py: 8, backgroundColor: 'grey.100' }}>
        <Container maxWidth="lg">
          <Typography variant="h3" color="secondary" component="h2" align="center" gutterBottom>
            Read Aloud
          </Typography>
          <Grid container spacing={4} sx={{ mt: 4 }}>
            {/* Left Side: Image */}
            <Grid item xs={12} md={4}>
              <Typography variant="h5" color="secondary" component="h3" gutterBottom>
                About the Project
              </Typography>
              <Typography variant="body1" color="secondary" paragraph>
                Providing children access to basic school supplies is essential to promoting academic achievement and literacy.
              </Typography>
              <Typography variant="body2" color="secondary" paragraph>
                This past summer, Futures of Kashmir worked with four government schools: Kali Nari, Motareen, Kuyain, and Khaigala. Together, we distributed over 200 textbooks and essential school supplies, including notebooks, pens, and pencils.
              </Typography>
              <Typography variant="body2" color="secondary" paragraph>
                We continue to work with our government school partners to provide school supplies for the current school year, which began in March. We are committed to working with our partners in Azad-Kashmir to provide young students with the resources they need to thrive.
              </Typography>
            </Grid>
            <Grid item xs={12} md={8}>
              <Box
                sx={{
                  height: 400,
                  overflow: 'hidden',
                  borderRadius: 2,
                }}
              >
                <Image
                  src="/images/readaloud2.png" // Replace with your image path
                  alt="School Supply Distribution"
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



            {/* Right Side: Content */}
          </Grid>
        </Container>
      </Box>

    </>);
};

export default Projects;

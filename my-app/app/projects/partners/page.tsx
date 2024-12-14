"use client"
/* Always check to see if you are correctly using "use client"**/
import React from "react";
import {
  Typography,
  Container,
  Box,
  Grid,
  Divider
} from '@mui/material';
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

const Projects: React.FC = () => {
  return (
    <>
      <Box sx={{
        position: "relative", overflow: "hidden", height: { xs: '100vw', sm: '100vh' }
      }}>
        <Image
          src="/images/booklibrary.png"
          alt="Slide 1"
          width={400}
          height={400}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />

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
            About Us
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
                  <Image
                    src="/images/janeeta.png"
                    alt="Janeeta Shaukat"
                    width={400}
                    height={400}
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
                  <Image
                    src="/images/umer.png"
                    alt="Umer"
                    width={400}
                    height={400}
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
                  <Image
                    src="/images/nile.png"
                    alt="Nile"
                    width={400}
                    height={400}
                    style={{
                      width: '100%',
                      height: '100%',
                      borderRadius: 8,
                      objectFit: 'cover',
                    }}
                  />
                </Box>
                <Typography color="secondary" variant="h6" component="h3">
                  Nile Adhami
                </Typography>
                <Typography color="secondary" variant="body1">
                  Nile is a Junior in the Georgetown College studying Government with a minor in Justice & Peace Studies.                </Typography>
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
                  <Image
                    src="/images/meer.png"
                    alt="Meer"
                    width={400}
                    height={400}
                    style={{
                      width: '100%',
                      height: '100%',
                      borderRadius: 8,
                      objectFit: 'cover',
                    }}
                  />
                </Box>
                <Typography color="secondary" variant="h6" component="h3">
                  Meer Malik
                </Typography>
                <Typography color="secondary" variant="body1">
                  Meer is a Senior the Georgetown University School of Foreign Service studying International Politics.
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
                  <Image
                    src="/images/ikram.png"
                    alt="Ikram"
                    width={400}
                    height={400}
                    style={{
                      width: '100%',
                      height: '100%',
                      borderRadius: 8,
                      objectFit: 'cover',
                    }}
                  />
                </Box>
                <Typography color="secondary" variant="h6" component="h3">
                  Ikram Muhammedsani
                </Typography>
                <Typography color="secondary" variant="body1">
                  Ikram is a Junior in the Georgetown University School of Health majoring in Human Science with a minor in Islam & Christian Understanding.
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
                  <Image
                    src="/images/aminah.png"
                    alt="Aminah"
                    width={400}
                    height={400}
                    style={{
                      width: '100%',
                      height: '100%',
                      borderRadius: 8,
                      objectFit: 'cover',
                    }}
                  />
                </Box>
                <Typography color="secondary" variant="h6" component="h3">
                  Aminah Yusuf
                </Typography>
                <Typography color="secondary" variant="body1">
                  Aminah is a Senior at Georgetown School of Foreign Service studying International Political Economy with a minor in Islam & Christian Understanding.                </Typography>
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
                  <Image
                    src="/images/sarah.png"
                    alt="Sarah"
                    width={400}
                    height={400}
                    style={{
                      width: '100%',
                      height: '100%',
                      borderRadius: 8,
                      objectFit: 'cover',
                    }}
                  />
                </Box>
                <Typography color="secondary" variant="h6" component="h3">
                  Sarah Ali
                </Typography>
                <Typography color="secondary" variant="body1">
                  Sarah is a Sophmore in the Georgetown College studying Computer Science.
                </Typography>
              </Box>
            </Grid>
          </Grid>


        </Container>
      </Box>
      <ElegantDivider icon={<Public fontSize="inherit" color="secondary" />} />


      {/* Impact Section */}

      <Box id="school-supply-distribution" sx={{ py: 8, backgroundColor: 'grey.100' }}>
        <Container maxWidth="lg">
          <Typography color="secondary" variant="h2" component="h2" align="center" gutterBottom>
            Our Partners
          </Typography>
          <Typography color="secondary" variant="body1" align="center" paragraph>
            Our partner schools are dedicated to fostering educational equity and literacy in Azad Kashmir. These schools collaborate with us to ensure that underserved students have access to essential resources, innovative learning spaces, and support for holistic development. Together, we distribute textbooks, school supplies, and create library projects to inspire learning and growth. Partnering with schools such as Miri Roshni, Kali Nari, Motareen, and Kuyain, we work to uplift communities and nurture a brighter future for the region's youth.
          </Typography>

          <Grid container spacing={4} sx={{ mt: 4 }}>
            {/* Left Side: Image */}
            <Grid item xs={12} md={12} justifyContent="center" alignItems="center">
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
                <Image
                  src="/images/mirirosh.png" // Replace with your image path
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

            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  height: '100%',
                  overflow: 'hidden',
                  borderRadius: 2,
                }}
              >
                <Image
                  src="/images/library3.png" // Replace with your image path
                  alt="School Supply Distribution"
                  width={200}
                  height={200}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    borderRadius: 8,
                  }}
                />
              </Box>
            </Grid>
            <Grid item xs={12} md={12}>
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
                <Image
                  src="/images/karimari.png" // Replace with your image path
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
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  height: '100%',
                  overflow: 'hidden',
                  borderRadius: 2,
                }}
              >
                <Image
                  src="/images/kalinari.png" // Replace with your image path
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
            <Grid item xs={12} md={12}>
              <Typography variant="h3" color="secondary" component="h2" gutterBottom>
                Motareen School
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
                <Image
                  src="/images/motareen.png" // Replace with your image path
                  alt="Motareen School"
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
              <Image
                src="/images/motareeninfo.png" // Replace with your image path
                alt="Motareen School"
                width={400}
                height={400}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  borderRadius: 8,
                }}
              />
            </Grid>

            <Grid item xs={12} md={12}>
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
                <Image
                  src="/images/kuyain.png" // Replace with your image path
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
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  height: '100%',
                  overflow: 'hidden',
                  borderRadius: 2,
                }}
              >
                <Image
                  src="/images/kuyaininfo.png" // Replace with your image path
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
                <Image
                  src="/images/motareen.png" // Replace with your image path
                  alt="Motareen School"
                  width={400}
                  height={400}
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




    </>);
};

export default Projects;

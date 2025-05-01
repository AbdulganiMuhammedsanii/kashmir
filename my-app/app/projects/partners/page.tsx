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
          src="/images/aboutuss.jpg"
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
                  Janeeta Shaukat, Founder and President
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
                    src="/images/faceless.png"
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
                  Ikram Muhammadsani, Director of Programs and Innovation
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
                    src="/images/manahal.jpg"
                    alt="Manahal"
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
                  Manahal Faizal, Director of Financial Operations
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
                    src="/images/Isabel.png"
                    alt="Isabel"
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
                  Isabel Powell, Director of Development and Sustainability
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
                    src="/images/abbypark.png"
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
                  Abby Park, Director of Content and Communications
                </Typography>

              </Box>
            </Grid>

          </Grid>


        </Container>
      </Box >
      <ElegantDivider icon={<Public fontSize="inherit" color="secondary" />} />



      {/* Impact Section */}

      <Box id="school-supply-distribution" sx={{ py: 8, backgroundColor: 'grey.100' }}>
        <Container maxWidth="lg">
          <Typography color="secondary" variant="h2" component="h2" align="center" gutterBottom>
            Our Partners
          </Typography>
          <Typography color="secondary" variant="body1" align="center" paragraph>
            Our partner schools are dedicated to fostering educational equity and literacy in Azad Kashmir. These schools collaborate with us to ensure that underserved students have access to essential resources, innovative learning spaces, and support for holistic development. Together, we distribute textbooks, school supplies, and create library projects to inspire learning and growth.           </Typography>

          <Grid container spacing={4} sx={{ mt: 4 }}>
            {/* First Row: Titles */}
            <Grid item xs={6} md={6} justifyContent="center" alignItems="center">
              <Typography variant="h5" color="secondary" component="h2" gutterBottom>
                Miri Roshni School
              </Typography>
            </Grid>
            <Grid item xs={6} md={6} justifyContent="center" alignItems="center">
              <Typography variant="h5" color="secondary" component="h2" gutterBottom>
                Kali Nari School
              </Typography>
            </Grid>
            {/* First Row: Images */}
            <Grid item xs={6} md={6}>
              <Box
                sx={{
                  height: '100%',
                  overflow: 'hidden',
                  borderRadius: 2,
                }}
              >
                <Image
                  src="/images/mirirosh.png"
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
            <Grid item xs={6} md={6}>
              <Box
                sx={{
                  height: '100%',
                  overflow: 'hidden',
                  borderRadius: 2,
                }}
              >
                <Image
                  src="/images/karimari.png"
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
            {/* Second Row: Titles */}
            <Grid item xs={6} md={6} justifyContent="center" alignItems="center">
              <Typography variant="h5" color="secondary" component="h2" gutterBottom>
                Motareen School
              </Typography>
            </Grid>
            <Grid item xs={6} md={6} justifyContent="center" alignItems="center">
              <Typography variant="h5" color="secondary" component="h2" gutterBottom>
                Kuyain School
              </Typography>
            </Grid>
            {/* Second Row: Images */}
            <Grid item xs={6} md={6}>
              <Box
                sx={{
                  height: '100%',
                  overflow: 'hidden',
                  borderRadius: 2,
                }}
              >
                <Image
                  src="/images/motareen.png"
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
            <Grid item xs={6} md={6}>
              <Box
                sx={{
                  height: '100%',
                  overflow: 'hidden',
                  borderRadius: 2,
                }}
              >
                <Image
                  src="/images/kuyain.png"
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
      </Box >

      <ElegantDivider icon={<Public fontSize="inherit" color="secondary" />} />


      {/* Impact Section */}

      <Box id="school-supply-distribution" sx={{ py: 8, backgroundColor: 'grey.100' }}>
        <Container maxWidth="lg">
          <Typography color="secondary" variant="h4" component="h4" align="center" gutterBottom>
            Board of Directors
          </Typography>

          <Grid container spacing={2} sx={{ mt: 3 }}>
            {/* First Row: Titles */}
            <Grid item xs={6} md={6} justifyContent="center" alignItems="center">
              <Typography variant="subtitle1" color="secondary" component="h2" gutterBottom>
                Nabeel Hussain, Engineer, affiliated with the Red Crescent.
              </Typography>
            </Grid>
            <Grid item xs={6} md={6} justifyContent="center" alignItems="center">
              <Typography variant="subtitle1" color="secondary" component="h2" gutterBottom>
                Iltaf Hussain, Chief of Barmung.
              </Typography>
            </Grid>
            {/* First Row: Images */}

            {/* Second Row: Titles */}
            <Grid item xs={6} md={6} justifyContent="center" alignItems="center">
              <Typography variant="subtitle1" color="secondary" component="h2" gutterBottom>
                Hanif Hijazi, Director of MRS, has experience working with UNICEF.
              </Typography>
            </Grid>
            <Grid item xs={6} md={6} justifyContent="center" alignItems="center">
              <Typography variant="subtitle1" color="secondary" component="h2" gutterBottom>
                Benish Latif, Head Teacher at Kali Nari Girls' Primary School.
              </Typography>
            </Grid>

            <Grid item xs={6} md={6} justifyContent="center" alignItems="center">
              <Typography variant="subtitle1" color="secondary" component="h2" gutterBottom>
                Ahmar Choudry, Director of the Barmung Khurd Welfare Trust.
              </Typography>
            </Grid>
            <Grid item xs={6} md={6} justifyContent="center" alignItems="center">
              <Typography variant="subtitle1" color="secondary" component="h2" gutterBottom>
                [Name], Director of Education for the Girls' School Sector in the Kashmir district.
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box >

      <ElegantDivider icon={<Public fontSize="inherit" color="secondary" />} />






    </>);
};

export default Projects;

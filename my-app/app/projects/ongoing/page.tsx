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
import ProjectsTimeline from "../../components/ProjectsTimeline"; // adapt your path

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
      {/* timeline */}
      <Box id="school-supply-distribution" sx={{ py: 8, backgroundColor: 'grey.100' }}>
        <ProjectsTimeline />
      </Box>




      <ElegantDivider icon={<Public fontSize="inherit" color="secondary" />} />



    </>);
};

export default Projects;

"use client";
import React, { useState } from "react";
import {
  Box, Typography, TextField, Button, Container, Grid, Divider
} from "@mui/material";
import axios from "axios";
import Image from 'next/image';

import { Public } from '@mui/icons-material';
const DonatePage: React.FC = () => {
  const [amount, setAmount] = useState<string>(""); // Use a string to start with an empty input
  const [email, setEmail] = useState<string>(""); // State for email
  const [name, setName] = useState<string>(""); // Use a string to start with an empty input


  const handleDonate = async (donation_type: string) => {
    const donationAmount = parseFloat(amount);

    if (!donationAmount || donationAmount <= 0 || !email) {
      alert("Please enter a valid donation amount and email.");
      return;
    }

    try {
      const response = await axios.post("/api/donation-session", {
        amount: donationAmount,
        email,
        name,
        donation_type
      });
      window.location.href = response.data.url; // Redirect to Stripe
    } catch (error) {
      console.error("Error creating Stripe session:", error);
      alert("Failed to create a donation session. Please try again.");
    }
  };

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

  return (
    <>
      <Box sx={{ backgroundColor: 'grey.100', py: 8 }}>
        <Container maxWidth="lg" sx={{ textAlign: "center", py: 10 }}>
          {/* Image Section */}
          <Grid container spacing={10} alignItems="center">
            <Grid item xs={12} md={7}>
              <Box
                sx={{
                  mb: 4,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Image
                  src="/images/landingpagemission.jpg" // Replace with your image path
                  alt="Support Our Cause"
                  width={400}
                  height={400}
                  style={{
                    width: "100%", // Makes the image take the full width of the container
                    height: "auto", // Maintains the aspect ratio
                    maxHeight: "500px", // Limits the height for large screens
                    borderRadius: 8,
                    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                  }}
                />
              </Box>
            </Grid>



            {/* Form Section */}
            <Grid item xs={12} md={5}>
              <Typography variant="h4" gutterBottom color="primary">
                <i>Make a Donation, Support Our Mission</i>
              </Typography>
              <Typography variant="body1" gutterBottom color="primary">
                With your help we will be able to carry out our aim to ensure all children have supportive learning environments and access to an education that recognizes and uplifts their own sense of identity.
              </Typography>
              <TextField
                fullWidth
                label="Your name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
                sx={{ my: 2 }}
              />
              <TextField
                fullWidth
                label="Your Email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                sx={{ my: 2 }}
              />
              <TextField
                fullWidth
                label="Donation Amount (USD)"
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="Enter amount" // Placeholder for an empty input
                sx={{ my: 2 }}
              />
              <Button
                variant="contained"
                color="primary"
                size="large"
                onClick={() => handleDonate("Ramadan Donation")}
              >
                Sadaqah Jariyah
              </Button>

              <Button
                variant="contained"
                color="primary"
                size="large"
                onClick={() => handleDonate("Custom Donation")}
                sx={{ ml: 2 }}
              >
                Donate
              </Button>

            </Grid>
          </Grid>
        </Container>
        <ElegantDivider icon={<Public fontSize="inherit" color="secondary" />} />

      </Box>
    </>
  );
};

export default DonatePage;

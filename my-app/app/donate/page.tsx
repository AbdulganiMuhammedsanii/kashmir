"use client";
import React, { useState } from "react";
import {
  Box, Typography, TextField, Button, Container, Grid, Divider
} from "@mui/material";
import axios from "axios";
import Image from 'next/image';

import { Public } from '@mui/icons-material';

const DonatePage: React.FC = () => {
  const [amount, setAmount] = useState<string>(""); // The donation amount, can be "5", "10" or custom
  const [email, setEmail] = useState<string>("");
  const [name, setName] = useState<string>("");

  // Helpers for amount selector UI
  const [selectedPreset, setSelectedPreset] = useState<null | string>(null);

  const handlePresetAmount = (value: string) => {
    setAmount(value);
    setSelectedPreset(value);
  };

  const handleCustomAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(e.target.value);
    setSelectedPreset(null);
  };

  const handleDonate = async () => {
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
        donation_type: "Custom Donation"
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
        my: 0,
        backgroundColor: "grey.100",
        '&::before, &::after': {
          borderColor: 'secondary.main',
        },
        '.MuiDivider-wrapper': {
          backgroundColor: 'transparent',
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
                  src="/images/landingpagemission.jpg"
                  alt="Support Our Cause"
                  width={400}
                  height={400}
                  style={{
                    width: "100%",
                    height: "auto",
                    maxHeight: "500px",
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

              {/* Donation Amount Selector */}
              <Box sx={{ display: "flex", gap: 2, mb: 1 }}>
                <Button
                  fullWidth
                  variant={selectedPreset === "5" ? "contained" : "outlined"}
                  color="primary"
                  sx={{
                    fontWeight: 600,
                    py: 2,
                    borderRadius: 2,
                    borderWidth: 2,
                    borderColor: selectedPreset === "5" ? "primary.main" : undefined,
                  }}
                  onClick={() => handlePresetAmount("5")}
                >
                  $5
                </Button>
                <Button
                  fullWidth
                  variant={selectedPreset === "10" ? "contained" : "outlined"}
                  color="primary"
                  sx={{
                    fontWeight: 600,
                    py: 2,
                    borderRadius: 2,
                    borderWidth: 2,
                    borderColor: selectedPreset === "10" ? "primary.main" : undefined,
                  }}
                  onClick={() => handlePresetAmount("10")}
                >
                  $10
                </Button>
              </Box>

              {/* "Other" amount field spans full width below */}
              <TextField
                fullWidth
                label="Other amount (USD)"
                type="number"
                inputProps={{ min: 1 }}
                value={selectedPreset ? "" : amount}
                onChange={handleCustomAmountChange}
                placeholder="Enter other amount"
                sx={{ my: 2 }}
              />

              <Button
                variant="contained"
                color="primary"
                size="large"
                fullWidth
                sx={{
                  backgroundColor: "#FFA500",
                  color: "#fff",
                  fontWeight: "bold",
                  py: 1.5,
                  fontSize: "1.1rem",
                  mt: 1,
                  textTransform: "none",
                  boxShadow: 2,
                  "&:hover": {
                    backgroundColor: "#cc8400",
                  }
                }}
                onClick={handleDonate}
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

"use client"
import { Mail } from "@mui/icons-material";
import { Box, Container, Grid, Typography } from "@mui/material";
/*  make sure to use @mui/material/Link to do the overloading of the variant and link shortcut stuff**/
import NextLink from 'next/link';


const footer: React.FC = () => {
  return (
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
            <Typography variant="body2">2 Main Street, Irvington, New York, 10533
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Quick Links
            </Typography>
            <NextLink href="/#about" passHref>
              <Typography variant="body1" color="grey.100" sx={{ textDecoration: 'underline', display: 'block', textDecorationcolor: 'grey.100' }}>
                About Us
              </Typography>
            </NextLink>
            <NextLink href="/#mission" passHref>
              <Typography variant="body1" color="grey.100" sx={{ textDecoration: 'underline', textDecorationColor: 'grey.100', display: 'block' }}>
                Our Mission
              </Typography>
            </NextLink>
            <NextLink href="/#impact" passHref>
              <Typography variant="body1" color="grey.100" sx={{ textDecoration: 'underline', textDecorationColor: 'grey.100', display: 'block' }}>
                Impact
              </Typography>
            </NextLink>
          </Grid>
          <Grid item xs={12} md={4}>
            <NextLink href="#instagram" passHref>
              <Typography variant="body1" color="grey.100" sx={{ textDecoration: 'underline', display: 'block', textDecorationcolor: 'grey.100' }}>
                Follow Us
              </Typography>
            </NextLink>
            {/* Social media icons would go here */}
          </Grid>
        </Grid>
        {/*<Typography variant="body2" align="center" sx={{ mt: 4 }}>
            © {new Date().getFullYear()} Non-Profit Name. All Rights Reserved.
          </Typography>*/}
      </Container>
    </Box >

  );
};

export default footer;
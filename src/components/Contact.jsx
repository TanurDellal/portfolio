import { Box, Button, Container, Typography } from "@mui/material";
import BoxCard from "./BoxCard";

const Contact = () => {
  return (
    <BoxCard id="contact">
      <Container>
        <Typography variant="h3" align="center" gutterBottom>
          Contact Me
        </Typography>
        <Typography variant="body1" align="center" paragraph>
          Feel free to reach out to me.
        </Typography>
        <Box textAlign="center">
          <Button variant="contained" color="primary">
            Send a Message
          </Button>
        </Box>
      </Container>
    </BoxCard>
  );
};

export default Contact;

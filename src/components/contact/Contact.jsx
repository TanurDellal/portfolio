import { Box, Button, Collapse, Typography } from "@mui/material";
import BoxCard from "../UI/BoxCard";
import ContactForm from "./ContactForm";
import { useState } from "react";

const Contact = () => {
  const [formVisible, setFormVisible] = useState(false);

  const toggleFormVisibility = () => {
    setFormVisible((prev) => !prev);
  };

  return (
    <BoxCard id="contact">
      <Typography variant="h3" align="center" gutterBottom>
        Contact Me
      </Typography>
      <Typography variant="body1" align="center" paragraph>
        Feel free to reach out to me.
      </Typography>
      <Box sx={{ width: "100%", maxWidth: "600px", mx: "auto", mt: 4 }}>
        <Button
          variant="contained"
          color="primary"
          onClick={(e) => {
            e.preventDefault(); // Prevent default behavior
            toggleFormVisibility();
          }}
          sx={{ mb: 3, width: "100%" }}
        >
          {formVisible ? "Hide Form" : "Send a Message"}
        </Button>

        <Collapse in={formVisible}>
          <ContactForm />
        </Collapse>
      </Box>
    </BoxCard>
  );
};

export default Contact;

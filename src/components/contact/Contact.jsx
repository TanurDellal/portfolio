import { Box, Button, Collapse, Typography } from "@mui/material";
import BoxCard from "../UI/BoxCard";
import ContactForm from "./ContactForm";
import { useState } from "react";
import { contact } from "../../index";

const Contact = () => {
  const [formVisible, setFormVisible] = useState(false);

  const toggleFormVisibility = () => {
    setFormVisible((prev) => !prev);
  };

  return (
    <BoxCard id="contact">
      <Typography
        variant="h3"
        sx={{ textAlign: "center", fontWeight: "bold", marginBottom: "40px" }}
      >
        {contact.title}
      </Typography>
      <Typography variant="body1" align="center" paragraph>
        {contact.message}
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

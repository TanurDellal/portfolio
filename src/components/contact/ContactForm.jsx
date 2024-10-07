import { useForm } from "react-hook-form";
import { Box, TextField, Button, Typography } from "@mui/material";
import PaperCard from "../UI/PaperCard";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form Data:", data);
  };

  return (
    <PaperCard>
      <Box
        component="form"
        onSubmit={handleSubmit(onSubmit)}
        sx={{ width: "100%", maxWidth: "1000px", mx: "auto", mt: 4 }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            width: "100%",
            maxWidth: "600px",
            p: 3,
          }}
        >
          <Typography variant="h4" sx={{ mb: 3, textAlign: "center" }}>
            Contact Us
          </Typography>

          <TextField
            fullWidth
            label="Your Name"
            {...register("name", { required: "Name is required" })}
            error={!!errors.name}
            helperText={errors.name ? errors.name.message : ""}
            sx={{
              "& .MuiInputLabel-root.Mui-focused": {
                color: "black",
              },
              "& .MuiOutlinedInput-root": {
                "&.Mui-focused fieldset": {
                  borderColor: "black", // Border color when focused
                },
              },
            }}
          />

          <TextField
            fullWidth
            label="Your Email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                message: "Invalid email address",
              },
            })}
            error={!!errors.email}
            helperText={errors.email ? errors.email.message : ""}
            sx={{
              "& .MuiInputLabel-root.Mui-focused": {
                color: "black",
              },
              "& .MuiOutlinedInput-root": {
                "&.Mui-focused fieldset": {
                  borderColor: "black", // Border color when focused
                },
              },
            }}
          />

          <TextField
            fullWidth
            label="Your Message"
            multiline
            rows={4}
            {...register("message", { required: "Message is required" })}
            error={!!errors.message}
            helperText={errors.message ? errors.message.message : ""}
            sx={{
              "& .MuiInputLabel-root.Mui-focused": {
                color: "black",
              },
              "& .MuiOutlinedInput-root": {
                "&.Mui-focused fieldset": {
                  borderColor: "black", // Border color when focused
                },
              },
            }}
          />

          <Button
            type="submit"
            variant="contained"
            color="primary"
            sx={{ px: 4, py: 1, mt: 3 }}
          >
            Send
          </Button>
        </Box>
      </Box>
    </PaperCard>
  );
};

export default ContactForm;

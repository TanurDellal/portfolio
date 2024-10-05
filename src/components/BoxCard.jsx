import { Box } from "@mui/material";

const BoxCard = ({ id, children }) => {
  return (
    <Box
      component="section"
      id={id}
      sx={{
        width: "100%",
        backgroundColor: "black",
        padding: "60px 20px",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        maxWidth: "100vw",
        margin: "0 auto",
        scrollSnapAlign: "start",
      }}
    >
      {children}
    </Box>
  );
};

export default BoxCard;

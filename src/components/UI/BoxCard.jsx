import { Box } from "@mui/material";

const BoxCard = ({ id, children }) => {
  return (
    <Box
      component="section"
      id={id}
      sx={{
        width: "100%",
        backgroundColor: "transparent",
        padding: "60px 20px",
        minHeight: "100vh",
        height: "auto",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
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

import { Box, Typography } from "@mui/material";

const SectionContentCard = ({ sectionTitle, children }) => {
  return (
    <>
      <Typography
        variant="h3"
        sx={{ textAlign: "center", fontWeight: "bold", marginBottom: "40px" }}
      >
        {sectionTitle}
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
        }}
      >
        {children}
      </Box>
    </>
  );
};

export default SectionContentCard;

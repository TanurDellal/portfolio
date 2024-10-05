import Paper from "@mui/material/Paper";

const PaperCard = ({ elevation = 3, sx = {}, children }) => {
  return (
    <Paper
      elevation={elevation}
      sx={{
        padding: "20px",
        backgroundColor: "white",
        maxWidth: "1100px",
        width: "100%",
      }}
    >
      {children}
    </Paper>
  );
};

export default PaperCard;

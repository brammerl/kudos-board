import { Box, Button, Typography } from "@mui/material";

const EmptyState = ({ title, description, primaryButton }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        justifyContent: "center",
        justifyItems: "center",
        alignContent: "center",
        alignItems: "center",
        textAlign: "center",
        rowGap: "10px",
      }}
    >
      <Typography variang="h3"> {title}</Typography>
      <Typography variant="body1"> {description}</Typography>
      {primaryButton && (
        <Button onClick={primaryButton.onClick} sx={{ width: "20%" }}>
          {primaryButton.text}
        </Button>
      )}
    </Box>
  );
};

export default EmptyState;

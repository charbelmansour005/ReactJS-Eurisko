import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";

const Copyright = () => {
  return (
    <Typography
      sx={{ mt: 3 }}
      variant="body2"
      color="text.secondary"
      align="center"
    >
      {"Copyright © "}
      <Link color="inherit" href="https://euriskomobility.com/">
        Eurisko Mobility {new Date().getFullYear()}
      </Link>
    </Typography>
  );
};

export default Copyright;

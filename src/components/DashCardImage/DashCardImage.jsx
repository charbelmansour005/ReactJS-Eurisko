import { CardMedia } from "@mui/material";
import { chosenCardImage } from "../../helpers/randomizer";

const DashCardImage = () => {
  return (
    <CardMedia
      component="img"
      height="180"
      image={chosenCardImage}
      alt="green iguana"
    />
  );
};

export default DashCardImage;

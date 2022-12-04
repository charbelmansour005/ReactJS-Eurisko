import classes from "../screens/Page404/Page404.module.css";
import Image1 from "../assets/ny.jpeg";
import Image2 from "../assets/ny2.jpeg";

// login logo images
const mainImages = [
  "https://i.ibb.co/4NjDKsn/removedbg-copy.png",
  "https://i.ibb.co/ZKbYJng/removedbg.png",
];
const randomImage = mainImages[Math.floor(Math.random() * 2)];
export const imageURL = randomImage;

// dashboard card image
const cardImages = [Image1, Image2];
const randomCardImage = cardImages[Math.floor(Math.random() * 2)];
export const chosenCardImage = randomCardImage;

// 404 page text title
const colors = ["darkgreen", "black", "purple", "darkorange", "gray"];
const randomColor = colors[Math.floor(Math.random() * 5)];
export const color = randomColor;

// 404 page text body
const classNames = [classes.body_1, classes.body_2, classes.body_3];
const randomClass = classNames[Math.floor(Math.random() * 3)];
export const chosenClassName = randomClass;

// 404 page card variant
const variants = ["outlined", "elevation"];
const randomVariant = variants[Math.floor(Math.random() * 5)];
export const variant = randomVariant;

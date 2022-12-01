import classes from "../screens/NotFound/NotFound.module.css";

const classNames = [classes.body_1, classes.body_2, classes.body_3];
const randomClass = classNames[Math.floor(Math.random() * 3)];
export const chosenClassName = randomClass;

const mainImages = [
  "https://i.ibb.co/4NjDKsn/removedbg-copy.png",
  "https://i.ibb.co/ZKbYJng/removedbg.png",
];
const randomImage = mainImages[Math.floor(Math.random() * 2)];
export const imageURL = randomImage;

const colors = ["darkgreen", "black", "purple", "darkorange", "gray"];
const randomColor = colors[Math.floor(Math.random() * 5)];
export const color = randomColor;

const variants = ["outlined", "elevation"];
const randomVariant = variants[Math.floor(Math.random() * 5)];
export const variant = randomVariant;

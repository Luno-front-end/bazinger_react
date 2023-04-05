import svgSpryte from "../img/spryte.svg";

import imgOneServiceWebp from "../img/service.webp";
import imgOneServiceJpeg from "../img/service.jpeg";

import imgTwoServiceWebp from "../img/service_two.webp";
import imgTwoServiceJpeg from "../img/service_two.jpeg";

import imgThreeServiceWebp from "../img/service_three.webp";
import imgThreeServiceJpeg from "../img/service_three.jpeg";

import imgFourServiceWebp from "../img/phone_help.webp";
import imgFourServiceJpeg from "../img/phone_help.jpeg";

export const itemNavigation = [
  { name: "Home", anchor: true },
  { name: "Features", anchor: true },
  { name: "Gallery", anchor: true },
  { name: "Video", anchor: true },
  { name: "Price", anchor: false },
  { name: "Testimonials", anchor: false },
  { name: "Download", anchor: true },
  { name: "Contact", anchor: true },
];

export const featuresList = [
  {
    img: `${svgSpryte}#layers_icon`,
    header: "Attractive Layout",
    text: "Nunc cursus libero purus ac congue arcu cursus ut sed vitae pulvinar massa idporta nequetiam elerisque mi id faucibus iaculis vitae pulvinar.",
  },
  {
    img: `${svgSpryte}#mobile_icon`,
    header: "Fresh Design",
    text: "Nunc cursus libero purus ac congue arcu cursus ut sed vitae pulvinar massa idporta nequetiam elerisque mi id faucibus iaculis vitae pulvinar.",
  },
  {
    img: `${svgSpryte}#message_icon`,
    header: "multipurpose",
    text: "Nunc cursus libero purus ac congue arcu cursus ut sed vitae pulvinar massa idporta nequetiam elerisque mi id faucibus iaculis vitae pulvinar.",
  },
  {
    img: `${svgSpryte}#comment_icon`,
    header: "Easy to customize",
    text: "Nunc cursus libero purus ac congue arcu cursus ut sed vitae pulvinar massa idporta nequetiam elerisque mi id faucibus iaculis vitae pulvinar.",
  },
];

export const galleryList = [
  {
    imgW: imgOneServiceWebp,
    imgJ: imgOneServiceJpeg,
    textImg: "Screen shot #1",
    alt: "service img one",
    text: "Nunc cursus libero purus ac congue arcu cursus ut sed vitae pulvinar massa idporta nequetiam elerisque mi id faucibus iaculis vitae pulvinar.",
  },
  {
    imgW: imgTwoServiceWebp,
    imgJ: imgTwoServiceJpeg,
    textImg: "Screen shot #2",
    alt: "service img two",
    text: "Nunc cursus libero purus ac congue arcu cursus ut sed vitae pulvinar massa idporta nequetiam elerisque mi id faucibus iaculis vitae pulvinar.",
  },
  {
    imgW: imgThreeServiceWebp,
    imgJ: imgThreeServiceJpeg,
    textImg: "Screen shot #3",
    alt: "service img three",
    text: "Nunc cursus libero purus ac congue arcu cursus ut sed vitae pulvinar massa idporta nequetiam elerisque mi id faucibus iaculis vitae pulvinar.",
  },
  {
    imgW: imgFourServiceWebp,
    imgJ: imgFourServiceJpeg,
    textImg: "Screen shot #4",
    alt: "service img four",
    text: "Nunc cursus libero purus ac congue arcu cursus ut sed vitae pulvinar massa idporta nequetiam elerisque mi id faucibus iaculis vitae pulvinar.",
  },
];

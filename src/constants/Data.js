// constants/Data.js

import img1 from "../assets/vikingimg.png";
import img2 from "../assets/hornButtons/blk-btn.jpg";
import comb from "../assets/images/homeProduct/comb.jpg";
import jewelry from "../assets/images/homeProduct/jewelry.jpg";
import plate from "../assets/horn-plate/image4.jpeg";
import mugs from "../assets/images/homeCarole/horn-mug.png";
import HornCutlery from "../assets/cutlery/image11.jpeg";



export const PRODUCTS = [
  {
    id: "1",
    title: "Horn Buttons",
    image: img2,
    path: '/products/horn-buttons'
  },
    {
    id: "2",
    title: "Horns Mugs",
    image: mugs,
    path: '/products/horn-mugs'
  },
  {
    id: "3",
    title: "Viking Horns",
    image: img1,
    path: '/products/viking-horns'
  },
  {
    id: "4",
    title: "Horn Combs",
    image: comb,
    path: '/'
  },
  {
    id: "5",
    title: "Horn Jewelry",
    image: jewelry,
    path: '/products/horn-jewelry'
  },
  {
    id: "6",
    title: "Horn Plates",
    image: plate,
    path: '/products/horn-plates'
  },
  {
    id: "7",
    title: "Cutlery",
    image: HornCutlery,
    path: '/products/cutlery'
  },
];
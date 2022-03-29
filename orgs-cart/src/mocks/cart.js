import logo from "../../assets/logo.png";

import tomato from "../../assets/fruits/tomato.png";
import broccoli from "../../assets/fruits/broccoli.png";
import potato from "../../assets/fruits/potato.png";
import cucumber from "../../assets/fruits/cucumber.png";
import pumpkin from "../../assets/fruits/pumpkin.png";

export const cart = {
  header: {
    title: "Cart Details",
  },
  details: {
    name: "Basket of vegetables",
    farmName: "Jenny Jack Farm",
    logo: logo,
    description: "A basket of farm-selected produce straight to your kitchen",
    price: "$ 40,00",
    button: "To Buy",
  },
  items: {
    title: "Cart items",
    list: [
      {
        name: "Tomato",
        image: tomato,
      },
      {
        name: "Broccoli",
        image: broccoli,
      },
      {
        name: "Patato",
        image: potato,
      },
      {
        name: "Cucumber",
        image: cucumber,
      },
      {
        name: "Pumpkin",
        image: pumpkin,
      },
    ],
  },
};

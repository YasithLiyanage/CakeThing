import React from "react";
import "./FoodDisplay.css";
import FoodItem from "../FoodItem/FoodItem";
import { menu_list } from "../../assets/frontend_assets/assets";

const food_list = [
  {
    _id: 1,
    name: "Chocolate Cake",
    description: "Rich chocolate sponge with frosting",
    price: 1200,
    category: "Butter Cake",
    image: menu_list[0].menu_image
  },
  {
    _id: 2,
    name: "Strawberry Cheesecake",
    description: "Creamy cheesecake with strawberries",
    price: 1500,
    category: "Cheese Cake",
    image: menu_list[3].menu_image
  }
];

const FoodDisplay = ({ category }) => {
  return (
    <div className="food-display" id="food-display">
      <h2 className="heading-food-display">Top dishes near you</h2>
      <div className="food-display-list">
        {food_list.map((item, index) => {
          if (category === "All" || category === item.category) {
            return (
              <FoodItem
                key={index}
                id={item._id}
                name={item.name}
                description={item.description}
                price={item.price}
                image={item.image}
              />
            );
          }
        })}
      </div>
    </div>
  );
};

export default FoodDisplay;

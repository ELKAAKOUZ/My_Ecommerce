import Image from "next/image";
import { useDispatch } from "react-redux";
import { addToBasket } from "../slices/basketSlice";
import { BeakerIcon, StarIcon } from "@heroicons/react/solid";
import React, { useState } from "react";
import Currency from "react-currency-formatter";

const Max_rating = 5;
const Min_rating = 2;
const truncate = (str, n) => {
  return str?.length > n ? str.substr(0, n - 1) + "..." : str;
};

function Product({ id, title, price, description, category, image }) {
  const quantity = 1;
  const totalPrice = quantity * price;
  const [rating] = useState(
    Math.floor(Math.random() * (Max_rating - Min_rating + 1)) + Min_rating
  );
  const [hasPrime] = useState(Math.random() < 0.5);
  const dispatch = useDispatch();

  const addItemToBasket = () => {
    const product = {
      id,
      rating,
      title,
      quantity: 1,
      hasPrime,
      totalPrice,
      price,
      category,
      image,
      description,
    };
    dispatch(addToBasket(product));
  };
  return (
    <div className="relative flex shadow-md rounded-2xl  flex-col m-5 bg-white z-30 p-10">
      <p className="absolute top-2 right-2 text-xs italic text-gray-400">
        {category}
      </p>
      <Image
        src={image}
        height={200}
        width={200}
        objectFit="contain"
        alt="image"
      />
      <div className="flex">
        {Array(rating)
          .fill()
          .map((_, i) => (
            <StarIcon className="h-10 w-6 text-yellow-400" />
          ))}
      </div>
      <h4 className="line-clamp-2">{title}</h4>
      {hasPrime && <p>has prime delivery</p>}
      <p className="text-xs mt-2 mb-2 ">{truncate(description, 100)}</p>
      <div className="mb-5">
        <Currency quantity={price} currency="GBP" />
      </div>
      {hasPrime && (
        <div className="flex items-center pt-2 pb-2 space-x-2 -mt-5">
          <img className="w-12" src="/prime.jpg" alt="prime pic" />
          <p className="text-xs text-gray-500">FREE Next Day Delivery</p>
        </div>
      )}
      <button onClick={addItemToBasket} className="mt-auto button">
        Add to Basket
      </button>
    </div>
  );
}

export default Product;

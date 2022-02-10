import React from "react";
import { useSelector } from "react-redux";
import Header from "../components/Header";
import ProductsCheckOut from "../components/ProductsCheckOut";
function checkout() {
  const items = useSelector((state) => state.basket.items);

  return (
    <div>
      <Header />
      {items.length === 0 && (
        <p className="p-5 font-bold text-red-800">Basket is Empty !!</p>
      )}
      <div className="grid  grid-flow-row-dense md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4   mx-auto">
        {items.map((item) => (
          <ProductsCheckOut
            key={item.id}
            id={item.id}
            hasPrime={item.hasPrime}
            quantity={item.quantity}
            totalPrice={item.totalPrice}
            rating={item.rating}
            image={item.image}
            price={item.price}
            category={item.category}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
}

export default checkout;

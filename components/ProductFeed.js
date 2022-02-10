import React from "react";
import Product from "./Product";

function ProductFeed(props) {
  const productsfrom_0_to_4 = props.products
    .slice(0, 4)
    .map((product) => (
      <Product
        id={product.id}
        title={product.title}
        key={product.id}
        image={product.image}
        description={product.description}
        price={product.price}
        category={product.category}
      />
    ));
  const productsfrom_4_to_5 = props.products
    .slice(4, 5)
    .map((product) => (
      <Product
        id={product.id}
        title={product.title}
        key={product.id}
        image={product.image}
        description={product.description}
        price={product.price}
        category={product.category}
      />
    ));
  const productsto_end = props.products
    .slice(5, props.products.length)
    .map((product) => (
      <Product
        id={product.id}
        title={product.title}
        key={product.id}
        image={product.image}
        description={product.description}
        price={product.price}
        category={product.category}
      />
    ));
  return (
    <div className="grid -mt-32  grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  md:-mt-52 mx-auto">
      {productsfrom_0_to_4}
      <img src="/4.jpg" className="md:col-span-full lg:hidden" alt="" />
      <div className="md:col-span-2">{productsfrom_4_to_5}</div>
      {productsto_end}
    </div>
  );
}

export default ProductFeed;

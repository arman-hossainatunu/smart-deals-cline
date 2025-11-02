import React from "react";
import { useLoaderData } from "react-router";
import AllProductsItem from "../Components/AllProductsItem";

const AllProducts = () => {
  const products = useLoaderData();
  const data=products

  return (
    <div>
      <h1 className="text-accent">All Products</h1>
     {<div className="max-w-11/12 mx-auto text-center grid gap-5 grid-cols-3">
        {data.map((item) => (
          <AllProductsItem key={item._id} item={item}></AllProductsItem>
        ))}
      </div>
     }
    </div>
  );
};

export default AllProducts;

import React from "react";
import { useLoaderData } from "react-router";
import ProductCard from "../Components/ProductCard";

const Home = () => {
  const data = useLoaderData();
  console.log(data);
  return (
    <div className="mt-[10px]">
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            "url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)",
        }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
            <p className="mb-5">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
      {data.map((item) => (
        <ProductCard key={item._id} item={item}></ProductCard>
      ))}
    </div>
  );
};

export default Home;

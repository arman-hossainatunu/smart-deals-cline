import React from "react";
import { useNavigate } from "react-router";

const AllProductsItem = ({ item }) => {
  const navigate = useNavigate();
  console.log(item);
  return (
    <div className="card bg-base-100 w-96 shadow-sm">
      <figure className="px-10 pt-10">
        <img src={item.image} alt={item.title} className="rounded-xl h-40" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{item.title}</h2>
        <p>
          {item.description.slice(0, 100)}
          {item.description.length > 100 ? "..." : ""}
        </p>
        <button className="btn" onClick={() => navigate(`/details/${item._id}`)}>
          View Details
        </button>
      </div>
    </div>
  );
};

export default AllProductsItem;

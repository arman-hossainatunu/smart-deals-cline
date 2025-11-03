import React from "react";
import { useLoaderData, useParams } from "react-router";

const Update = () => {
  const product = useLoaderData(); // comes from loader in your route
  const { id } = useParams(); // /updateProduct/:id

  const handleUpdate = async (event) => {
    event.preventDefault();

    const formData = {
      title: event.target.title.value,
      minPrice: event.target.minPrice.value,
      maxPrice: event.target.maxPrice.value,
      description: event.target.description.value,
      image: event.target.image.value,
      sellerImage: event.target.sellerImage.value,
    };

    fetch(`http://localhost:3000/products/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("✅ Update Response:", data);
        alert("Product updated successfully!");
      })
      .catch((error) => console.error("❌ Update failed:", error));
  };

  return (
    <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-md mt-10">
      <h2 className="text-2xl font-bold mb-4 text-center">Update Product</h2>

      <form onSubmit={handleUpdate} className="space-y-4">
        {/* Title */}
        <div>
          <label className="block text-sm font-medium mb-1">Title</label>
          <input
            type="text"
            name="title"
            defaultValue={product.title}
            className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-purple-500 outline-none"
            required
          />
        </div>

        {/* Min Price */}
        <div>
          <label className="block text-sm font-medium mb-1">Min Price</label>
          <input
            type="number"
            name="minPrice"
            defaultValue={product.minPrice}
            className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-purple-500 outline-none"
            required
          />
        </div>

        {/* Max Price */}
        <div>
          <label className="block text-sm font-medium mb-1">Max Price</label>
          <input
            type="number"
            name="maxPrice"
            defaultValue={product.maxPrice}
            className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-purple-500 outline-none"
            required
          />
        </div>

        {/* Description */}
        <div>
          <label className="block text-sm font-medium mb-1">Description</label>
          <textarea
            name="description"
            defaultValue={product.description}
            className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-purple-500 outline-none"
            rows="4"
            required
          ></textarea>
        </div>

        {/* Image URL */}
        <div>
          <label className="block text-sm font-medium mb-1">Image URL</label>
          <input
            type="text"
            name="image"
            defaultValue={product.image}
            className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-purple-500 outline-none"
            required
          />
        </div>

        {/* Seller Image URL */}
        <div>
          <label className="block text-sm font-medium mb-1">Seller Image URL</label>
          <input
            type="text"
            name="sellerImage"
            defaultValue={product.sellerImage}
            className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-purple-500 outline-none"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition"
        >
          Update Product
        </button>
      </form>
    </div>
  );
};

export default Update;

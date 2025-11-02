import React, { useState } from "react";

const CreateProduct = () => {
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    minPrice: "",
    maxPrice: "",
    condition: "Brand New",
    usageTime: "",
    image: "",
    sellerName: "",
    sellerEmail: "",
    sellerContact: "",
    sellerImage: "",
    location: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("✅ Product Created Successfully!");
  };

  return (
    <div className="max-w-3xl mx-auto bg-white p-8 rounded-2xl shadow-lg mt-10 border border-gray-100">
      <h2 className="text-3xl font-bold text-center mb-6">
        Create <span className="text-purple-600">A Product</span>
      </h2>

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Title & Category */}
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">Title</label>
            <input
              type="text"
              name="title"
              placeholder="e.g. Yamaha Fz Guitar for Sale"
              value={formData.title}
              onChange={handleChange}
              className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-purple-500 outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Category</label>
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-purple-500 outline-none"
            >
              <option value="">Select a Category</option>
              <option value="toys">Toys</option>
              <option value="clothes">Clothes</option>
              <option value="accessories">Accessories</option>
              <option value="others">Others</option>
            </select>
          </div>
        </div>

        {/* Price */}
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">
              Min Price You Want to Sale ($)
            </label>
            <input
              type="number"
              name="minPrice"
              placeholder="e.g. 18.5"
              value={formData.minPrice}
              onChange={handleChange}
              className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-purple-500 outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Max Price You Want to Sale ($)
            </label>
            <input
              type="number"
              name="maxPrice"
              placeholder="Optional (default = Min Price)"
              value={formData.maxPrice}
              onChange={handleChange}
              className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-purple-500 outline-none"
            />
          </div>
        </div>

        {/* Condition & Usage */}
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">
              Product Condition
            </label>
            <div className="flex items-center gap-4">
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="condition"
                  value="Brand New"
                  checked={formData.condition === "Brand New"}
                  onChange={handleChange}
                />
                Brand New
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="condition"
                  value="Used"
                  checked={formData.condition === "Used"}
                  onChange={handleChange}
                />
                Used
              </label>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Product Usage Time
            </label>
            <input
              type="text"
              name="usageTime"
              placeholder="e.g. 1 year 3 months"
              value={formData.usageTime}
              onChange={handleChange}
              className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-purple-500 outline-none"
            />
          </div>
        </div>

        {/* Image URL */}
        <div>
          <label className="block text-sm font-medium mb-1">
            Product Image URL
          </label>
          <input
            type="text"
            name="image"
            placeholder="https://..."
            value={formData.image}
            onChange={handleChange}
            className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-purple-500 outline-none"
          />
        </div>

        {/* Seller Info */}
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">
              Seller Name
            </label>
            <input
              type="text"
              name="sellerName"
              placeholder="e.g. Artisan Roasters"
              value={formData.sellerName}
              onChange={handleChange}
              className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-purple-500 outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Seller Email
            </label>
            <input
              type="email"
              name="sellerEmail"
              placeholder="e.g. user@email.com"
              value={formData.sellerEmail}
              onChange={handleChange}
              className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-purple-500 outline-none"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">
              Seller Contact
            </label>
            <input
              type="text"
              name="sellerContact"
              placeholder="+8801XXXXXXXXX"
              value={formData.sellerContact}
              onChange={handleChange}
              className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-purple-500 outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Seller Image URL
            </label>
            <input
              type="text"
              name="sellerImage"
              placeholder="https://..."
              value={formData.sellerImage}
              onChange={handleChange}
              className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-purple-500 outline-none"
            />
          </div>
        </div>

        {/* Location */}
        <div>
          <label className="block text-sm font-medium mb-1">Location</label>
          <input
            type="text"
            name="location"
            placeholder="City, Country"
            value={formData.location}
            onChange={handleChange}
            className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-purple-500 outline-none"
          />
        </div>

        {/* Description */}
        <div>
          <label className="block text-sm font-medium mb-1">
            Simple Description about your Product
          </label>
          <textarea
            name="description"
            rows="3"
            placeholder="Write a short description..."
            value={formData.description}
            onChange={handleChange}
            className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-purple-500 outline-none resize-none"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 rounded-lg transition"
        >
          Create A Product
        </button>
      </form>
    </div>
  );
};

export default CreateProduct;

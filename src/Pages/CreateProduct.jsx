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

  // Categories state (dynamic)
  const [categories, setCategories] = useState([
    "toys",
    "clothes",
    "accessories",
    "others",
  ]);

  const [newCategory, setNewCategory] = useState("");

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Add new category
  const handleAddCategory = () => {
    if (newCategory.trim() && !categories.includes(newCategory.trim())) {
      setCategories([...categories, newCategory.trim()]);
      setFormData({ ...formData, category: newCategory.trim() });
      setNewCategory("");
    }
  };

  // Submit form
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3000/products", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      console.log("✅ Product Added:", data);
      alert("✅ Product Created Successfully!");

      // Reset form
      setFormData({
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
    } catch (error) {
      console.error("❌ Error:", error);
      alert("❌ Failed to create product!");
    }
  };

  return (
    <div className="max-w-3xl mx-auto bg-white p-8 rounded-2xl shadow-lg mt-10 border border-gray-100">
      <h2 className="text-3xl font-bold text-center mb-6">
        Create <span className="text-purple-600">A Product</span>
      </h2>

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Title */}
        <div>
          <label className="block text-sm font-medium mb-1">Title</label>
          <input
            type="text"
            name="title"
            placeholder="e.g. Yamaha Fz Guitar for Sale"
            value={formData.title}
            onChange={handleChange}
            className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-purple-500 outline-none"
            required
          />
        </div>

        {/* Category with Dynamic Add */}
        <div>
          <label className="block text-sm font-medium mb-1">Category</label>
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-purple-500 outline-none"
            required
          >
            <option value="">Select a Category</option>
            {categories.map((cat, idx) => (
              <option key={idx} value={cat}>
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
              </option>
            ))}
          </select>

          <div className="mt-2 flex gap-2">
            <input
              type="text"
              placeholder="Add new category"
              value={newCategory}
              onChange={(e) => setNewCategory(e.target.value)}
              className="border rounded-lg px-3 py-2 flex-1 focus:ring-2 focus:ring-purple-500 outline-none"
            />
            <button
              type="button"
              onClick={handleAddCategory}
              className="bg-purple-600 text-white px-3 py-2 rounded-lg hover:bg-purple-700"
            >
              Add
            </button>
          </div>
        </div>

        {/* Price */}
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">Min Price ($)</label>
            <input
              type="number"
              name="minPrice"
              value={formData.minPrice}
              onChange={handleChange}
              placeholder="Min Price"
              className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-purple-500 outline-none"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Max Price ($)</label>
            <input
              type="number"
              name="maxPrice"
              value={formData.maxPrice}
              onChange={handleChange}
              placeholder="max Price"
              className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-purple-500 outline-none"
            />
          </div>
        </div>

        {/* Condition & Usage */}
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">Condition</label>
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
            <label className="block text-sm font-medium mb-1">Usage Time</label>
            <input
              type="text"
              name="usageTime"
              placeholder="Product use time"
              value={formData.usageTime}
              onChange={handleChange}
              className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-purple-500 outline-none"
            />
          </div>
        </div>

        {/* Image URL */}
        <div>
          <label className="block text-sm font-medium mb-1">Image URL</label>
          <input
            type="text"
            name="image"
            value={formData.image}
            onChange={handleChange}
            placeholder="Image URL"
            className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-purple-500 outline-none"
          />
        </div>

        {/* Seller Info */}
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">Seller Name</label>
            <input
              type="text"
              name="sellerName"
              placeholder="Seller Name"
              required
              value={formData.sellerName}
              onChange={handleChange}
              className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-purple-500 outline-none"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Seller Email</label>
            <input
              type="email"
              name="sellerEmail"
              required
              value={formData.sellerEmail}
              onChange={handleChange}
               placeholder="Seller Email"
              className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-purple-500 outline-none"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">Seller Contact</label>
            <input
              type="text"
              name="sellerContact"
              required
                placeholder="+8801XXXXXXXXX"
              value={formData.sellerContact}
              onChange={handleChange}
              className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-purple-500 outline-none"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Seller Image URL</label>
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
          <label className="block text-sm font-medium mb-1">Description</label>
          <textarea
            name="description"
            rows="3"
             placeholder="Write a short description..."
            value={formData.description}
            onChange={handleChange}
            className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-purple-500 outline-none resize-none"
          />
        </div>

        {/* Submit */}
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

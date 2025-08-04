"use client";

import { useState } from "react";

const page=()=> {
  const [form, setForm] = useState({
    name: "",
    description: "",
    category: "",
    pricePerKg: "",
  });
  // const [image, setImage] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // const handleImageChange = (e) => {
  //   setImage(e.target.files[0]);
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    Object.entries(form).forEach(([key, value]) => formData.append(key, value));
    // if (image) formData.append("image", image);

    const res = await fetch("/api/item", {
      method: "POST",
      body: formData,
    });

    const result = await res.json();
    alert(result.message);
    setForm({name: "",
    description: "",
    category: "",
    pricePerKg: "",});
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-white rounded-xl shadow-md">
      <h2 className="text-2xl font-bold mb-4">Add New Scrap Item</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Item Name"
          value={form.name}
          onChange={handleChange}
          required
          className="w-full border p-2 rounded"
        />
        <textarea
          name="description"
          placeholder="Description"
          value={form.description}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />
        <input
          type="text"
          name="category"
          placeholder="Category"
          value={form.category}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />
        <input
          type="number"
          name="pricePerKg"
          placeholder="Price per Kg"
          value={form.pricePerKg}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />
        {/* <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          required
          className="w-full"
        /> */}
        <button
          type="submit"
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          Add Item
        </button>
      </form>
    </div>
  );
};
export default page;

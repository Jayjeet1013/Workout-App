import React, { useState } from "react";
import axios from "axios"; // Import axios for making HTTP requests

const Form: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    weight: "",
    height: "",
    dietType: "",
    goalType: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      // Make an API request to the server with the form data
      const response = await axios.post("/api/form", formData);
      console.log("Response from server:", response.data);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };
  return (
    <div className="max-w-md mx-auto mt-8 p-4 bg-gray-100 rounded-md shadow-md">
      <h2 className="text-2xl font-bold mb-4">User Details</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block font-semibold mb-1">
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Rocky Kumar"
            className="w-full px-4 py-2 border rounded-md"
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="age" className="block font-semibold mb-1">
            Age:
          </label>
          <input
            type="text"
            id="age"
            placeholder="20 Years "
            name="age"
            className="w-full px-4 py-2 border rounded-md"
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="weight" className="block font-semibold mb-1">
            Weight:
          </label>
          <input
            type="text"
            id="weight"
            name="weight"
            placeholder="40 kg "
            className="w-full px-4 py-2 border rounded-md"
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="height" className="block font-semibold mb-1">
            Height:
          </label>
          <input
            type="text"
            id="height"
            placeholder="150 cm "
            name="height"
            className="w-full px-4 py-2 border rounded-md"
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="dietType" className="block font-semibold mb-1">
            Diet Type:
          </label>
          <select
            id="dietType"
            name="dietType"
            className="w-full px-4 py-2 border rounded-md"
            onChange={handleChange}
          >
            <option value="">Select Diet Type</option>
            <option value="vegetarian">Vegetarian</option>
            <option value="non-vegetarian">Non-Vegetarian</option>
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="goalType" className="block font-semibold mb-1">
            Goal Type:
          </label>
          <select
            id="goalType"
            name="goalType"
            className="w-full px-4 py-2 border rounded-md"
            onChange={handleChange}
          >
            <option value="">Select Goal Type</option>
            <option value="lose-fat">To Lose Fat</option>
            <option value="gain-fat">To Gain Fat</option>
            <option value="build-muscles">To Build Muscles</option>
          </select>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;

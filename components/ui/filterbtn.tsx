import { useState } from "react";

const categories = [
  { name: "All Blogs", icon: "♡" }, // Optional icon
  { name: "Academic Success" },
  { name: "Health & Wellness" },
  { name: "Career & Jobs" },
  { name: "Life in Montreal" },
  { name: "Newcomer Essentials" },
  { name: "Extra-Curricular Activities (ECA)" },
  { name: "Student Finances" },
  { name: "Food & Lifestyle" },
];

const FilterButtons = () => {
  const [selected, setSelected] = useState("All Blogs");

  return (
    <div className="flex flex-wrap gap-4 justify-center p-4">
      {categories.map((category) => (
        <button
          key={category.name}
          className={`flex items-center px-6 py-2 rounded-full text-white text-sm font-medium shadow-md transition-all
            ${
              selected === category.name
                ? "bg-customGreen scale-105"
                : "bg-customGreen hover:bg-green-700"
            }
          `}
          onClick={() => setSelected(category.name)}
        >
          {category.icon && <span className="mr-2">{category.icon}</span>}
          {category.name}
        </button>
      ))}
    </div>
  );
};

export default FilterButtons;

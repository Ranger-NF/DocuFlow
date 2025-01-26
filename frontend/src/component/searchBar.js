"use client";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

const SearchBar = () => {
  const [inputValue, setInputValue] = useState("");
  const router = useRouter();

  const onChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push(`/document/?doc=${inputValue}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        onChange={onChange}
        type="text"
        placeholder="Search for documents..."
        className="border justify-center rounded-2xl px-4 py-2 ml-2 w-full text-black"
      />
    </form>
  );
};

export default SearchBar;

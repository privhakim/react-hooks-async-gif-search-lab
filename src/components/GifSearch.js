import React, { useState } from "react";

function GifSearch({ onSubmit }) {
  const [query, setQuery] = useState("");

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(query);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={query}
        onChange={handleChange}
        placeholder="Enter your search term"
      />
      <button type="submit">Search</button>
    </form>
  );
}

export default GifSearch;

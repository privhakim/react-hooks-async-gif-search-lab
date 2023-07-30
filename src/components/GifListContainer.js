import React, { useState, useEffect } from "react";
import GifList from "./GifList";
import GifSearch from "./GifSearch";

function GifListContainer() {
  const [gifs, setGifs] = useState([]);
  const API_KEY = "YOUR_API_KEY";

  const fetchGifs = (query) => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${query}&api_key=${API_KEY}&rating=g`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setGifs(data.data.slice(0, 3)); // Store the first 3 gifs in the state
      })
      .catch((error) => console.error("Error fetching gifs:", error));
  };

  useEffect(() => {
    // Fetch initial gifs when component mounts
    fetchGifs("dolphin");
  }, []);

  const handleSearchSubmit = (query) => {
    fetchGifs(query);
  };

  return (
    <div>
      <GifSearch onSubmit={handleSearchSubmit} />
      <GifList gifs={gifs} />
    </div>
  );
}

export default GifListContainer;

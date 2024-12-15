import React, { useState, useEffect } from "react";
import { useTheme } from '../ThemeContext';

let isLoaded = false;

function Quote() {
  const [quote, setQuote] = useState("Happiness and moral duty are inseparably connected.");
  const [author, setAuthor] = useState("-George Washington");
  const API_KEY = 'fNdaxDRYxlJzwdH/rn2hew==u7TAl8WsRAWhedvX';
  const { theme } = useTheme();

  useEffect(() => {
    if (!isLoaded) {
      fetchQuote();
      isLoaded = true;
    }
  }, []);

  const fetchQuote = async () => {
    try {
      const response = await fetch(
        "https://api.api-ninjas.com/v1/quotes?category=happiness",
        {
          method: "GET",
          headers: {
            "X-Api-Key": API_KEY,
          },
        }
      );
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }
      const data = await response.json();
      const { quote, author } = data[0];
      setQuote(quote);
      setAuthor(author);
    } catch (error) {
      console.error("Failed to fetch quote:", error);
      setQuote("Could not load a quote at the moment. Please try again later.");
      setAuthor("");
    }
  };

  return (
    <div className={`widget quote ${theme === 'dark' ? 'dark' : ''}`}>
      <h4 style={{color:theme==='dark'?"white":"black"}}>"{quote.length > 150 ? quote.substring(0, 150) : quote}"</h4>
      <span>-{author}</span>
    </div>
  );
}

export default Quote;

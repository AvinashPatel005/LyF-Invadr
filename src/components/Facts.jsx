import React, { useState, useEffect } from "react";
import { useTheme } from "../ThemeContext";

function Facts() {
  const facts = [
    "Octopuses have three hearts and blue blood.",
    "Bananas are berries, but strawberries aren't.",
    "A day on Venus is longer than a year on Venus.",
    "Sharks existed before trees — over 400 million years ago!",
    "The inventor of the Pringles can is buried in one.",
    "There's enough DNA in the human body to stretch from the sun to Pluto and back — 17 times.",
    "Wombat poop is cube-shaped.",
    "The Eiffel Tower can grow by about 6 inches during the summer due to heat expansion.",
    "Sloths can hold their breath longer than dolphins.",
    "Butterflies taste with their feet.",
    "A group of flamingos is called a 'flamboyance.'",
    "There are more stars in the universe than grains of sand on Earth.",
    "The heart of a blue whale is the size of a small car.",
    "Polar bears have black skin under their white fur.",
    "Hot water freezes faster than cold water under certain conditions, a phenomenon known as the Mpemba effect.",
    "Cows have best friends and get stressed when separated.",
    "The dot over a lowercase 'i' or 'j' is called a 'tittle.'",
    "Avocados are toxic to birds.",
    "Your stomach gets a new lining every three to four days to prevent it from digesting itself.",
    "Rats laugh when they are tickled.",
    "Koalas have fingerprints that are almost indistinguishable from human fingerprints.",
    "A cloud can weigh more than a million pounds.",
    "Water makes different pouring sounds depending on its temperature.",
    "Sea otters hold hands when they sleep to keep from drifting apart.",
    "A crocodile can't stick its tongue out.",
    "The world's smallest reptile was discovered in 2021 — a tiny chameleon the size of a sunflower seed.",
    "Jellyfish have been around for over 500 million years — older than dinosaurs.",
    "An octopus can regrow a lost arm.",
    "There's an island in Japan inhabited solely by rabbits, called Ōkunoshima.",
    "A bolt of lightning is five times hotter than the surface of the sun.",
    "The human nose can detect over one trillion different scents.",
    "Pineapples take about two years to grow.",
    "Some turtles can breathe through their butts.",
    "The longest hiccuping spree lasted 68 years.",
    "Cows produce more milk when they listen to soothing music.",
  ];
  const {theme} = useTheme()

  const [fact, setFact] = useState(facts[0]);
  const generateRandomFact = () => {
    const randomIndex = Math.floor(Math.random() * facts.length);
    setFact(facts[randomIndex]);
  };
  useEffect(() => {
    generateRandomFact();
  }, []);
  return (
    <div className={`widget fact ${theme === 'dark' ? 'dark' : ''}`}>
      <h3 className="widget-title">Did you know?</h3>
      <h4 style={{color:theme==='dark'?"white":"black"}}>{fact}</h4>
    </div>
  );
}

export default Facts;

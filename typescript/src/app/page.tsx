"use client";
import { RandomFox } from "./components/RandomFox";
import { useState } from "react";

const random = () => Math.floor(Math.random() * 123) + 1;

export default function Home() {
  const [images, setImages] = useState<Array<string>>([
    `https://randomfox.ca/images/${random()}.jpg`,
    `https://randomfox.ca/images/${random()}.jpg`,
    `https://randomfox.ca/images/${random()}.jpg`,
    `https://randomfox.ca/images/${random()}.jpg`,
  ]);

  return (
    <main>
      <h1 className="text-3xl font-bold underline"> HOLA JUAN</h1>
      {images.map((image, index) => (
        <div key={index} className="p-4">
          <RandomFox image={image} />
        </div>
      ))}
    </main>
  );
}

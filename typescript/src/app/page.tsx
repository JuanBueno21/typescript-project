"use client";
import { RandomFox } from "./components/RandomFox";
import { useState } from "react";

const random = () => Math.floor(Math.random() * 123) + 1;

const generateId = () => Math.random().toString(36).substr(2, 9);

type ImageItems = { id: string, url: string };

export default function Home() {

  //TIPOS PRIMITIVOS:
  // const [images, setImages] = useState<Array<string>>([
  //   `https://randomfox.ca/images/${random()}.jpg`,
  //   `https://randomfox.ca/images/${random()}.jpg`,
  //   `https://randomfox.ca/images/${random()}.jpg`,
  //   `https://randomfox.ca/images/${random()}.jpg`,
  // ]);

  //TIPOS PERSONALIZADOS:
  const [images, setImages] = useState<Array<ImageItems>>([
    { id: generateId(), url: `https://randomfox.ca/images/${random()}.jpg` },
    { id: generateId(), url: `https://randomfox.ca/images/${random()}.jpg` },
    { id: generateId(), url: `https://randomfox.ca/images/${random()}.jpg` },
    { id: generateId(), url: `https://randomfox.ca/images/${random()}.jpg` },
  ]);

  return (
    <main>
      <h1 className="text-3xl font-bold underline"> HOLA JUAN</h1>
      {images.map(({ id, url }) => (
        <div key={id} className="p-4">
          <RandomFox image={url} />
        </div>
      ))}
    </main>
  );
}

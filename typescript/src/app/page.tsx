"use client";
import { LazyImage } from "./components/RandomFox";
import { MouseEventHandler, useState } from "react"

const random = () => Math.floor(Math.random() * 123) + 1;

const generateId = () => Math.random().toString(36).substr(2, 9);

export default function Home() {

  //TIPOS PRIMITIVOS:
  // const [images, setImages] = useState<Array<string>>([
  //   `https://randomfox.ca/images/${random()}.jpg`,
  //   `https://randomfox.ca/images/${random()}.jpg`,
  //   `https://randomfox.ca/images/${random()}.jpg`,
  //   `https://randomfox.ca/images/${random()}.jpg`,
  // ]);

  //TIPOS PERSONALIZADOS:
  const [images, setImages] = useState<Array<IFoxImageItem>>([]);

  const addNewFox: MouseEventHandler<HTMLButtonElement> = (event) => {

    const newImageItem: IFoxImageItem = { id: generateId(), url: `https://randomfox.ca/images/${random()}.jpg` };

    setImages([
      ...images,
      newImageItem,
    ]);
  }

  return (
    <main>
      <h1 className="text-3xl font-bold underline"> HOLA JUAN</h1>
      <button onClick={addNewFox} >
        Add Fox
      </button>
      {images.map(({ id, url }) => (
        <div key={id} className="p-4">
          <LazyImage
            // image={url}
            src={url}
            width={320}
            height="auto"
            title="Random Fox"
            className="Rounded bg-gray-300"
            onClick={() => console.log("hey")} />
        </div>
      ))}
    </main>
  );
}

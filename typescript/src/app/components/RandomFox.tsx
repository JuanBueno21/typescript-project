import { useRef, useEffect, useState } from "react";
import { ImgHTMLAttributes } from "react";

type LazyImageProps = { src: string, onClick: () => void };

type ImageNative = ImgHTMLAttributes<HTMLImageElement>;

type Props = LazyImageProps & ImageNative;

export const LazyImage = ({ src, ...imgProps }: Props): JSX.Element => {
  const node = useRef<HTMLImageElement>(null);
  const [currentSrc, setCurrentSrc] = useState(
    "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIwIiBoZWlnaHQ9IjMyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiLz4="
  );

  useEffect(() => {
    const observe = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setCurrentSrc(src)
        }
      });
    });

    if (node.current) {
      observe.observe(node.current);
    }

    observe.disconnect()

  }, [src])



  return <img
    ref={node}
    src={currentSrc}
    {...imgProps}
  />
}

// import { useRef, useEffect, useState } from "react";

// type Props = {
//   image: string;
// };

// export function RandomFox({ image }: Props): JSX.Element {
//   const node = useRef<HTMLImageElement>(null);
//   const [src, setSrc] = useState(
//     "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIwIiBoZWlnaHQ9IjMyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiLz4="
//   );

//   useEffect(() => {
//     const observer = new IntersectionObserver((entries) => {
//       entries.forEach((entry) => {
//         if (!entry.isIntersecting || !node.current) {
//           return;
//         }

//         setSrc(image);
//       });
//     });

//     if (node.current) {
//       observer.observe(node.current);
//     }

//     return () => {
//       observer.disconnect();
//     };
//   }, [image]);

//   return (
//     <img
//       ref={node}
//       width="320"
//       height="auto"
//       src={src}
//       className="mx-auto rounded-md bg-gray-300"
//     />
//   );
// }
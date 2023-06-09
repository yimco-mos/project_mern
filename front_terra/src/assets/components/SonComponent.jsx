import { useEffect, useState} from "react";
import { LogicHeader } from "./LogicHeader";
import "../styles/styleBackgrondimage.css";

//desde aqui empieza la logica que se controla todo
export const SonComponent = () => {
  const [images, setImages] = useState("");

  //funcion para el cambio de imagenes
  useEffect(() => {
    const intervalImage = setInterval(() => {
      const image = ["image1", "image2", "image3"];
      const imagesSelect = Math.floor(Math.random() * image.length);
      const randomImage = image[imagesSelect];
      setImages(randomImage);
    }, 4000);
    return () => {
      clearInterval(intervalImage);
    };
  }, []);

  return (
      <div className="all_content_imageBackground">
        <div className="content_all_image_cover ">
          <div className={`content_image_cover  ${images}`}> </div>

          <LogicHeader />
        </div>
      </div>
  );
};

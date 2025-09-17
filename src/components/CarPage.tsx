import { useEffect, useState } from "react";
import "../style/CarPage.css";
import Description from "./CarDescription";

export default function CarImage({
  image,
  description,
  score,
}: {
  image: string | undefined;
  description: string;
  score: number;
}) {
  const [carImageUrl, setCarImage] = useState<string>();

  useEffect(() => {
    const getCarData = async () => {
      try {
        const respons = await fetch(`http://localhost:8081/file/${image}`, {
          method: "GET",
        });
        const blob = await respons.blob();
        const imageUrl = URL.createObjectURL(blob);
        setCarImage(imageUrl);
      } catch (err) {
        console.log(err);
      }
    };
    getCarData();
  }, []);
  return (
    <>
      <article id="carPage">
        <img id="image" src={carImageUrl} alt="" />
        <Description description={description} score={score} />
      </article>
    </>
  );
}

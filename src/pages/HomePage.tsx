import { useEffect, useRef, useState } from "react";
import type ICarInfo from "../interfaces/ICarInfo";
import CarImage from "../components/CarPage";
import Details from "../components/Detalils";
import "../style/HomePage.css";

export default function HomePage() {
  const [carData, setCarData] = useState<ICarInfo>();
  const oneRender = useRef(false);

  useEffect(() => {
    const getCarData = async () => {
      try {
        if (oneRender.current === true) return;
        oneRender.current = true;
        const respons = await fetch("http://localhost:8081", {
          method: "GET",
        });
        const result = await respons.json();
        setCarData(result);
      } catch (err) {}
    };
    getCarData();
  }, []);
  return (
    <>
      <article id="homePage">
        {carData && <Details {...(carData as ICarInfo)} />}
        {carData && (
          <CarImage
            image={carData?.image_id}
            description={carData?.Description}
            score={carData.score}
          />
        )}
      </article>
    </>
  );
}

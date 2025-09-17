import { useEffect, useState } from "react";
import "../style/Description.css";

export default function Description({
  description,
  score,
}: {
  description: string;
  score: number;
}) {
  const [className, setClassName] = useState("regular");
  useEffect(() => {
    if (score > 50) {
      setClassName("dangerous");
    } else if (score > 25) {
      setClassName("unsafe");
      console.log(className);
    }
  }, []);
  return (
    <section id="description" className={className}>
      <p id="descriptionText">{description} : תיאור</p>
    </section>
  );
}

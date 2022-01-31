import Image from "next/image";
import classes from "src/components/MapImage.module.css";

export const MapImage = (props: any) => {
  return (
    <>
      <Image
        src="/map.png"
        alt="map"
        layout={"responsive"}
        width={600}
        height={300}
      />
    </>
  );
};

import Image from "next/image";

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

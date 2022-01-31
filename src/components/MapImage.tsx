import Image from "next/image";
import styles from "src/components/MapImage.module.css";
import PinDropIcon from "@material-ui/icons/PinDrop";

export const MapImage = (props: any) => {
  const data = [
    {
      id: 1,
      name: "上落合",
      x: 47.3,
      y: 60,
      color: "red",
    },
    {
      id: 2,
      name: "###",
      x: 40.7,
      y: 50,
      color: "blue",
    },
    {
      id: 3,
      name: "###",
      x: 53.5,
      y: 25,
      color: "yellow",
    },
    {
      id: 4,
      name: "###",
      x: 45,
      y: 32.5,
      color: "green",
    },
    {
      id: 5,
      name: "###",
      x: 56,
      y: 51,
      color: "orange",
    },
  ];

  return (
    <div className={styles.map}>
      {/* 画像 */}
      <Image
        src="/map.png"
        alt="map"
        layout={"responsive"}
        width={600}
        height={300}
      />

      {/* ピンのデータ */}
      {data.map((loc) => {
        return (
          <div
            key={loc.id}
            style={{
              position: "absolute",
              left: `${loc.x}%`,
              bottom: `${loc.y}%`,
            }}
          >
            <PinDropIcon htmlColor={loc.color} />
          </div>
        );
      })}
    </div>
  );
};

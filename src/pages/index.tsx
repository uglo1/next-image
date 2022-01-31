import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import { MapImage } from "src/components/MapImage";
import PinDropIcon from "@material-ui/icons/PinDrop";

const Dashboard: NextPage = () => {
  return (
    <>
      <h1>Hello World</h1>
      <div className={styles.wrapper}>
        <div className={styles.side}>
          <MapImage />
          <div className={styles.pin1}>
            <PinDropIcon htmlColor="red" />
          </div>
          <div className={styles.pin2}>
            <PinDropIcon htmlColor="blue" fontSize="large" />
          </div>
          <div className={styles.pin3}>
            <PinDropIcon htmlColor="yellow" />
          </div>
          <div className={styles.pin4}>
            <PinDropIcon htmlColor="green" />
          </div>
          <div className={styles.pin5}>
            <PinDropIcon htmlColor="orange" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;

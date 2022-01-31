import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import { MapImage } from "src/components/MapImage";

const Dashboard: NextPage = () => {
  return (
    <>
      <h1>Hello World</h1>
      <div className={styles.wrapper}>
        <MapImage />
      </div>
    </>
  );
};

export default Dashboard;

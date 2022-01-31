import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import { MapImage } from "src/components/MapImage";
import Head from "next/head";
import { Box, Container, Grid } from "@mui/material";
import { DashboardLayout } from "src/components/Layouts/DashBoardLayout";
import { style } from "@mui/system";
import Image from "next/image";

const Dashboard: NextPage = () => {
  const options = {
    src: "public/map.png",

    // 非同期処理で取得する。
    pins: {
      soeda: {
        x: 100,
        y: 100,
        pinColor: "blue",
      },
      iizuka: {
        x: 100,
        y: 100,
        pinColor: "red",
      },
    },
  };

  return (
    <>
      <h1>Hello World</h1>
      <h2>aaaa</h2>
      <div className={styles.wrapper}>
        <div className={styles.side}>
          <MapImage />

          <div className={styles.pin}>重ねたい文字</div>
        </div>
        <div className={styles.main}>aa</div>
      </div>
    </>
  );
};

// Dashboard.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Dashboard;

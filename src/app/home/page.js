"use client";

import axiosInstance from "@/utils/axios";
import styles from "./page.module.css";
import { useEffect } from "react";

export default function Home1() {

  // useEffect(() => {
  //   const controller = new AbortController();
  //   (async () => {
  //     try {
  //       const res = await axiosInstance.get(`/users`, {
  //         signal: controller.signal
  //       })
  //       console.log(res.data)
  //     } catch (error) {
  //     if (error.name === "CanceledError") return;
  //     console.error(error);

  //     }
  //   })()
  //   return () => controller.abort()
  // }, [])


  return (
    <div className={styles.name}>
      {/* <h1>Home</h1> */}
    </div>
  );
}
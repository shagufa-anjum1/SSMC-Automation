import React from "react";
import { Outlet } from "react-router-dom"; // Yeh import add karo
import { Header } from "@components/layout/Header";
import { Footer } from "@components/layout/Footer";
import styles from "./MainLayout.module.css";

export const MainLayout: React.FC = () => {  // children prop hatao
  return (
    <div className={styles.layout}>
      <Header />
      <main className={styles.main}>
        <Outlet /> {/* children ki jagah Outlet use karo */}
      </main>
      <Footer />
    </div>
  );
};

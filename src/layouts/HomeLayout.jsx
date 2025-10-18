import React from "react";
import { Outlet } from "react-router";
import Header from "../components/Header";
import LatestNews from "../components/LatestNews";

const HomeLayout = () => {
  return (
    <div>
      <header>
        <Header />
        <section className="container mx-auto mb-3">
          <LatestNews />
        </section>
      </header>
      <main>
        <section className="left-nav"></section>
        <section className="main">
          <Outlet />
        </section>
        <section className="right-nav"></section>
      </main>
    </div>
  );
};

export default HomeLayout;

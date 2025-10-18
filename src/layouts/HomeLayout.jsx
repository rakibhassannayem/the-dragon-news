import React from "react";
import { Outlet } from "react-router";
import Header from "../components/Header";
import LatestNews from "../components/LatestNews";
import Navbar from "../components/Navbar";

const HomeLayout = () => {
  return (
    <div>
      <header>
        <Header />
        <section className="max-w-11/12 mx-auto mb-3">
          <LatestNews />
        </section>
        <nav className="max-w-11/12 mx-auto">
          <Navbar />
        </nav>
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

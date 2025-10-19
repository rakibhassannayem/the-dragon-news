import React, { use } from "react";
import { Outlet, useLoaderData, useNavigation } from "react-router";
import Header from "../components/Header";
import LatestNews from "../components/LatestNews";
import Navbar from "../components/Navbar";
import LeftAside from "../components/homelayout/LeftAside";
import RightAside from "../components/homelayout/RightAside";
import Loading from "../pages/Loading";

const HomeLayout = () => {
  const { state } = useNavigation();
  const data = useLoaderData();
  const breakingNewsTitles = data.filter((bn) => bn.category_id == 2).map((singleData) => singleData.title);

  return (
    <div>
      <header>
        <Header />
        <section className="w-11/12 mx-auto mb-3">
          <LatestNews breakingNewsTitles={breakingNewsTitles} />
        </section>
        <nav className="w-11/12 mx-auto">
          <Navbar />
        </nav>
      </header>
      <main className="w-11/12 mx-auto my-3 grid grid-cols-12 gap-6">
        <aside className="col-span-4 md:col-span-3 md:sticky top-2 h-fit">
          <LeftAside />
        </aside>
        <section className="main col-span-8 md:col-span-6">
          {state === "loading" ? <Loading /> : <Outlet />}
        </section>
        <aside className="col-span-full md:col-span-3 sticky top-2 h-fit">
          <RightAside />
        </aside>
      </main>
    </div>
  );
};

export default HomeLayout;

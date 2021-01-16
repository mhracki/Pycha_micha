import Head from "next/head";
import "../styles/index.scss";
import React from "react";
import Navbar from "../components/navbar";
import MainHeader from "../components/home/main-header";
import CategoriesList from "../components/home/category/categories-list";
import AboutUs from "../components/home/about-us/about-us";
import { fetchAPI } from "../api/api";
import NewsList from '../components/home/news/news-list';
import Contact from '../components/home/contact/contact';

export default function Index({ menu }) {
  return (
    <div>
      <Head>
        <title>Pycha Micha - Restauracja</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <MainHeader />
      <div className="container">
        <CategoriesList menu={menu.categories} />
      </div>
      <div className="container-big">
        <AboutUs />
        <NewsList/>
      </div>
      <Contact/>

    </div>
  );
};
export async function getStaticProps() {
  const menu = await fetchAPI("menu");
  return { props: { menu } };
}

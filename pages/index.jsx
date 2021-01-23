import Head from "next/head";
import React from "react";
import Navbar from "../components/navbar/navbar";
import MainHeader from "../components/home/main-header";
import CategoriesList from "../components/home/category/categories-list";
import AboutUs from "../components/home/about-us/about-us";
import { fetchAPI } from "../api/api";
import NewsList from '../components/home/news/news-list';
import Contact from '../components/home/contact/contact';
import Sidebar from '../components/navbar/sidebar';

export default function Index({ menu,aboutUs,contact }) {

  return (
    <div id="App">
      <Head>
        <title>Pycha Micha - Restauracja</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Sidebar pageWrapId={"page-wrap"} outerContainerId={"App"}/>
      <MainHeader />
      <div className="container" id="page-wrap">
        <CategoriesList menu={menu.categories} />
      </div>
      <div className="container-big">
        <AboutUs aboutUs={aboutUs} />
        <NewsList/>
      </div>
      <Contact contact={contact}/>

    </div>
  );
};
export async function getStaticProps() {
  const menu = await fetchAPI("menu");
  const aboutUs = await fetchAPI("about-us");
  const contact = await fetchAPI("contact");
  return { props: { menu,aboutUs,contact } };
}

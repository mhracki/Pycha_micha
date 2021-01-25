import Head from "next/head";
import React from "react";
import Navbar from "../components/navbar/navbar";
import MainHeader from "../components/home/main-header";
import CategoriesList from "../components/home/category/categories-list";
import AboutUs from "../components/home/about-us/about-us";
import { fetchAPI } from "../api/api";
import NewsList from "../components/home/news/news-list";
import Contact from "../components/home/contact/contact";
import Sidebar from "../components/navbar/sidebar";



export default function Index({ menu, aboutUs, contact, slogan,metaTags,news }) {
  return (
    <div id="App">
      <Head>
        <title>Pycha Micha - Restauracja</title>
        <meta property="og:type" content="website" />
        <meta property="og:title" content={metaTags.title} />
        <meta name="description" content={metaTags.description} />
        <meta name="keywords" content={metaTags.keywords} />
        <meta property="og:url" content={metaTags.url} />
        <meta property="og:description" content={metaTags.description} />
        <meta property="og:image" content={metaTags.image} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Sidebar pageWrapId={"page-wrap"} outerContainerId={"App"} />
      <MainHeader slogan={slogan} />
      <div className="container" id="page-wrap">
        <CategoriesList menu={menu.categories} />
      </div>
      <div className="container-big">
        <AboutUs aboutUs={aboutUs} />
        <NewsList newsList={news} />
      </div>
      <Contact contact={contact} />
    </div>
  );
}
export async function getStaticProps() {
  const slogan = await fetchAPI("slogan");
  const menu = await fetchAPI("menu");
  const aboutUs = await fetchAPI("about-us");
  const news = await fetchAPI("news-section")
  const contact = await fetchAPI("contact");
  const metaTags = await fetchAPI("meta-tagi");
  return { props: { menu, aboutUs, contact, slogan,metaTags, news } };
}

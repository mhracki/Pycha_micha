import Head from "next/head";
import FoodList from "../components/menu/food-list";
import Navbar from "../components/navbar/navbar";
import Sidebar from '../components/navbar/sidebar';
import { fetchAPI } from "../api/api";

export default function Menu({ menu }) {
  return (
    <div id="App">
      <Head>
        <title>Menu - Pycha Micha</title>
      </Head>
      <Navbar color="white" />
      <Sidebar pageWrapId={"page-wrap"} outerContainerId={"App"} />
      <div id="page-wrap">
        <FoodList foodList={menu.categories} />
      </div>
    </div>
  );
}
export async function getStaticProps() {
  // Fetch global site settings from Strapi
  const menu = await fetchAPI("menu");
  // Pass the data to our page via props
  return { props: { menu } };
}

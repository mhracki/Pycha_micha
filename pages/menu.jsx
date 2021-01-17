import Head from "next/head";
import FoodList from "../components/menu/food-list";
import Navbar from "../components/navbar/navbar";
import { fetchAPI } from "../api/api";

export default function Menu({ menu }) {
  return (
    <div>
      <Head>
        <title>Menu - Pycha Micha</title>
      </Head>
      <Navbar color="white" />
      <FoodList foodList={menu.categories} />
    </div>
  );
}
export async function getStaticProps() {
  // Fetch global site settings from Strapi
  const menu = await fetchAPI("menu");
  // Pass the data to our page via props
  return { props: { menu } };
}
